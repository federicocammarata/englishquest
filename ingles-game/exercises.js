'use strict';
// ─────────────────────────────────────────────────────────
//  EXERCISES  –  Renderizadores de cada tipo de ejercicio
//               y motor de audio / reconocimiento de voz
// ─────────────────────────────────────────────────────────

// ═══════════════════════════════════════════
//  AUDIO  –  Text‑to‑Speech
// ═══════════════════════════════════════════

let _preferredVoice = null;

function _loadVoice() {
  const voices = speechSynthesis.getVoices();
  // Prioridad: voces online de Google/Microsoft, luego cualquier en-US
  const priority = [
    v => v.name === 'Google US English',
    v => v.name.includes('Google') && v.lang.startsWith('en'),
    v => v.name.includes('Microsoft') && v.lang === 'en-US',
    v => v.lang === 'en-US' && !v.localService,
    v => v.lang === 'en-US',
    v => v.lang.startsWith('en'),
  ];
  for (const test of priority) {
    const found = voices.find(test);
    if (found) { _preferredVoice = found; return; }
  }
}

speechSynthesis.onvoiceschanged = _loadVoice;
_loadVoice();

function speak(text, rate = 0.88) {
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang  = 'en-US';
  u.rate  = rate;
  u.pitch = 1;
  if (_preferredVoice) u.voice = _preferredVoice;
  speechSynthesis.speak(u);
}

// ═══════════════════════════════════════════
//  SPEECH RECOGNITION
// ═══════════════════════════════════════════

const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;

