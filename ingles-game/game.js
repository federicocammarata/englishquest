'use strict';
// ─────────────────────────────────────────────────────────
//  GAME.JS
// ─────────────────────────────────────────────────────────

const XP_CORRECT = 10;
const XP_LESSON  = 30;
const XP_REVIEW  = 5;

// Textos de cada ronda
const ROUND_INFO = [
  null,
  { label: 'Ronda 1 · Aprender',  icon: '🌱', desc: 'Primera toma de contacto' },
  { label: 'Ronda 2 · Practicar', icon: '🔄', desc: 'Ejercicios variados'       },
  { label: 'Ronda 3 · Dominar',   icon: '🏆', desc: 'Dificultad máxima'         },
];

// ── Sesión activa ─────────────────────────────────────────
let session = null;
/*  session = {
      type:       'lesson' | 'review',
      lessonId, levelId, lesson, level,
      round:      1 | 2 | 3,
      queue:      [{type, data, retries?}],
      index:      0,
      errors:     0,   ← contador de errores (sin vidas)
      correct:    0,
      xpEarned:   0,
      phase:      'intro' | 'exercise',
      introQueue: [card,...],
      introIdx:   0,
      handler:    null,
      pool:       [...],
    }
*/

// ── Pantallas ─────────────────────────────────────────────
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// ═══════════════════════════════════════════════════════
//  MAP
// ═══════════════════════════════════════════════════════
function renderMap() {
  const profile = srsState().profile;

  document.getElementById('map-xp').textContent    = profile.xp;
  document.getElementById('map-streak').textContent = profile.streak;
  document.getElementById('map-done').textContent  = profile.completedLessons.length;

  const due = srsDueCount();
  const badge = document.getElementById('review-badge');
  badge.textContent    = due > 0 ? due : '';
  badge.style.display  = due > 0 ? 'flex' : 'none';
  document.getElementById('btn-review').style.opacity = due > 0 ? '1' : '0.6';

  const mapBody = document.getElementById('map-body');
  mapBody.innerHTML = '';

  CURRICULUM.levels.forEach(level => {
    const unlocked = srsIsLevelUnlocked(level.id);
    const section  = document.createElement('div');
    section.className = 'level-section' + (unlocked ? '' : ' locked-level');

    const hdr = document.createElement('div');
    hdr.className = 'level-header';
    hdr.style.background = `linear-gradient(135deg, ${level.color}, ${level.colorDark})`;
    hdr.innerHTML = `
      <span class="level-icon-big">${level.icon}</span>
      <div class="level-text">
        <div class="level-title">${level.title}</div>
        <div class="level-sub">${level.subtitle}</div>
      </div>
      <span class="level-cefr-badge">${level.cefr}</span>`;
    section.appendChild(hdr);

    if (level.comingSoon) {
      const soon = document.createElement('div');
      soon.className = 'coming-soon';
      soon.innerHTML = `<span>🚧</span> Próximamente`;
      section.appendChild(soon);
      mapBody.appendChild(section);
      return;
    }

    const path = document.createElement('div');
    path.className = 'lesson-path';

    level.lessons.forEach((lesson, idx) => {
      const round     = srsGetLessonRound(lesson.id);
      const done      = round >= 3;
      const prevDone  = idx === 0
        ? true
        : srsGetLessonRound(level.lessons[idx - 1].id) >= 1; // desbloqueado con ronda 1
      const available = unlocked && prevDone;

      const prog       = srsLessonProgress(lesson.vocabulary.map(v => v.id));
      const totalCards = lesson.vocabulary.length;
      const learnedPct = done ? 100 : Math.round((prog.learned + prog.mastered) / totalCards * 100);
      const vocabDone  = prog.learned + prog.mastered;

      const nodeState = done ? 'node-done' : (!available ? 'node-locked' : 'node-available');
      const node = document.createElement('div');
      node.className = `lesson-node ${nodeState}`;

      // Badge según ronda
      let badgeHtml;
      if (done) {
        badgeHtml = `<span class="node-badge badge-done">⭐ Dominada</span>`;
      } else if (!available) {
        badgeHtml = `<span class="node-badge badge-lock">🔒</span>`;
      } else if (round === 0) {
        badgeHtml = `<span class="node-badge badge-start" style="background:${level.color}22;border-color:${level.color}55;color:${level.color}">▶ Comenzar</span>`;
      } else {
        badgeHtml = `<span class="node-badge badge-start" style="background:${level.color}22;border-color:${level.color}55;color:${level.color}">${ROUND_INFO[round + 1]?.icon || '▶'} Ronda ${round + 1}/3</span>`;
      }

      // Barra de progreso y meta
      const barHtml = available && !done
        ? `<div class="node-bar-wrap"><div class="node-bar" style="width:${learnedPct}%;background:${level.color}"></div></div>` : '';

      let metaHtml;
      if (done) {
        metaHtml = `<div class="node-meta">✓ ${totalCards}/${totalCards} palabras · 3/3 rondas</div>`;
      } else if (available && round > 0) {
        metaHtml = `<div class="node-meta">${ROUND_INFO[round].label} completada · ${vocabDone}/${totalCards} palabras</div>`;
      } else if (available) {
        metaHtml = `<div class="node-meta">${totalCards} palabras nuevas · 3 rondas</div>`;
      } else {
        metaHtml = `<div class="node-meta">Completá la lección anterior</div>`;
      }

      node.innerHTML = `
        <div class="node-circle" style="${available ? `border-color:${level.color};box-shadow:0 0 16px ${level.color}44` : ''}">
          ${done ? '⭐' : (!available ? '🔒' : lesson.icon)}
        </div>
        <div class="node-info">
          <div class="node-title">${lesson.title}</div>
          ${metaHtml}
          ${barHtml}
        </div>
        ${badgeHtml}`;

      if (available) node.onclick = () => startLesson(lesson, level);
      path.appendChild(node);

      if (idx < level.lessons.length - 1) {
        const line = document.createElement('div');
        line.className = 'path-line' + (done ? ' done-line' : '');
        path.appendChild(line);
      }
    });

    section.appendChild(path);
    mapBody.appendChild(section);
  });

  showScreen('screen-map');
}

