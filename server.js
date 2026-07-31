const express = require('express');
const cors = require('cors');
const path = require('path');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const store = require('./db');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;
const GROQ_API_KEY = process.env.GROQ_API_KEY;
const GROQ_MODEL = process.env.GROQ_MODEL || 'llama-3.3-70b-versatile';
const JWT_SECRET = process.env.JWT_SECRET;

if (!GROQ_API_KEY) {
  console.warn('ATTENTION: GROQ_API_KEY non défini. Ajoute-le dans les variables d\'environnement Railway.');
}
if (!JWT_SECRET) {
  console.warn('ATTENTION: JWT_SECRET non défini. Ajoute-le dans les variables d\'environnement Railway (chaîne aléatoire longue).');
}

function signToken(userId) {
  return jwt.sign({ uid: userId }, JWT_SECRET || 'dev-secret-change-me', { expiresIn: '90d' });
}

function requireAuth(req, res, next) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;
  if (!token) return res.status(401).json({ error: 'Non authentifié.' });
  try {
    const payload = jwt.verify(token, JWT_SECRET || 'dev-secret-change-me');
    req.userId = payload.uid;
    next();
  } catch (e) {
    return res.status(401).json({ error: 'Session expirée, reconnecte-toi.' });
  }
}

// --- Authentification ---
app.post('/api/auth/register', (req, res) => {
  const { name, email, password } = req.body || {};
  if (!name || !email || !password) return res.status(400).json({ error: 'Nom, email et mot de passe requis.' });
  if (password.length < 6) return res.status(400).json({ error: 'Mot de passe trop court (6 caractères minimum).' });
  const cleanEmail = String(email).trim().toLowerCase();
  if (store.findUserByEmail(cleanEmail)) return res.status(409).json({ error: 'Un compte existe déjà avec cet email.' });
  try {
    const passwordHash = bcrypt.hashSync(password, 10);
    const userId = store.createUser({ name: name.trim(), email: cleanEmail, passwordHash });
    const token = signToken(userId);
    const { stats, profile } = store.getProgress(userId);
    res.json({ token, stats, profile });
  } catch (e) {
    console.error('Erreur inscription:', e);
    res.status(500).json({ error: 'Erreur serveur lors de l\'inscription.' });
  }
});

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body || {};
  if (!email || !password) return res.status(400).json({ error: 'Email et mot de passe requis.' });
  const user = store.findUserByEmail(String(email).trim().toLowerCase());
  if (!user || !bcrypt.compareSync(password, user.password_hash)) {
    return res.status(401).json({ error: 'Email ou mot de passe incorrect.' });
  }
  const token = signToken(user.id);
  const { stats, profile } = store.getProgress(user.id);
  res.json({ token, stats, profile });
});

// --- Progression (protégé) ---
app.get('/api/progress', requireAuth, (req, res) => {
  res.json(store.getProgress(req.userId));
});

app.put('/api/progress', requireAuth, (req, res) => {
  const { stats, profile } = req.body || {};
  if (!stats || !profile) return res.status(400).json({ error: 'stats et profile requis.' });
  store.setProgress(req.userId, stats, profile);
  res.json({ ok: true });
});

// Petit cache mémoire pour éviter de régénérer le même quiz plusieurs fois de suite
const cache = new Map();
const CACHE_TTL_MS = 1000 * 60 * 60; // 1h

function cacheKey(niveau, matiere, chapitre) {
  return `${niveau}::${matiere}::${chapitre}`.toLowerCase();
}

app.post('/api/quiz', async (req, res) => {
  const { niveau, matiere, chapitre, questionCount = 20, difficulty = 'mixte' } = req.body || {};

  if (!niveau || !matiere || !chapitre) {
    return res.status(400).json({ error: 'niveau, matiere et chapitre sont requis.' });
  }

  const key = `${cacheKey(niveau, matiere, chapitre)}::${questionCount}::${difficulty}`;
  const cached = cache.get(key);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL_MS) {
    return res.json(cached.data);
  }

  const systemPrompt = `Tu es un professeur camerounais expérimenté qui prépare des élèves aux examens officiels (BEPC, Probatoire, Baccalauréat) selon le programme du Cameroun.
Génère un quiz de révision strictement au format JSON, sans aucun texte avant ou après, sans balises markdown.

Format exact attendu:
{
  "questions": [
    {
      "question": "texte de la question",
      "options": ["option A", "option B", "option C", "option D"],
      "reponse_correcte": 0,
      "explication": "explication claire et pédagogique de la bonne réponse"
    }
  ]
}

Règles:
- Génère exactement ${questionCount} questions (entre 10 et 30), à choix multiples (4 options chacune).
- "reponse_correcte" est l'index (0 à 3) de la bonne option.
- Les questions doivent correspondre au niveau scolaire, à la matière et au chapitre/thème donnés.
- Utilise un français clair, adapté au contexte scolaire camerounais.
- Respecte la difficulté demandée : mixte = facile/moyenne/difficile ; facile = principalement facile ; difficile = principalement difficile.
- Ne retourne QUE le JSON, rien d'autre.`;

  const userPrompt = `Niveau: ${niveau}\nMatière: ${matiere}\nChapitre/Thème: ${chapitre}\nNombre de questions: ${questionCount}\nDifficulté: ${difficulty}\n\nGénère le quiz maintenant.`;

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
        temperature: 0.7,
        max_tokens: 4500,
        response_format: { type: 'json_object' }
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('Erreur Groq:', errText);
      return res.status(502).json({ error: 'Erreur lors de la génération du quiz.' });
    }

    const data = await response.json();
    const rawContent = data.choices?.[0]?.message?.content || '{}';

    let quiz;
    try {
      quiz = JSON.parse(rawContent);
    } catch (parseErr) {
      const cleaned = rawContent.replace(/```json|```/g, '').trim();
      quiz = JSON.parse(cleaned);
    }

    cache.set(key, { data: quiz, timestamp: Date.now() });
    res.json(quiz);
  } catch (err) {
    console.error('Erreur serveur:', err);
    res.status(500).json({ error: 'Erreur interne du serveur.' });
  }
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});


app.post('/api/tutor', async (req, res) => {
  try {
    const { question, niveau = 'BEPC', matiere = 'Général' } = req.body || {};
    if (!question) return res.status(400).json({ error: 'Question requise' });
    if (!GROQ_API_KEY) return res.status(503).json({ error: 'IA non configurée' });
    const prompt = `Tu es Prof IA, un enseignant bienveillant pour un élève préparant ${niveau}, matière ${matiere}, au Cameroun.
Réponds en français clair et pédagogique. Explique étape par étape si nécessaire. N'invente pas de source.
Question de l'élève : ${question}`;
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method:'POST',
      headers:{'Content-Type':'application/json','Authorization':`Bearer ${GROQ_API_KEY}`},
      body:JSON.stringify({model:process.env.GROQ_MODEL || 'llama-3.3-70b-versatile',messages:[{role:'system',content:'Tu es un professeur IA pédagogique.'},{role:'user',content:prompt}],temperature:0.4})
    });
    if(!response.ok) return res.status(response.status).json({error:'Service IA indisponible'});
    const data=await response.json();
    res.json({answer:data.choices?.[0]?.message?.content || 'Aucune réponse.'});
  } catch(e) { res.status(500).json({error:'Erreur serveur'}); }
});

app.listen(PORT, () => {
  console.log(`Serveur de quiz démarré sur le port ${PORT}`);
});