function startSpeechRec(expected, onResult, onError) {
  if (!SpeechRec) { onError('not_supported'); return; }
  const rec = new SpeechRec();
  rec.lang = 'en-US';
  rec.interimResults = false;
  rec.maxAlternatives = 5;
  rec.onresult = e => {
    const heard = Array.from(e.results[0]).map(r => r.transcript.toLowerCase().trim());
    const exp   = expected.toLowerCase().trim().replace(/[^a-z\s']/g, '');
    const ok    = heard.some(h => {
      const hc = h.replace(/[^a-z\s']/g, '');
      return hc === exp || _similarity(hc, exp) >= 0.75 || hc.includes(exp) || exp.includes(hc);
    });
    onResult(ok, heard[0]);
  };
  rec.onerror = e => onError(e.error);
  rec.start();
  return rec;
}

function _similarity(a, b) {
  const longer  = a.length > b.length ? a : b;
  const shorter = a.length > b.length ? b : a;
  if (longer.length === 0) return 1;
  const dist = _levenshtein(longer, shorter);
  return (longer.length - dist) / longer.length;
}

function _levenshtein(s, t) {
  const m = s.length, n = t.length;
  const dp = Array.from({length: m+1}, (_, i) => Array.from({length: n+1}, (_, j) => i === 0 ? j : j === 0 ? i : 0));
  for (let i = 1; i <= m; i++)
    for (let j = 1; j <= n; j++)
      dp[i][j] = s[i-1] === t[j-1] ? dp[i-1][j-1] : 1 + Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);
  return dp[m][n];
}

// ═══════════════════════════════════════════
//  HELPERS COMUNES
// ═══════════════════════════════════════════

function _shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Encuentra el vocabulario de la lección a la que pertenece una tarjeta
function _getLessonVocab(cardId) {
  for (const lv of CURRICULUM.levels)
    for (const ls of lv.lessons) {
      if (ls.vocabulary.find(v => v.id === cardId))
        return ls.vocabulary;
    }
  return null;
}

// Distractores inteligentes: primero los de la MISMA lección (misma categoría = más difícil)
// Luego rellena con palabras de longitud similar del pool general
function _getDistractors(card, n, pool) {
  const lessonVocab = _getLessonVocab(card.id) || [];

  // 1. Misma lección → semánticamente relacionadas (colores, números, saludos…)
  const sameLesson = _shuffle(lessonVocab.filter(v => v.id !== card.id));

  if (sameLesson.length >= n) return sameLesson.slice(0, n);

  // 2. Completar con palabras de longitud similar (confunden por forma)
  const alreadyIds = new Set([card.id, ...sameLesson.map(v => v.id)]);
  const byLength = _shuffle(
    pool.filter(v => !alreadyIds.has(v.id) &&
      Math.abs(v.en.split(' ').length - card.en.split(' ').length) <= 1 &&
      Math.abs(v.en.length - card.en.length) <= 4)
  );

  const combined = [...sameLesson, ...byLength];
  if (combined.length >= n) return combined.slice(0, n);

  // 3. Fallback: cualquier otra palabra del pool
  const fallback = _shuffle(pool.filter(v => !new Set(combined.map(c => c.id)).has(v.id) && v.id !== card.id));
  return [...combined, ...fallback].slice(0, n);
}

// ═══════════════════════════════════════════
//  INTRO CARD  (presentación de palabra nueva)
// ═══════════════════════════════════════════

function renderIntroCard(card, container, onContinue) {
  container.innerHTML = `
    <div class="intro-card pop">
      <div class="intro-badge">✨ NUEVA PALABRA</div>
      <div class="intro-en">${card.en}</div>
      <div class="intro-es">${card.es}</div>
      <div class="intro-example">
        <span class="intro-ex-en">"${card.ex_en}"</span>
        <span class="intro-ex-es">"${card.ex_es}"</span>
      </div>
      <button class="btn-listen-big" id="btn-intro-audio">🔊 Escuchar</button>
    </div>
  `;
  document.getElementById('btn-intro-audio').onclick = () => speak(card.en);
  speak(card.en, 0.8);

  // El botón "Continuar" ya viene del layout principal
  window._introOnContinue = onContinue;
}

// ═══════════════════════════════════════════
//  MC  (Multiple Choice)
//  types: 'mc_es_en'  |  'mc_en_es'
// ═══════════════════════════════════════════

function renderMC(type, card, pool, container) {
  const isEsEn = type === 'mc_es_en';
  const question = isEsEn ? card.es : card.en;
  const correct  = isEsEn ? card.en : card.es;
  const distractors = _getDistractors(card, 3, pool);
  const wrongAnswers = distractors.map(d => isEsEn ? d.en : d.es);
  const options = _shuffle([correct, ...wrongAnswers]);

  const label = isEsEn
    ? '🇪🇸 → 🇬🇧  Elige la traducción correcta'
    : '🇬🇧 → 🇪🇸  ¿Qué significa en español?';

  container.innerHTML = `
    <div class="ex-label">${label}</div>
    <div class="ex-question">${question}</div>
    ${isEsEn ? `<button class="btn-listen-sm" id="btn-mc-audio">🔊</button>` : ''}
    <div class="choices" id="choices"></div>
  `;

  if (isEsEn) {
    document.getElementById('btn-mc-audio').onclick = () => speak(card.en);
  } else {
    speak(card.en, 0.85);
  }

  const choicesEl = container.querySelector('#choices');
  options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn pop';
    btn.style.animationDelay = `${i * 60}ms`;
    btn.textContent = opt;
    btn.onclick = () => {
      choicesEl.querySelectorAll('.choice-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      window._currentAnswer = opt;
      document.getElementById('btn-check').disabled = false;
    };
    choicesEl.appendChild(btn);
  });

  return {
    checkAnswer: () => {
      const ans = window._currentAnswer;
      const ok  = ans === correct;
      choicesEl.querySelectorAll('.choice-btn').forEach(b => {
        if (b.textContent === correct) b.classList.add('correct');
        else if (b.textContent === ans)  b.classList.add('wrong');
        b.disabled = true;
      });
      if (ok) speak(card.en);
      return { ok, correctText: correct };
    }
  };
}

// ═══════════════════════════════════════════
//  LISTEN  (Escuchar → elegir significado en ES)
// ═══════════════════════════════════════════

function renderListen(card, pool, container) {
  const distractors = _getDistractors(card, 3, pool);
  const options = _shuffle([card.es, ...distractors.map(d => d.es)]);

  container.innerHTML = `
    <div class="ex-label">🎧  Escuchá y elegí el significado</div>
    <div class="listen-big-btn" id="btn-play-listen">
      <span>🔊</span>
      <span class="listen-hint">Tocá para escuchar</span>
    </div>
    <div class="choices" id="choices"></div>
  `;

  const playBtn = document.getElementById('btn-play-listen');
  const playAudio = () => {
    playBtn.classList.add('playing');
    speak(card.en);
    setTimeout(() => playBtn.classList.remove('playing'), 1800);
  };
  playBtn.onclick = playAudio;
  setTimeout(playAudio, 400);

  const choicesEl = container.querySelector('#choices');
  options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn pop';
    btn.style.animationDelay = `${i * 60}ms`;
    btn.textContent = opt;
    btn.onclick = () => {
      choicesEl.querySelectorAll('.choice-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      window._currentAnswer = opt;
      document.getElementById('btn-check').disabled = false;
    };
    choicesEl.appendChild(btn);
  });

  return {
    checkAnswer: () => {
      const ans = window._currentAnswer;
      const ok  = ans === card.es;
      choicesEl.querySelectorAll('.choice-btn').forEach(b => {
        if (b.textContent === card.es) b.classList.add('correct');
        else if (b.textContent === ans)  b.classList.add('wrong');
        b.disabled = true;
      });
      return { ok, correctText: card.es };
    }
  };
}

// ═══════════════════════════════════════════
//  WORD ORDER  (Ordenar chips para formar oración)
// ═══════════════════════════════════════════

function renderWordOrder(sentence, container) {
  const allWords = _shuffle([...sentence.words, ...sentence.extra.slice(0, 3)]);

  container.innerHTML = `
    <div class="ex-label">🔤  Formá la oración en inglés</div>
    <div class="ex-question">${sentence.es}</div>
    <div class="word-answer" id="wo-answer">
      <span class="wo-placeholder">Tocá las palabras en orden…</span>
    </div>
    <div class="word-bank" id="wo-bank"></div>
  `;

  const answerEl = container.querySelector('#wo-answer');
  const bankEl   = container.querySelector('#wo-bank');
  let   answerWords = [];   // [{word, chipEl, bankChipEl}]

  function refreshCheck() {
    document.getElementById('btn-check').disabled = answerWords.length === 0;
    const ph = answerEl.querySelector('.wo-placeholder');
    if (ph) ph.style.display = answerWords.length ? 'none' : '';
  }

  allWords.forEach(word => {
    const chip = document.createElement('div');
    chip.className = 'word-chip pop';
    chip.textContent = word;

    chip.onclick = () => {
      if (chip.classList.contains('used')) return;
      chip.classList.add('used');

      // Crear chip en la zona de respuesta
      const ansChip = document.createElement('div');
      ansChip.className = 'word-chip in-answer';
      ansChip.textContent = word;
      ansChip.onclick = () => {
        // Devolver al banco
        answerWords = answerWords.filter(w => w.ansChip !== ansChip);
        ansChip.remove();
        chip.classList.remove('used');
        refreshCheck();
      };
      answerEl.appendChild(ansChip);
      answerWords.push({ word, ansChip, bankChip: chip });
      refreshCheck();
    };
    bankEl.appendChild(chip);
  });

  return {
    checkAnswer: () => {
      const given   = answerWords.map(w => w.word);
      const correct = sentence.words;
      const ok      = JSON.stringify(given) === JSON.stringify(correct);

      answerEl.querySelectorAll('.word-chip').forEach((chip, i) => {
        chip.classList.add(ok ? 'correct' : (given[i] !== correct[i] ? 'wrong' : 'correct'));
        chip.onclick = null;
      });
      bankEl.querySelectorAll('.word-chip').forEach(c => c.onclick = null);

      const correctText = correct.join(' ');
      if (ok) speak(correctText);
      return { ok, correctText };
    }
  };
}

// ═══════════════════════════════════════════
//  FILL BLANK (Con opciones)
// ═══════════════════════════════════════════

function renderFillBlank(card, pool, container) {
  // Genera la oración con un hueco para la palabra en inglés
  const sentence = card.ex_en;
  const blank    = card.en;
  const blanked  = sentence.replace(new RegExp(`\\b${_escapeRegex(blank)}\\b`, 'i'), '______');

  const distractors = _getDistractors(card, 3, pool).map(d => d.en);
  const options = _shuffle([blank, ...distractors]);

  container.innerHTML = `
    <div class="ex-label">✏️  Completá la oración</div>
    <div class="ex-hint-es">${card.ex_es}</div>
    <div class="fill-sentence" id="fill-sentence">${blanked}</div>
    <div class="choices" id="choices"></div>
  `;

  const sentenceEl = container.querySelector('#fill-sentence');
  const choicesEl  = container.querySelector('#choices');

  options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn pop';
    btn.style.animationDelay = `${i * 60}ms`;
    btn.textContent = opt;
    btn.onclick = () => {
      choicesEl.querySelectorAll('.choice-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      // Mostrar la palabra en el hueco
      sentenceEl.innerHTML = sentence.replace(
        new RegExp(`\\b${_escapeRegex(blank)}\\b`, 'i'),
        `<span class="fill-chosen">${opt}</span>`
      );
      window._currentAnswer = opt;
      document.getElementById('btn-check').disabled = false;
    };
    choicesEl.appendChild(btn);
  });

  return {
    checkAnswer: () => {
      const ans = window._currentAnswer;
      const ok  = ans && ans.toLowerCase() === blank.toLowerCase();
      choicesEl.querySelectorAll('.choice-btn').forEach(b => {
        if (b.textContent.toLowerCase() === blank.toLowerCase()) b.classList.add('correct');
        else if (b.textContent === ans) b.classList.add('wrong');
        b.disabled = true;
      });
      if (ok) speak(card.ex_en, 0.85);
      return { ok, correctText: blank };
    }
  };
}