// ═══════════════════════════════════════════════════════
//  INICIAR LECCIÓN
// ═══════════════════════════════════════════════════════
function startLesson(lesson, level) {
  const pool  = getAllVocab();
  const round = Math.min(2, srsGetLessonRound(lesson.id)) + 1; // próxima ronda (1-3)

  const newCards = round === 1
    ? lesson.vocabulary.filter(v => !srsState().cards[v.id]?.introduced)
    : [];

  const queue = _buildLessonQueue(lesson, pool, round);

  session = {
    type: 'lesson',
    lessonId: lesson.id,
    levelId:  level.id,
    lesson, level, pool,
    round,
    queue,
    index:    0,
    errors:   0,
    correct:  0,
    xpEarned: 0,
    phase:    newCards.length > 0 ? 'intro' : 'exercise',
    introQueue: newCards,
    introIdx:   0,
    handler:    null,
  };

  srsRecordPlay();
  showScreen('screen-lesson');
  _updateTopbar();

  if (session.phase === 'intro') _renderIntro();
  else                           _renderExercise();
}

// ═══════════════════════════════════════════════════════
//  VOCAB SELECT SCREEN
// ═══════════════════════════════════════════════════════
function renderVocabSelect() {
  const grid = document.getElementById('vocab-pack-grid');
  grid.innerHTML = '';

  VOCAB_PACKS.forEach(pack => {
    const card = document.createElement('button');
    card.className = 'vocab-pack-card';
    card.style.setProperty('--pack-color', pack.color);
    card.innerHTML = `
      <span class="vpc-icon">${pack.icon}</span>
      <div class="vpc-title">${pack.title}</div>
      <div class="vpc-desc">${pack.desc}</div>
      <div class="vpc-badge">${pack.vocabulary.length} palabras</div>`;
    card.onclick = () => startVocabPack(pack);
    grid.appendChild(card);
  });

  showScreen('screen-vocab-select');
}

