# Révision+ V3

Version enrichie de l'application de préparation BEPC / Probatoire / Baccalauréat.

## Nouveautés
- Tableau de bord et objectifs quotidiens
- Cours / fiches express + quiz
- Prof IA via `/api/tutor`
- Examens blancs chronométrés
- Planning de révision
- XP, séries, badges et statistiques
- **Comptes utilisateurs (email + mot de passe) avec progression synchronisée côté serveur**
- Mode sombre
- PWA et cache hors-ligne
- Quiz IA avec cache local

## Lancer en local
1. `npm install`
2. Copier `.env.example` vers `.env`
3. Renseigner `GROQ_API_KEY` et `JWT_SECRET` (chaîne aléatoire longue)
4. `npm start`
5. Ouvrir `http://localhost:3000`

## Déployer sur Railway
1. Pousser ce dossier sur un repo GitHub, puis *New Project → Deploy from GitHub repo* sur Railway.
2. Dans **Variables**, ajouter `GROQ_API_KEY`, `JWT_SECRET` (obligatoires) et éventuellement `GROQ_MODEL`.
3. **Important — persistance de la base de données** : par défaut le disque de Railway est éphémère (tout est effacé à chaque redéploiement). Ajouter un **Volume** (Railway → onglet *Volumes* → *New Volume*, monté par ex. sur `/data`), puis définir la variable `DB_PATH=/data/data.db`. Sans ça, les comptes créés seront perdus au prochain déploiement.
4. Railway détecte `package.json` et lance `npm start` automatiquement.

## Comptes & progression
- Chaque visiteur sans compte garde une progression locale (comme avant), stockée uniquement dans son navigateur.
- Depuis l'écran **Profil → Se connecter**, un élève peut créer un compte (email + mot de passe) : sa progression est alors sauvegardée côté serveur (SQLite) et se resynchronise automatiquement sur n'importe quel appareil où il se reconnecte.
- Les mots de passe sont hashés (bcrypt), les sessions utilisent un token JWT valable 90 jours.
