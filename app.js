const PROGRAMME = {
  bepc: {
    label: 'BEPC',
    description: "Brevet d'Études du Premier Cycle",
    matieres: [
      { id: 'mathematiques', label: 'Mathématiques', color: '#2F6FE0' },
      { id: 'francais', label: 'Français', color: '#5B8DEF' },
      { id: 'anglais', label: 'Anglais', color: '#1E4B8F' },
      { id: 'histoire', label: 'Histoire', color: '#4A6FA5' },
      { id: 'geographie', label: 'Géographie', color: '#7FA8E0' },
      { id: 'ecm', label: 'ECM', color: '#3B5FA0' },
      { id: 'svt', label: 'SVT', color: '#6FA0D8' },
      { id: 'physique-chimie', label: 'Physique-Chimie', color: '#2C4E85' },
    ],
  },
  probatoire: {
    label: 'Probatoire',
    description: "Examen de fin de cycle avant le Baccalauréat",
    matieres: [
      { id: 'mathematiques', label: 'Mathématiques', color: '#2F6FE0' },
      { id: 'francais', label: 'Français', color: '#5B8DEF' },
      { id: 'anglais', label: 'Anglais', color: '#1E4B8F' },
      { id: 'histoire-geo', label: 'Histoire-Géo', color: '#4A6FA5' },
      { id: 'physique-chimie', label: 'Physique-Chimie', color: '#2C4E85' },
      { id: 'svt', label: 'SVT', color: '#6FA0D8' },
      { id: 'ecm', label: 'ECM', color: '#3B5FA0' },
    ],
  },
  bac: {
    label: 'Baccalauréat',
    description: "Examen de fin d'études secondaires",
    matieres: [
      { id: 'mathematiques', label: 'Mathématiques', color: '#2F6FE0' },
      { id: 'francais', label: 'Français', color: '#5B8DEF' },
      { id: 'anglais', label: 'Anglais', color: '#1E4B8F' },
      { id: 'philosophie', label: 'Philosophie', color: '#4A6FA5' },
      { id: 'histoire-geo', label: 'Histoire-Géo', color: '#7FA8E0' },
      { id: 'physique-chimie', label: 'Physique-Chimie', color: '#2C4E85' },
      { id: 'svt', label: 'SVT', color: '#6FA0D8' },
    ],
  },
};
const ICONS=['📐','📖','🌍','🧪','🧠','⚛️','🌱','🗣️','💻','📚'];
const SUGGESTIONS=['Révision générale','Exercices type examen','Points difficiles','Sujet d’examen'];
const LESSONS={
  mathematiques:{title:'Méthode & raisonnement',body:'<h3>Commence par identifier ce que l’on te demande.</h3><p>Dans un exercice, écris les données, choisis la formule ou la propriété adaptée, puis avance étape par étape. Vérifie toujours ton résultat à la fin.</p><h3>Une bonne méthode</h3><ul><li>Lire deux fois l’énoncé.</li><li>Repérer les informations utiles.</li><li>Poser clairement les calculs.</li><li>Vérifier les unités et le résultat.</li></ul>',tip:'Un résultat sans démarche est souvent difficile à vérifier. Soigne les étapes.'},
  francais:{title:'Comprendre un texte',body:'<h3>Lire avant d’interpréter.</h3><p>Repère le thème, la thèse, les arguments, les procédés d’écriture et le vocabulaire important. Pour répondre, cite l’idée puis justifie-la avec un élément du texte.</p><h3>Pour réussir</h3><ul><li>Répondre précisément à la question.</li><li>Justifier les affirmations.</li><li>Respecter la structure demandée.</li></ul>',tip:'Une réponse bien justifiée vaut mieux qu’une réponse longue mais vague.'},
  anglais:{title:'Réussir en anglais',body:'<h3>La compréhension avant la production.</h3><p>Lis ou écoute d’abord pour saisir l’idée générale, puis reviens sur les détails (mots-clés, temps des verbes, connecteurs). Pour t’exprimer, construis des phrases simples et correctes plutôt que des phrases compliquées mal maîtrisées.</p><h3>Pour progresser</h3><ul><li>Apprendre du vocabulaire par thème.</li><li>Revoir les temps et la grammaire de base.</li><li>Pratiquer la prononciation à voix haute.</li><li>Lire ou écouter un peu chaque jour.</li></ul>',tip:'Un anglais simple et correct rapporte plus de points qu’un anglais ambitieux mais plein d’erreurs.'},
  histoire:{title:'Analyser un fait historique',body:'<h3>Situer avant d’expliquer.</h3><p>Place toujours l’événement dans son contexte : dates, lieux, acteurs. Cherche ensuite les causes, le déroulement, puis les conséquences. Une bonne réponse d’histoire suit cet ordre logique.</p><h3>Pour réussir</h3><ul><li>Mémoriser les repères chronologiques clés.</li><li>Utiliser le vocabulaire historique précis.</li><li>Distinguer cause, fait et conséquence.</li><li>Illustrer avec un exemple concret.</li></ul>',tip:'Une date sans explication ne suffit pas : montre toujours pourquoi elle est importante.'},
  geographie:{title:'Lire un espace géographique',body:'<h3>Observer avant de décrire.</h3><p>Face à une carte, un tableau ou une image, repère d’abord l’échelle, la légende et les grandes tendances. Décris ensuite en allant du général vers le particulier, en utilisant le vocabulaire géographique adapté.</p><h3>Pour réussir</h3><ul><li>Toujours lire le titre et la légende d’un document.</li><li>Localiser avant d’expliquer.</li><li>Utiliser des chiffres et des exemples précis.</li><li>Relier les phénomènes entre eux (causes, effets).</li></ul>',tip:'Une carte bien lue vaut souvent une bonne partie de la réponse.'},
  ecm:{title:'Comprendre les notions civiques',body:'<h3>Relier la notion à la vie réelle.</h3><p>Une notion d’ECM (droit, devoir, citoyenneté, valeur…) se comprend mieux avec un exemple concret de la vie quotidienne ou de la vie du citoyen. Définis toujours la notion avant de l’illustrer.</p><h3>Pour réussir</h3><ul><li>Apprendre les définitions précises.</li><li>Donner un exemple concret à chaque fois.</li><li>Relier droits et devoirs.</li><li>Soigner l’argumentation et l’expression.</li></ul>',tip:'Une notion bien définie puis illustrée par un exemple montre une vraie compréhension.'},
  svt:{title:'Méthode en Sciences de la Vie et de la Terre',body:'<h3>Observer, expliquer, schématiser.</h3><p>Décris d’abord ce que tu observes (organe, phénomène, expérience), explique ensuite le mécanisme avec le vocabulaire scientifique exact, puis appuie ta réponse sur un schéma clair et légendé si possible.</p><h3>Pour réussir</h3><ul><li>Apprendre le vocabulaire scientifique précis.</li><li>Toujours légender un schéma.</li><li>Relier structure et fonction.</li><li>Vérifier la logique de ton explication.</li></ul>',tip:'Un schéma propre et bien légendé vaut souvent plus qu’un long paragraphe.'},
  'physique-chimie':{title:'Méthode en Physique-Chimie',body:'<h3>Comprendre avant de calculer.</h3><p>Identifie les données, la grandeur cherchée et la formule adaptée. Convertis les unités si besoin, pose le calcul étape par étape, puis vérifie que le résultat est cohérent (ordre de grandeur, unité).</p><h3>Pour réussir</h3><ul><li>Connaître les formules et leurs unités.</li><li>Faire un schéma du dispositif si utile.</li><li>Poser le calcul proprement.</li><li>Toujours vérifier l’unité du résultat final.</li></ul>',tip:'Un résultat sans unité est considéré comme faux, même si le calcul est juste.'},
  'histoire-geo':{title:'Réussir en Histoire-Géographie',body:'<h3>Deux disciplines, une même rigueur.</h3><p>En histoire, situe les faits dans le temps et explique causes puis conséquences. En géographie, localise avant de décrire et appuie-toi sur les documents (carte, tableau, graphique). Dans les deux cas, structure ta réponse en introduction, développement, conclusion.</p><h3>Pour réussir</h3><ul><li>Maîtriser les repères chronologiques et spatiaux.</li><li>Exploiter systématiquement les documents fournis.</li><li>Utiliser le vocabulaire spécifique à chaque discipline.</li><li>Structurer clairement chaque réponse.</li></ul>',tip:'Un plan clair, même simple, est toujours mieux noté qu’une réponse désorganisée.'},
  philosophie:{title:'Construire une dissertation philosophique',body:'<h3>Interroger avant d’affirmer.</h3><p>Une dissertation part d’un problème : reformule le sujet en question, dégage les enjeux, puis construis une réflexion progressive (thèse, nuance ou antithèse, dépassement) appuyée sur des exemples et des références précises.</p><h3>Pour réussir</h3><ul><li>Toujours définir les notions clés du sujet.</li><li>Problématiser avant de répondre directement.</li><li>Illustrer chaque idée par un exemple ou un auteur.</li><li>Soigner l’introduction et la conclusion.</li></ul>',tip:'Une idée bien argumentée et illustrée vaut mieux que plusieurs idées à peine énoncées.'}
};
const state={niveau:null,matiere:null,chapitre:null,quiz:null,currentQuestion:0,score:0,answered:false,questionCount:20,difficulty:'mixte',examMode:false,examLevel:'bepc',examTimer:null,examSeconds:0};
let stats=JSON.parse(localStorage.getItem('revisionStats')||'{"quizzes":0,"correct":0,"answered":0,"xp":0,"streak":0,"lastDate":"","daily":0,"dailyDate":""}');
let profile=JSON.parse(localStorage.getItem('revisionProfile')||'{"name":"Junior"}');
const $=id=>document.getElementById(id);
let authToken=localStorage.getItem('authToken');
function apiHeaders(json){const h={};if(json)h['Content-Type']='application/json';if(authToken)h['Authorization']='Bearer '+authToken;return h}
function save(){localStorage.setItem('revisionStats',JSON.stringify(stats));localStorage.setItem('revisionProfile',JSON.stringify(profile));updateStats();pushProgress()}
function pushProgress(){if(!authToken)return;fetch('/api/progress',{method:'PUT',headers:apiHeaders(true),body:JSON.stringify({stats,profile})}).catch(()=>{})}
async function pullProgress(){
  if(!authToken)return;
  try{
    const r=await fetch('/api/progress',{headers:apiHeaders()});
    if(r.status===401){authToken=null;localStorage.removeItem('authToken');updateAccountUI();return}
    if(!r.ok)throw Error();
    const data=await r.json();
    stats=data.stats;profile=data.profile;
    localStorage.setItem('revisionStats',JSON.stringify(stats));
    localStorage.setItem('revisionProfile',JSON.stringify(profile));
    updateStats()
  }catch(e){/* hors-ligne ou serveur indisponible : on garde les données locales */}
}
function updateAccountUI(){
  const connected=!!authToken;
  $('accountIcon').textContent=connected?'✅':'👤';
  $('accountStatus').textContent=connected?'Connecté':'Non connecté';
  $('accountSub').textContent=connected?'Ta progression est sauvegardée en ligne.':'Connecte-toi pour synchroniser ta progression.';
  $('accountBtn').textContent=connected?'Se déconnecter':'Se connecter'
}
$('accountBtn').onclick=()=>{
  if(authToken){
    if(confirm('Te déconnecter ? Tes statistiques restent sur cet appareil.')){authToken=null;localStorage.removeItem('authToken');updateAccountUI()}
  }else{
    $('authError').textContent='';showScreen('screen-auth')
  }
};
let authMode='login';
document.querySelectorAll('#authTabs button').forEach(b=>b.onclick=()=>{
  document.querySelectorAll('#authTabs button').forEach(x=>x.classList.remove('selected'));
  b.classList.add('selected');authMode=b.dataset.tab;
  $('authNameField').style.display=authMode==='register'?'block':'none';
  $('authSubmitBtn').querySelector('span').textContent=authMode==='register'?'Créer mon compte':'Se connecter';
  $('authError').textContent=''
});
$('authSubmitBtn').onclick=async()=>{
  const email=$('authEmail').value.trim(),password=$('authPassword').value,name=$('authName').value.trim();
  $('authError').textContent='';
  if(!email||!password||(authMode==='register'&&!name)){$('authError').textContent='Remplis tous les champs.';return}
  const endpoint=authMode==='register'?'/api/auth/register':'/api/auth/login';
  const body=authMode==='register'?{name,email,password}:{email,password};
  $('authSubmitBtn').disabled=true;
  try{
    const r=await fetch(endpoint,{method:'POST',headers:apiHeaders(true),body:JSON.stringify(body)});
    const data=await r.json();
    if(!r.ok)throw Error(data.error||'Erreur de connexion.');
    authToken=data.token;localStorage.setItem('authToken',authToken);
    if(stats.quizzes>0&&(data.stats?.quizzes||0)===0){pushProgress()}else{stats=data.stats;profile=data.profile;localStorage.setItem('revisionStats',JSON.stringify(stats));localStorage.setItem('revisionProfile',JSON.stringify(profile))}
    updateAccountUI();updateStats();showScreen('screen-profile')
  }catch(e){$('authError').textContent=e.message||'Impossible de contacter le serveur.'}
  finally{$('authSubmitBtn').disabled=false}
};
$('authSkipBtn').onclick=()=>showScreen('screen-profile');
function updateStats(){
 const acc=stats.answered?Math.round(stats.correct/stats.answered*100):0;
 $('statQuizzes').textContent=stats.quizzes;$('statCorrect').textContent=acc+'%';$('statXp').textContent=stats.xp;
 $('homeStreak').textContent=stats.streak;$('profileQuizzes').textContent=stats.quizzes;$('profileAccuracy').textContent=acc+'%';$('profileXp').textContent=stats.xp;$('profileStreak').textContent=stats.streak;
 $('profileName').textContent=profile.name||'Mon profil';$('homeGreeting').textContent=`Bonjour ${profile.name||'👋'} ! Prêt pour ta prochaine révision ?`;
 const today=new Date().toISOString().slice(0,10);if(stats.dailyDate!==today){stats.daily=0;stats.dailyDate=today;save()}
 const goal=Number(localStorage.getItem('studyGoal')||20),pct=Math.min(100,Math.round(stats.daily/goal*100));$('dailyTime').textContent=`${stats.daily} / ${goal} min`;$('dailyPercent').textContent=pct+'%';$('dailyFill').style.width=pct+'%';
 const ach=stats.quizzes>=10?['🥇','Régulier','Tu as terminé 10 quiz.']:stats.quizzes>=1?['🏅','Premier pas','Premier quiz terminé !']:['🏅','Premier pas','Termine ton premier quiz pour débloquer ton badge.'];$('achievementTitle').textContent=ach[1];$('achievementText').textContent=ach[2];
}
function showScreen(id){document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));$(id).classList.add('active');document.querySelectorAll('.nav-item').forEach(n=>n.classList.toggle('active',n.dataset.nav===id));window.scrollTo({top:0,behavior:'smooth'})}
document.querySelectorAll('[data-back]').forEach(b=>b.onclick=()=>showScreen(b.dataset.back));
document.querySelectorAll('[data-nav]').forEach(b=>b.onclick=()=>showScreen(b.dataset.nav));
$('brandBtn').onclick=()=>showScreen('screen-home');$('profileBtn').onclick=()=>showScreen('screen-profile');
$('themeBtn').onclick=()=>{document.body.classList.toggle('dark');localStorage.setItem('theme',document.body.classList.contains('dark')?'dark':'light');$('themeBtn').textContent=document.body.classList.contains('dark')?'☀':'☾'};
if(localStorage.getItem('theme')==='dark'){document.body.classList.add('dark');$('themeBtn').textContent='☀'}
function renderNiveaux(){const g=$('niveauGrid');g.innerHTML='';Object.entries(PROGRAMME).forEach(([key,n])=>{const b=document.createElement('button');b.className='exam-card';b.innerHTML=`<div class="exam-icon">${key==='bepc'?'🎒':key==='probatoire'?'🎯':'🎓'}</div><div><strong>${n.label}</strong><span>${n.description}</span></div><div class="exam-arrow">›</div>`;b.onclick=()=>{state.niveau=key;renderMatieres();showScreen('screen-matieres')};g.appendChild(b)})}
function renderMatieres(){const n=PROGRAMME[state.niveau];$('matieresNiveauLabel').textContent=n.label;$('subjectCount').textContent=`${n.matieres.length} matières`;const g=$('matiereGrid');g.innerHTML='';n.matieres.forEach((m,i)=>{const b=document.createElement('button');b.className='matiere-tab';b.innerHTML=`<span class="subject-icon">${ICONS[i%ICONS.length]}</span><div><strong>${m.label}</strong><span>Cours + quiz + progression</span></div>`;b.onclick=()=>openLesson(m);g.appendChild(b)})}
function openLesson(m){state.matiere=m;const l=LESSONS[m.id]||{title:'Fiche de révision',body:`<p>Travaille les notions importantes de <strong>${m.label}</strong>. Commence par le cours, puis entraîne-toi avec un quiz adapté à ton niveau.</p>`,tip:'Travaille régulièrement et note tes erreurs pour les revoir.'};$('lessonSubject').textContent=`${PROGRAMME[state.niveau].label} · ${m.label}`;$('lessonTitle').textContent=l.title;$('lessonHeading').textContent=l.title;$('lessonBody').innerHTML=l.body;$('lessonTip').textContent=l.tip;showScreen('screen-lesson')}
$('lessonQuizBtn').onclick=()=>{renderChapitre();showScreen('screen-chapitre')}
function renderChapitre(){$('chapitreMatiereLabel').textContent=`${PROGRAMME[state.niveau].label} · ${state.matiere.label}`;$('chapitreInput').value='';$('chapitreSuggestions').innerHTML='';SUGGESTIONS.forEach(x=>{const b=document.createElement('button');b.className='suggestion-chip';b.textContent=x;b.onclick=()=>{$('chapitreInput').value=x;updateStart()};$('chapitreSuggestions').appendChild(b)});updateStart()}
function updateStart(){$('startQuizBtn').disabled=!$('chapitreInput').value.trim()}
$('chapitreInput').oninput=updateStart;
document.querySelectorAll('#questionChoices button').forEach(b=>b.onclick=()=>{document.querySelectorAll('#questionChoices button').forEach(x=>x.classList.remove('selected'));b.classList.add('selected');state.questionCount=+b.dataset.n});
document.querySelectorAll('#difficultyChoices button').forEach(b=>b.onclick=()=>{document.querySelectorAll('#difficultyChoices button').forEach(x=>x.classList.remove('selected'));b.classList.add('selected');state.difficulty=b.dataset.d});
$('startQuizBtn').onclick=()=>{state.chapitre=$('chapitreInput').value.trim();state.examMode=false;beginQuiz()};
async function beginQuiz(){showScreen('screen-loading');const key=`${state.niveau}::${state.matiere.id}::${state.chapitre}::${state.questionCount}::${state.difficulty}`.toLowerCase();try{const r=await fetch('/api/quiz',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({niveau:PROGRAMME[state.niveau].label,matiere:state.matiere.label,chapitre:state.chapitre,questionCount:state.questionCount,difficulty:state.difficulty})});if(!r.ok)throw Error();const q=await r.json();if(!q.questions?.length)throw Error();await saveOffline(key,q);setOffline(false);startQuiz(q)}catch(e){const q=await getOffline(key);if(q){setOffline(true);startQuiz(q)}else{showScreen('screen-chapitre');alert('Impossible de générer le quiz. Vérifie ta connexion ou ta clé IA.')}}}
function startQuiz(q){state.quiz=q;state.currentQuestion=0;state.score=0;state.answered=false;showScreen('screen-quiz');renderQuestion();if(state.examMode)startTimer()}
function renderQuestion(){const q=state.quiz.questions[state.currentQuestion],total=state.quiz.questions.length;$('quizMatiereLabel').textContent=`${state.examMode?state.examLevel.toUpperCase():PROGRAMME[state.niveau].label} · ${state.matiere?.label||'Examen'}`;$('quizChapitreLabel').textContent=state.examMode?'Examen blanc':state.chapitre;$('quizProgress').textContent=`Question ${state.currentQuestion+1} / ${total}`;const pct=Math.round(state.currentQuestion/total*100);$('quizPercent').textContent=pct+'%';$('progressFill').style.width=pct+'%';$('questionNumber').textContent=String(state.currentQuestion+1).padStart(2,'0');$('questionText').textContent=q.question;$('liveScore').textContent=state.score;const list=$('optionsList');list.innerHTML='';q.options.forEach((o,i)=>{const b=document.createElement('button');b.className='option-btn';b.innerHTML=`<span class="option-letter">${String.fromCharCode(65+i)}</span><span>${o}</span>`;b.onclick=()=>selectAnswer(i);list.appendChild(b)});$('explanationCard').classList.remove('visible');$('nextQuestionBtn').style.display='none'}
function selectAnswer(idx){if(state.answered)return;state.answered=true;const q=state.quiz.questions[state.currentQuestion],bs=document.querySelectorAll('.option-btn');bs.forEach((b,i)=>{b.disabled=true;if(i===q.reponse_correcte)b.classList.add('correct');else if(i===idx)b.classList.add('incorrect')});const ok=idx===q.reponse_correcte;if(ok)state.score++;stats.answered++;if(ok)stats.correct++;stats.daily=Math.min(120,stats.daily+2);save();const banner=$('reactionBanner');banner.textContent=ok?'Bravo ! 🎉':'Presque ! 💪';banner.className='reaction-banner show '+(ok?'correct':'incorrect');setTimeout(()=>banner.classList.remove('show'),1200);$('explanationText').textContent=q.explication||'Relis la notion et essaie de l’expliquer avec tes propres mots.';$('explanationCard').classList.add('visible');$('nextQuestionBtn').textContent=state.currentQuestion+1<state.quiz.questions.length?'Question suivante →':'Voir mes résultats';$('nextQuestionBtn').style.display='flex'}
$('nextQuestionBtn').onclick=()=>{if(state.currentQuestion+1<state.quiz.questions.length){state.currentQuestion++;renderQuestion()}else finishQuiz()};
function finishQuiz(){if(state.examTimer){clearInterval(state.examTimer);state.examTimer=null}const total=state.quiz.questions.length,pct=Math.round(state.score/total*100),xp=state.score*10+(state.examMode?50:0);stats.quizzes++;stats.xp+=xp;updateStreak();save();$('resultBadge').textContent=pct>=80?'🏆':pct>=50?'⭐':'📚';$('resultsMessage').textContent=pct>=80?'Excellent travail !':pct>=50?'Bien joué, continue !':'Ne lâche rien !';$('resultsChapitre').textContent=state.examMode?`Examen blanc · ${state.examLevel.toUpperCase()}`:`${state.matiere.label} · ${state.chapitre}`;$('resultsScore').textContent=`${state.score}/${total}`;$('resultsPercent').textContent=pct+'%';$('resultCorrect').textContent=state.score;$('resultWrong').textContent=total-state.score;$('resultXp').textContent='+'+xp+' XP';document.documentElement.style.setProperty('--score',pct+'%');showScreen('screen-results')}
function updateStreak(){const today=new Date().toISOString().slice(0,10);if(stats.lastDate!==today){const last=new Date(stats.lastDate||today),now=new Date(today),diff=Math.round((now-last)/86400000);stats.streak=diff===1?stats.streak+1:1;stats.lastDate=today}}
$('retryBtn').onclick=()=>{state.currentQuestion=0;state.score=0;showScreen('screen-quiz');renderQuestion()};$('newChapitreBtn').onclick=()=>{if(state.matiere){renderChapitre();showScreen('screen-chapitre')}else showScreen('screen-home')};$('homeBtn').onclick=()=>showScreen('screen-home');
$('goStudy').onclick=()=>{state.niveau=state.niveau||'bepc';renderMatieres();showScreen('screen-matieres')};$('navRevision').onclick=$('goStudy').onclick;$('navQuick').onclick=()=>{$('goStudy').click()};$('goAi').onclick=()=>showScreen('screen-ai');$('goPlan').onclick=()=>showScreen('screen-plan');$('goExam').onclick=()=>showScreen('screen-exam');
document.querySelectorAll('.exam-levels button').forEach(b=>b.onclick=()=>{document.querySelectorAll('.exam-levels button').forEach(x=>x.classList.remove('selected'));b.classList.add('selected');state.examLevel=b.dataset.exam});
$('startExamBtn').onclick=async()=>{state.examMode=true;state.niveau=state.examLevel;const n=PROGRAMME[state.niveau];state.matiere=n?.matieres?.[0]||{id:'general',label:'Culture générale'};state.chapitre='Examen blanc';state.questionCount=20;state.difficulty='mixte';await beginQuiz()};
function startTimer(){state.examSeconds=30*60;updateTimer();state.examTimer=setInterval(()=>{state.examSeconds--;updateTimer();if(state.examSeconds<=0){clearInterval(state.examTimer);state.examTimer=null;finishQuiz()}},1000)}
function updateTimer(){const m=String(Math.floor(state.examSeconds/60)).padStart(2,'0'),s=String(state.examSeconds%60).padStart(2,'0');$('quizChapitreLabel').textContent=`${state.examMode?'Examen blanc':''} · ${m}:${s}`}
$('chatForm').onsubmit=async e=>{e.preventDefault();const input=$('chatInput'),text=input.value.trim();if(!text)return;addChat('user',text);input.value='';const loading=addChat('ai','Je réfléchis…');try{const r=await fetch('/api/tutor',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({question:text,niveau:state.niveau?PROGRAMME[state.niveau].label:'BEPC',matiere:state.matiere?.label||'Général'})});if(!r.ok)throw Error();const data=await r.json();loading.querySelector('p').textContent=data.answer||'Je n’ai pas pu répondre.'}catch(e){loading.querySelector('p').textContent='Je peux t’aider à comprendre une notion, mais le service IA est indisponible pour le moment. Vérifie ta connexion et la configuration du serveur.'}};
function addChat(type,text){const d=document.createElement('div');d.className='chat-msg '+type;d.innerHTML=`<strong>${type==='user'?'Toi':'Prof IA'}</strong><p></p>`;d.querySelector('p').textContent=text;$('chatMessages').appendChild(d);$('chatMessages').scrollTop=$('chatMessages').scrollHeight;return d}
document.querySelectorAll('.prompt-chips button').forEach(b=>b.onclick=()=>{$('chatInput').value=b.textContent;$('chatInput').focus()});
$('generatePlanBtn').onclick=()=>{const mins=+$('studyMinutes').value;localStorage.setItem('studyGoal',mins);generatePlan(mins,$('planExam').value);updateStats()};
function generatePlan(mins,exam){const g=$('weekList');g.innerHTML='';const topics=['Mathématiques · cours','Français · compréhension','Sciences · exercices','Histoire · mémorisation','Quiz IA · révision','Examen blanc · entraînement','Révision de tes erreurs'];topics.forEach((t,i)=>{const d=document.createElement('div');d.className='day-item';d.innerHTML=`<div class="day-dot">${i<stats.quizzes%7?'✓':'📅'}</div><div><strong>Jour ${i+1}</strong><span>${t} · ${mins} min</span></div>`;g.appendChild(d)})}
$('editNameBtn').onclick=()=>{const n=prompt('Ton prénom :',profile.name);if(n?.trim()){profile.name=n.trim();save()}};$('resetBtn').onclick=()=>{if(confirm('Réinitialiser toutes tes statistiques ?')){stats={quizzes:0,correct:0,answered:0,xp:0,streak:0,lastDate:'',daily:0,dailyDate:''};save()}};
async function openDb(){return new Promise((res,rej)=>{const r=indexedDB.open('revision-app-db',1);r.onupgradeneeded=()=>r.result.createObjectStore('quizzes');r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error)})}
async function saveOffline(k,q){try{const db=await openDb();db.transaction('quizzes','readwrite').objectStore('quizzes').put(q,k)}catch(e){}}
async function getOffline(k){try{const db=await openDb();return new Promise(r=>{const q=db.transaction('quizzes').objectStore('quizzes').get(k);q.onsuccess=()=>r(q.result||null);q.onerror=()=>r(null)})}catch(e){return null}}
function setOffline(v){$('offlineBadge').classList.toggle('visible',v)}window.addEventListener('offline',()=>setOffline(true));window.addEventListener('online',()=>setOffline(false));
if('serviceWorker'in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));
renderNiveaux();updateStats();updateAccountUI();generatePlan(+$('studyMinutes').value,'bepc');setOffline(!navigator.onLine);pullProgress();