// ═══════════════════════════════════════════════════════
//  INICIAR PACK DE VOCABULARIO LIBRE
// ═══════════════════════════════════════════════════════
function startVocabPack(pack) {
  const pool = getAllVocab().concat(pack.vocabulary);
  const sv   = _shuffle([...pack.vocabulary]);

  const queue = [];
  sv.slice(0, 5).forEach(c => queue.push({ type: 'mc_es_en', data: { card: c }, retries: 0 }));
  sv.slice(5, 10).forEach(c => queue.push({ type: 'mc_en_es', data: { card: c }, retries: 0 }));
  sv.slice(0, 4).forEach(c => queue.push({ type: 'listen',   data: { card: c }, retries: 0 }));

  session = {
    type:    'vocab_pack',
    pack,
    lessonId: null, levelId: null,
    lesson: null,   level: null,
    pool,
    round:    null,
    queue:    _spreadWords(_shuffle(queue)).slice(0, 14),
    index:    0,
    errors:   0,
    correct:  0,
    xpEarned: 0,
    phase:    'exercise',
    introQueue: [], introIdx: 0,
    handler: null,
  };

  srsRecordPlay();
  showScreen('screen-lesson');
  _updateTopbar();
  _renderExercise();
}

// ═══════════════════════════════════════════════════════
//  INICIAR REPASO SRS
// ═══════════════════════════════════════════════════════
function startReview() {
  const dueCards = srsDueCards(20);
  if (dueCards.length === 0) { renderMap(); return; }

  const pool  = getAllVocab();
  const queue = _spreadWords(_shuffle(
    dueCards
      .map(c => getVocabById(c.id))
      .filter(Boolean)
      .map(card => ({ type: _reviewType(card), data: { card }, retries: 0 }))
  )).slice(0, 14);

  session = {
    type: 'review',
    lessonId: null, levelId: null,
    lesson: null, level: null, pool,
    round: null,
    queue,
    index:    0,
    errors:   0,
    correct:  0,
    xpEarned: 0,
    phase:    'exercise',
    introQueue: [], introIdx: 0,
    handler:  null,
  };

  srsRecordPlay();
  showScreen('screen-lesson');
  _updateTopbar();
  _renderExercise();
}

// ═══════════════════════════════════════════════════════
//  GENERAR COLA  (3 rondas con distinto perfil)
// ═══════════════════════════════════════════════════════
function _buildLessonQueue(lesson, pool, round) {
  const vocab = lesson.vocabulary;
  const TARGET = 14;

  // Palabras de repaso de lecciones anteriores
  const srsReview = srsDueCards(3)
    .map(c => getVocabById(c.id))
    .filter(c => c && !vocab.find(v => v.id === c.id));

  let exercises = [];

  // Shorthand para agregar ejercicio
  const add = (type, cardOrSentence) => {
    const data = cardOrSentence.words
      ? { sentence: cardOrSentence }
      : cardOrSentence.cards4
        ? cardOrSentence
        : { card: cardOrSentence };
    exercises.push({ type, data, retries: 0 });
  };

  const sv = _shuffle([...vocab]);   // vocab mezclado

  if (round === 1) {
    // ── RONDA 1: Aprender ─────────────────────────────
    // Variedad desde el inicio: MC + Escuchar + Match + Ordenar
    // • 5 mc_es_en  (fácil – ver y reconocer)
    // • 5 listen    (escuchar y asociar)
    // • 2 mc_en_es  (inverso)
    // • 2 word_order
    // • 1 match
    sv.slice(0, 5).forEach(c  => add('mc_es_en',   c));
    sv.slice(5)   .forEach(c  => add('listen',      c));
    sv.slice(0, 2).forEach(c  => add('mc_en_es',    c));
    _shuffle([...lesson.sentences]).slice(0, 2).forEach(s => add('word_order', s));
    if (vocab.length >= 4) add('match', { cards4: sv.slice(0, 4) });

  } else if (round === 2) {
    // ── RONDA 2: Practicar ────────────────────────────
    // Más difícil: inverso + completar + ordenar + match
    // • 4 mc_en_es  (inverso sin pista de idioma)
    // • 4 fill_blank (oración con hueco)
    // • 3 listen    (sin ver la palabra escrita)
    // • 2 mc_es_en  (rápido repaso de las más difíciles)
    // • 2 word_order
    // • 1 match con el otro grupo de 4
    sv.slice(0, 4).forEach(c  => add('mc_en_es',   c));
    sv.slice(0, 4).forEach(c  => add('fill_blank',  c));
    sv.slice(4, 7).forEach(c  => add('listen',      c));
    sv.slice(7)   .forEach(c  => add('mc_es_en',    c));
    _shuffle([...lesson.sentences]).slice(0, 2).forEach(s => add('word_order', s));
    const g2 = sv.length >= 8 ? sv.slice(4, 8) : sv.slice(0, 4);
    if (g2.length >= 4) add('match', { cards4: g2 });

  } else {
    // ── RONDA 3: Dominar ──────────────────────────────
    // Sin opciones: escribir, hablar, ordenar
    // • 4 type_answer (sin ninguna pista)
    // • 3 speak       (pronunciar – con skip)
    // • 3 listen      (velocidad normal)
    // • 3 word_order  (todas las oraciones)
    // • 1 match       (repaso rápido)
    sv.slice(0, 4).forEach(c  => add('type_answer', c));
    sv.slice(4, 7).forEach(c  => add('speak',       c));
    sv.slice(0, 3).forEach(c  => add('listen',      c));
    lesson.sentences.forEach(s => add('word_order', s));
    if (vocab.length >= 4) add('match', { cards4: sv.slice(0, 4) });
  }

  // Intercalar repaso de lecciones anteriores (todas las rondas)
  srsReview.forEach(card =>
    exercises.push({ type: _reviewType(card), data: { card }, retries: 0 }));

  // Ordenar: fáciles → medios → difíciles
  const easy  = exercises.filter(e => e.type === 'mc_es_en');
  const med   = exercises.filter(e => ['mc_en_es','listen','fill_blank'].includes(e.type));
  const hard  = exercises.filter(e => !['mc_es_en','mc_en_es','listen','fill_blank'].includes(e.type));

  return _spreadWords([
    ...easy,
    ..._shuffle(med),
    ..._shuffle(hard),
  ]).slice(0, TARGET);
}

