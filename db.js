const Database = require('better-sqlite3');
const path = require('path');

// En prod (Railway), monte un Volume et pointe DB_PATH dessus,
// sinon la base est effacée à chaque redéploiement.
const DB_PATH = process.env.DB_PATH || path.join(__dirname, 'data.db');
const db = new Database(DB_PATH);

db.pragma('journal_mode = WAL');

db.exec(`
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  created_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS progress (
  user_id INTEGER PRIMARY KEY,
  stats TEXT NOT NULL,
  profile TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id)
);
`);

const DEFAULT_STATS = { quizzes: 0, correct: 0, answered: 0, xp: 0, streak: 0, lastDate: '', daily: 0, dailyDate: '' };

module.exports = {
  db,
  DEFAULT_STATS,
  createUser({ name, email, passwordHash }) {
    const now = new Date().toISOString();
    const info = db.prepare('INSERT INTO users (name, email, password_hash, created_at) VALUES (?,?,?,?)')
      .run(name, email, passwordHash, now);
    const userId = info.lastInsertRowid;
    db.prepare('INSERT INTO progress (user_id, stats, profile, updated_at) VALUES (?,?,?,?)')
      .run(userId, JSON.stringify(DEFAULT_STATS), JSON.stringify({ name }), now);
    return userId;
  },
  findUserByEmail(email) {
    return db.prepare('SELECT * FROM users WHERE email = ?').get(email);
  },
  findUserById(id) {
    return db.prepare('SELECT * FROM users WHERE id = ?').get(id);
  },
  getProgress(userId) {
    const row = db.prepare('SELECT stats, profile FROM progress WHERE user_id = ?').get(userId);
    if (!row) return { stats: DEFAULT_STATS, profile: {} };
    return { stats: JSON.parse(row.stats), profile: JSON.parse(row.profile) };
  },
  setProgress(userId, stats, profile) {
    const now = new Date().toISOString();
    db.prepare(`
      INSERT INTO progress (user_id, stats, profile, updated_at) VALUES (?,?,?,?)
      ON CONFLICT(user_id) DO UPDATE SET stats=excluded.stats, profile=excluded.profile, updated_at=excluded.updated_at
    `).run(userId, JSON.stringify(stats), JSON.stringify(profile), now);
  }
};
