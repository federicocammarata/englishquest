'use strict';
// ─────────────────────────────────────────────────────────
//  SRS  –  Spaced Repetition System (SM‑2 simplificado)
//  +  Estado global del juego  (localStorage)
// ─────────────────────────────────────────────────────────

const STORAGE_KEY = 'eq_v2';

// Intervalos base en días para nuevas tarjetas
const INTERVALS = [1, 3, 7, 14, 30, 60];

// Mínimas repeticiones para que una tarjeta se considere "aprendida"
const MIN_REPS_LEARNED = 5;

// Estado por defecto
const DEFAULT_STATE = {
  profile: {
    xp: 0,
    streak: 0,
    lastPlayed: null,       // datestring
    longestStreak: 0,
    totalCorrect: 0,
    totalWrong: 0,
    completedLessons: [],   // ['1-1', '1-2', ...]
    lessonRounds: {},       // { [lessonId]: 0-3 }
    unlockedLevels: [1],    // nivel IDs desbloqueados
  },
  cards: {},  // { [cardId]: CardState }
};

// CardState shape:
// {
//   id,
//   reps: 0,            – número de revisiones correctas acumuladas
//   easeFactor: 2.5,    – factor de facilidad SM-2
//   interval: 0,        – días hasta próxima revisión (0 = hoy)
//   nextReview: 0,      – timestamp ms
//   lastReview: null,
//   introduced: false,  – si fue presentada al usuario
//   wrongCount: 0,      – total de respuestas incorrectas
// }

let G = null;  // estado cargado

// ── Cargar / guardar ──────────────────────────────────────

function srsLoad() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    G = raw ? JSON.parse(raw) : deepClone(DEFAULT_STATE);
  } catch (_) {
    G = deepClone(DEFAULT_STATE);
  }
  // garantizar estructura si viene de versión anterior
  if (!G.profile) G.profile = deepClone(DEFAULT_STATE.profile);
  if (!G.cards)   G.cards   = {};
  _checkStreak();
}

function srsSave() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(G));
}

// ── Streak ───────────────────────────────────────────────

function _checkStreak() {
  const today = _today();
  if (G.profile.lastPlayed === today) return;
  const yesterday = _yesterday();
  if (G.profile.lastPlayed !== yesterday) {
    G.profile.streak = 0;
  }
}

function srsRecordPlay() {
  const today = _today();
  if (G.profile.lastPlayed !== today) {
    G.profile.streak++;
    if (G.profile.streak > G.profile.longestStreak)
      G.profile.longestStreak = G.profile.streak;
    G.profile.lastPlayed = today;
  }
  srsSave();
}

// ── Tarjetas ─────────────────────────────────────────────

function _getCard(id) {
  if (!G.cards[id]) {
    G.cards[id] = {
      id,
      reps: 0,
      easeFactor: 2.5,
      interval: 0,
      nextReview: Date.now(),
      lastReview: null,
      introduced: false,
      wrongCount: 0,
    };
  }
  return G.cards[id];
}

// Llamado al mostrar la tarjeta por primera vez (intro)
function srsMarkIntroduced(id) {
  const c = _getCard(id);
  c.introduced = true;
  srsSave();
}

// quality: 'correct' | 'hard' | 'wrong'
function srsReview(id, quality) {
  const c = _getCard(id);
  c.lastReview = Date.now();

  if (quality === 'wrong') {
    c.wrongCount++;
    c.reps = Math.max(0, c.reps - 1);
    c.interval = 0;
    c.easeFactor = Math.max(1.3, c.easeFactor - 0.2);
    G.profile.totalWrong++;
  } else {
    G.profile.totalCorrect++;
    if (quality === 'hard') {
      c.easeFactor = Math.max(1.3, c.easeFactor - 0.15);
    } else {
      c.easeFactor = Math.min(3.5, c.easeFactor + 0.1);
    }

    if (c.reps < INTERVALS.length - 1) {
      c.interval = INTERVALS[c.reps];
    } else {
      c.interval = Math.round(c.interval * c.easeFactor);
    }
    c.reps++;
  }

  c.nextReview = Date.now() + c.interval * 24 * 3600 * 1000;
  srsSave();
}

// ── Tarjetas que deben revisarse hoy ─────────────────────

function srsDueCards(maxCount = 20) {
  const now = Date.now();
  return Object.values(G.cards)
    .filter(c => c.introduced && c.nextReview <= now)
    .sort((a, b) => a.nextReview - b.nextReview)
    .slice(0, maxCount);
}

// Cantidad de tarjetas para el badge "Repasar"
function srsDueCount() {
  return srsDueCards(999).length;
}

// ── Estado de progreso de una lección ────────────────────
// Retorna { new, learning, learned, mastered } para los vocab IDs dados

function srsLessonProgress(vocabIds) {
  let newW = 0, learning = 0, learned = 0, mastered = 0;
  for (const id of vocabIds) {
    const c = G.cards[id];
    if (!c || !c.introduced)      newW++;
    else if (c.reps < 2)          learning++;
    else if (c.reps < MIN_REPS_LEARNED) learned++;
    else                          mastered++;
  }
  return { new: newW, learning, learned, mastered };
}

// ── Perfil ────────────────────────────────────────────────

function srsAddXP(amount) {
  G.profile.xp += amount;
  srsSave();
}

function srsCompleteLesson(lessonId, levelId) {
  return srsAdvanceLessonRound(lessonId, levelId);
}

function srsIsLessonCompleted(lessonId) {
  return (G.profile.lessonRounds?.[lessonId] || 0) >= 3;
}

function srsGetLessonRound(lessonId) {
  return G.profile.lessonRounds?.[lessonId] ?? 0;
}

function srsAdvanceLessonRound(lessonId, levelId) {
  if (!G.profile.lessonRounds) G.profile.lessonRounds = {};
  const newRound = Math.min(3, (G.profile.lessonRounds[lessonId] || 0) + 1);
  G.profile.lessonRounds[lessonId] = newRound;

  if (newRound >= 3) {
    if (!G.profile.completedLessons.includes(lessonId))
      G.profile.completedLessons.push(lessonId);
    // Try to unlock next level
    const level = CURRICULUM.levels.find(l => l.id === levelId);
    if (level && !level.comingSoon) {
      const allDone = level.lessons.every(l =>
        (G.profile.lessonRounds?.[l.id] || 0) >= 3
      );
      if (allDone) {
        const nextId = levelId + 1;
        if (!G.profile.unlockedLevels.includes(nextId))
          G.profile.unlockedLevels.push(nextId);
      }
    }
  }
  srsSave();
  return newRound;
}

function srsIsLevelUnlocked(levelId) {
  return G.profile.unlockedLevels.includes(levelId);
}

// ── Helpers ───────────────────────────────────────────────

function _today() {
  return new Date().toDateString();
}
function _yesterday() {
  return new Date(Date.now() - 86400000).toDateString();
}
function deepClone(o) {
  return JSON.parse(JSON.stringify(o));
}

// Exponer para que game.js acceda al estado global
function srsState() { return G; }