function _reviewType(card) {
  const reps = srsState().cards[card.id]?.reps ?? 0;
  if (reps < 2) return 'mc_es_en';
  if (reps < 4) return _shuffle(['mc_en_es','listen'])[0];
  return _shuffle(['fill_blank','type_answer','listen'])[0];
}

// ═══════════════════════════════════════════════════════
//  INTRO CARDS
// ═══════════════════════════════════════════════════════
function _renderIntro() {
  const card = session.introQueue[session.introIdx];
  srsMarkIntroduced(card.id);
  renderIntroCard(card, document.getElementById('ex-area'), null);

  const btn = document.getElementById('btn-check');
  btn.disabled    = false;
  btn.textContent = `Continuar (${session.introIdx + 1}/${session.introQueue.length})`;

  _updateProgress();
  _updateTopbar();
}

function _advanceIntro() {
  session.introIdx++;
  if (session.introIdx >= session.introQueue.length) {
    session.phase = 'exercise';
    _renderExercise();
  } else {
    _renderIntro();
  }
}

// ═══════════════════════════════════════════════════════
//  EJERCICIO
// ═══════════════════════════════════════════════════════
function _renderExercise() {
  if (session.index >= session.queue.length) {
    _finishSession();
    return;
  }
  const item = session.queue[session.index];
  const area = document.getElementById('ex-area');
  area.innerHTML = '';
  hideFeedback();

  const btn = document.getElementById('btn-check');
  btn.textContent = 'Verificar';
  btn.disabled    = true;

  session.handler = buildExercise(item.type, item.data, session.pool, area);
  _updateProgress();
  _updateTopbar();
}