// ═══════════════════════════════════════════
//  TYPE ANSWER (Sin opciones – dificultad alta)
// ═══════════════════════════════════════════

function renderTypeAnswer(card, container) {
  container.innerHTML = `
    <div class="ex-label">⌨️  Escribí en inglés</div>
    <div class="ex-question">${card.es}</div>
    <div class="ex-hint-es">"${card.ex_es}"</div>
    <input class="type-input" id="type-input" type="text"
           placeholder="Escribí la traducción…" autocomplete="off" spellcheck="false" />
    <div class="type-hint" id="type-hint"></div>
  `;

  const input = document.getElementById('type-input');
  input.oninput = () => {
    document.getElementById('btn-check').disabled = input.value.trim() === '';
  };
  input.onkeydown = e => {
    if (e.key === 'Enter' && input.value.trim() !== '') {
      document.getElementById('btn-check').click();
    }
  };
  input.focus();

  return {
    checkAnswer: () => {
      const ans = input.value.trim().toLowerCase();
      const exp = card.en.toLowerCase();
      const ok  = ans === exp || _similarity(ans, exp) >= 0.82;
      input.classList.add(ok ? 'input-correct' : 'input-wrong');
      input.disabled = true;
      if (!ok) {
        document.getElementById('type-hint').textContent = `Respuesta: ${card.en}`;
        document.getElementById('type-hint').style.display = 'block';
      } else {
        speak(card.en);
      }
      return { ok, correctText: card.en };
    }
  };
}