// ═══════════════════════════════════════════════════════
//  VERIFICAR  (bug-fix: maneja todos los estados del botón)
// ═══════════════════════════════════════════════════════
function onCheckBtn() {
  const btn     = document.getElementById('btn-check');
  const btnText = btn.textContent;

  // ── Fase intro: avanzar
  if (session.phase === 'intro') {
    _advanceIntro();
    return;
  }

  // ── Ya verificado: continuar al siguiente
  if (btnText === 'Continuar →') {
    session.index++;
    _renderExercise();
    return;
  }

  // ── Verificar respuesta
  const item = session.queue[session.index];
  const { ok, correctText } = session.handler.checkAnswer();

  if (ok) {
    session.correct++;
    session.xpEarned += session.type === 'review' ? XP_REVIEW : XP_CORRECT;
    showFeedback(true, '¡Correcto! 🎉');
    if (item.data.card) srsReview(item.data.card.id, 'correct');

  } else {
    session.errors++;
    showFeedback(false, `Incorrecto. La respuesta es: "${correctText}"`);
    if (item.data.card) srsReview(item.data.card.id, 'wrong');

    // ── RECICLAR: si el error es < 2 veces, reinsertar en la cola
    const retries = (item.retries || 0) + 1;
    if (retries <= 2) {
      const insertAt = Math.min(session.index + 3, session.queue.length);
      session.queue.splice(insertAt, 0, { ...item, retries });
    }
  }

  _updateTopbar();
  btn.textContent = 'Continuar →';
  btn.disabled    = false;
}

// ═══════════════════════════════════════════════════════
//  FIN DE SESIÓN
// ═══════════════════════════════════════════════════════
function _finishSession() {
  const total    = session.correct + session.errors;
  const accuracy = total > 0 ? Math.round(session.correct / total * 100) : 100;

  let newRound = null;
  if (session.type === 'lesson') {
    session.xpEarned += XP_LESSON;
    newRound = srsCompleteLesson(session.lessonId, session.levelId);
    session.lesson.vocabulary.forEach(v => srsMarkIntroduced(v.id));
  }

  srsAddXP(session.xpEarned);

  // ── Pantalla resultado
  const roundDone = newRound !== null ? ROUND_INFO[newRound] : null;

  document.getElementById('res-icon').textContent  = accuracy >= 80 ? '🎉' : '👍';

  if (session.type === 'vocab_pack') {
    document.getElementById('res-title').textContent = `${session.pack.icon} ¡Pack completado!`;
  } else {
    document.getElementById('res-title').textContent =
      roundDone ? `${roundDone.icon} ${roundDone.label} completada` : '¡Repaso completado!';
  }

  document.getElementById('res-accuracy').textContent = accuracy + '%';
  document.getElementById('res-xp').textContent       = '+' + session.xpEarned;
  document.getElementById('res-lives').textContent    =
    session.errors === 0 ? '✨ Perfecto' : `❌ ${session.errors} error${session.errors > 1 ? 'es' : ''}`;
  document.getElementById('res-msg').textContent = _resultMsg(accuracy, newRound);

  // Mostrar "Siguiente ronda" / "Practicar de nuevo" / ocultar
  const nextRound = newRound !== null && newRound < 3 ? newRound + 1 : null;
  const btnAgain  = document.getElementById('btn-result-again');
  if (session.type === 'vocab_pack') {
    btnAgain.textContent   = '🔁 Practicar de nuevo';
    btnAgain.style.display = '';
  } else if (nextRound) {
    btnAgain.textContent   = `${ROUND_INFO[nextRound].icon} Ronda ${nextRound}/3`;
    btnAgain.style.display = '';
  } else {
    btnAgain.style.display = 'none';
  }

  showScreen('screen-result');
}

function _resultMsg(acc, round) {
  if (acc === 100)   return '¡Sin errores! Sos un crack. 🏆';
  if (acc >= 90)     return '¡Excelente! Casi perfecto.';
  if (acc >= 70)     return 'Muy bien. Las palabras difíciles volvieron a practicarse.';
  if (acc >= 50)     return 'Bien. Los errores se repitieron para que los aprendas.';
  return 'No te rindas — los errores son parte del aprendizaje.';
}

// ═══════════════════════════════════════════════════════
//  FEEDBACK
// ═══════════════════════════════════════════════════════
function showFeedback(ok, msg) {
  const el = document.getElementById('feedback');
  el.className    = 'feedback-bar ' + (ok ? 'fb-correct' : 'fb-wrong');
  el.innerHTML    = (ok ? '✅ ' : '❌ ') + msg;
  el.style.display = 'flex';
}
function hideFeedback() {
  const el = document.getElementById('feedback');
  if (el) { el.style.display = 'none'; el.className = 'feedback-bar'; }
}

// ═══════════════════════════════════════════════════════
//  TOPBAR (reemplaza "vidas" con contador de errores)
// ═══════════════════════════════════════════════════════
function _updateTopbar() {
  // Errores
  const errEl = document.getElementById('error-count');
  if (errEl) {
    if (session.errors === 0) {
      errEl.textContent = '✨';
      errEl.className   = 'error-pill perfect';
    } else {
      errEl.textContent = `❌ ${session.errors}`;
      errEl.className   = 'error-pill has-errors';
    }
  }

  // Indicador de ronda (solo lecciones)
  const roundEl = document.getElementById('round-indicator');
  if (roundEl) {
    if (session.type === 'lesson') {
      const ri = ROUND_INFO[session.round];
      roundEl.textContent = `${ri.icon} ${ri.label}`;
      roundEl.style.display = '';
    } else if (session.type === 'vocab_pack') {
      roundEl.textContent   = `${session.pack.icon} ${session.pack.title}`;
      roundEl.style.display = '';
    } else {
      roundEl.textContent   = '🔄 Repaso';
      roundEl.style.display = '';
    }
  }

  // Progreso
  _updateProgress();
}

function _updateProgress() {
  const total   = session.phase === 'intro' ? session.introQueue.length : session.queue.length;
  const current = session.phase === 'intro' ? session.introIdx          : session.index;
  const pct     = total > 0 ? Math.min(100, Math.round(current / total * 100)) : 0;
  document.getElementById('progress-fill').style.width = pct + '%';
}

// ═══════════════════════════════════════════════════════
//  HELPERS
// ═══════════════════════════════════════════════════════
function _shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function _spreadWords(arr) {
  const result = [...arr];
  for (let i = 1; i < result.length; i++) {
    const prevId = result[i - 1].data?.card?.id;
    const currId = result[i].data?.card?.id;
    if (prevId && currId && prevId === currId) {
      for (let j = i + 1; j < result.length; j++) {
        if (result[j].data?.card?.id !== prevId) {
          [result[i], result[j]] = [result[j], result[i]];
          break;
        }
      }
    }
  }
  return result;
}

// ═══════════════════════════════════════════════════════
//  EVENTOS
// ═══════════════════════════════════════════════════════
// Called by firebase.js when auth state changes
function onFirebaseAuthChanged(user) {
  _renderAuthBar(user);
  renderMap();
}

function _renderAuthBar(user) {
  const bar = document.getElementById('auth-bar');
  if (!bar) return;
  if (user) {
    bar.innerHTML = `
      <img class="auth-avatar" src="${user.photoURL || ''}" alt="" onerror="this.style.display='none'">
      <span class="auth-name">${user.displayName || user.email}</span>
      <button class="auth-btn auth-btn-out" onclick="firebaseSignOut()">Salir</button>`;
  } else {
    bar.innerHTML = `
      <span class="auth-hint">Guardá tu progreso en la nube</span>
      <button class="auth-btn auth-btn-in" onclick="firebaseSignIn()">
        <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" width="18" height="18" alt="">
        Entrar con Google
      </button>`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  srsLoad();
  // Show logged-out state immediately; firebase.js will update once auth resolves
  _renderAuthBar(null);
  renderMap();

  document.getElementById('btn-check').addEventListener('click', onCheckBtn);

  document.getElementById('btn-close-lesson').addEventListener('click', () => {
    if (confirm('¿Salir? Perderás el progreso de esta sesión.')) {
      speechSynthesis.cancel();
      renderMap();
    }
  });

  document.getElementById('btn-review').addEventListener('click', () => {
    if (srsDueCount() > 0) startReview();
  });

  document.getElementById('btn-vocab-select').addEventListener('click', renderVocabSelect);
  document.getElementById('btn-close-vocab').addEventListener('click', renderMap);

  document.getElementById('btn-result-home').addEventListener('click', renderMap);

  document.getElementById('btn-result-again').addEventListener('click', () => {
    if (session.type === 'lesson')     startLesson(session.lesson, session.level);
    else if (session.type === 'vocab_pack') startVocabPack(session.pack);
    else startReview();
  });

  document.getElementById('btn-gameover-retry').addEventListener('click', () => {
    if (session.type === 'lesson')          startLesson(session.lesson, session.level);
    else if (session.type === 'vocab_pack') startVocabPack(session.pack);
    else startReview();
  });

  document.getElementById('btn-gameover-home').addEventListener('click', renderMap);
});