// ═══════════════════════════════════════════
//  MATCH PAIRS (Conectar 4 pares)
// ═══════════════════════════════════════════

function renderMatchPairs(cards4, container) {
  // cards4: array de 4 tarjetas
  const lefts  = _shuffle(cards4.map(c => ({ id: c.id, text: c.es })));
  const rights = _shuffle(cards4.map(c => ({ id: c.id, text: c.en })));

  let selectedLeft  = null;
  let selectedRight = null;
  let matched = [];   // ids ya emparejados correctamente
  let allCorrect = true;

  container.innerHTML = `
    <div class="ex-label">🔗  Conectá cada palabra con su traducción</div>
    <div class="match-grid">
      <div class="match-col" id="match-left"></div>
      <div class="match-col" id="match-right"></div>
    </div>
  `;

  const leftEl  = container.querySelector('#match-left');
  const rightEl = container.querySelector('#match-right');

  const PAIR_COLORS = ['#58cc02','#1cb0f6','#ff9600','#ce82ff'];

  function tryMatch() {
    if (!selectedLeft || !selectedRight) return;
    const ok = selectedLeft.dataset.id === selectedRight.dataset.id;
    if (ok) {
      const colorIdx = matched.length % PAIR_COLORS.length;
      const color = PAIR_COLORS[colorIdx];
      selectedLeft.classList.add('matched');
      selectedRight.classList.add('matched');
      selectedLeft.style.background  = color + '22';
      selectedRight.style.background = color + '22';
      selectedLeft.style.borderColor  = color;
      selectedRight.style.borderColor = color;
      selectedLeft.style.color  = color;
      selectedRight.style.color = color;
      matched.push(selectedLeft.dataset.id);
    } else {
      allCorrect = false;
      selectedLeft.classList.add('match-wrong');
      selectedRight.classList.add('match-wrong');
      setTimeout(() => {
        selectedLeft.classList.remove('selected', 'match-wrong');
        selectedRight.classList.remove('selected', 'match-wrong');
      }, 600);
    }
    selectedLeft  = null;
    selectedRight = null;

    if (matched.length === cards4.length) {
      document.getElementById('btn-check').disabled = false;
    }
  }

  lefts.forEach(item => {
    const btn = document.createElement('button');
    btn.className = 'match-btn pop';
    btn.textContent = item.text;
    btn.dataset.id = item.id;
    btn.onclick = () => {
      if (matched.includes(item.id)) return;
      leftEl.querySelectorAll('.match-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedLeft = btn;
      tryMatch();
    };
    leftEl.appendChild(btn);
  });

  rights.forEach(item => {
    const btn = document.createElement('button');
    btn.className = 'match-btn pop';
    btn.textContent = item.text;
    btn.dataset.id = item.id;
    btn.onclick = () => {
      if (matched.includes(item.id)) return;
      rightEl.querySelectorAll('.match-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedRight = btn;
      tryMatch();
    };
    rightEl.appendChild(btn);
  });

  return {
    checkAnswer: () => {
      // Auto-submit cuando todos están conectados; el check revisa si hubo errores
      return { ok: allCorrect && matched.length === cards4.length, correctText: '¡Todos los pares!' };
    }
  };
}

// ═══════════════════════════════════════════
//  SPEAK (Pronunciar – con opción de omitir)
// ═══════════════════════════════════════════

function renderSpeak(card, container) {
  let mode       = 'speak';   // 'speak' | 'type'
  let recSession = null;
  let result     = null;

  function buildSpeak() {
    container.innerHTML = `
      <div class="ex-label">🎤  Pronunciá en inglés</div>
      <div class="ex-question">${card.es}</div>
      <div class="speak-word">${card.en}</div>
      <button class="btn-listen-big" id="btn-speak-example">🔊 Escuchar ejemplo</button>
      <div class="speak-actions">
        <button class="btn-speak" id="btn-start-speak">🎤 Hablar</button>
        <button class="btn-skip-speak" id="btn-skip-speak">✏️ Escribir en cambio</button>
      </div>
      <div class="speak-status" id="speak-status"></div>
    `;

    document.getElementById('btn-speak-example').onclick = () => speak(card.en, 0.8);

    document.getElementById('btn-start-speak').onclick = () => {
      if (!SpeechRec) {
        document.getElementById('speak-status').textContent = '⚠️ Tu navegador no soporta el micrófono.';
        return;
      }
      const btn = document.getElementById('btn-start-speak');
      btn.textContent = '🔴 Escuchando…';
      btn.disabled = true;
      document.getElementById('speak-status').textContent = '';

      recSession = startSpeechRec(
        card.en,
        (ok, heard) => {
          result = { ok, heard };
          document.getElementById('btn-check').disabled = false;
          btn.textContent = ok ? '✅ ¡Bien dicho!' : `❌ Escuché: "${heard}"`;
          btn.disabled = true;
          if (ok) speak(card.en);
        },
        (err) => {
          btn.textContent = '🎤 Reintentar';
          btn.disabled = false;
          if (err === 'not-allowed') {
            document.getElementById('speak-status').textContent = '🚫 Permiso de micrófono denegado.';
          }
        }
      );
    };

    document.getElementById('btn-skip-speak').onclick = () => {
      mode = 'type';
      buildType();
    };
  }

  function buildType() {
    container.innerHTML = `
      <div class="ex-label">✏️  Escribí la pronunciación en inglés</div>
      <div class="ex-question">${card.es}</div>
      <input class="type-input" id="speak-type-input" type="text"
             placeholder="Escribí en inglés…" autocomplete="off" spellcheck="false" />
    `;
    const input = document.getElementById('speak-type-input');
    input.oninput = () => {
      document.getElementById('btn-check').disabled = input.value.trim() === '';
    };
    input.onkeydown = e => {
      if (e.key === 'Enter' && input.value.trim() !== '') document.getElementById('btn-check').click();
    };
    input.focus();
  }

  buildSpeak();

  return {
    checkAnswer: () => {
      if (mode === 'type') {
        const input = document.getElementById('speak-type-input');
        const ans   = input ? input.value.trim().toLowerCase() : '';
        const ok    = _similarity(ans, card.en.toLowerCase()) >= 0.8;
        if (input) { input.classList.add(ok ? 'input-correct' : 'input-wrong'); input.disabled = true; }
        if (ok) speak(card.en);
        return { ok, correctText: card.en };
      } else {
        return result || { ok: false, correctText: card.en };
      }
    }
  };
}

// ═══════════════════════════════════════════
//  HELPERS INTERNOS
// ═══════════════════════════════════════════

function _escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// ═══════════════════════════════════════════
//  FÁBRICA  –  Construye el ejercicio correcto
// ═══════════════════════════════════════════

// type: 'intro' | 'mc_es_en' | 'mc_en_es' | 'listen' | 'word_order' | 'fill_blank' | 'type_answer' | 'match' | 'speak'
// data: { card } o { sentence } o { cards4 }
// pool: todos los vocab del nivel para distractores

function buildExercise(type, data, pool, container) {
  window._currentAnswer = null;
  document.getElementById('btn-check').disabled = true;

  switch (type) {
    case 'intro':
      return renderIntroCard(data.card, container, null);

    case 'mc_es_en':
    case 'mc_en_es':
      return renderMC(type, data.card, pool, container);

    case 'listen':
      return renderListen(data.card, pool, container);

    case 'word_order':
      return renderWordOrder(data.sentence, container);

    case 'fill_blank':
      return renderFillBlank(data.card, pool, container);

    case 'type_answer':
      return renderTypeAnswer(data.card, container);

    case 'match':
      return renderMatchPairs(data.cards4, container);

    case 'speak':
      return renderSpeak(data.card, container);

    default:
      container.innerHTML = `<p>Tipo desconocido: ${type}</p>`;
      return { checkAnswer: () => ({ ok: true, correctText: '' }) };
  }
}
