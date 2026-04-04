'use strict';
// ─────────────────────────────────────────────────────────
//  CURRICULUM  –  6 niveles, 34 lecciones, 340 palabras
// ─────────────────────────────────────────────────────────

const CURRICULUM = { levels: [

// ══════════════════════════════════════════════════════════
// NIVEL 1 – SUPERVIVENCIA  (A0)
// ══════════════════════════════════════════════════════════
{
  id: 1, title: 'Supervivencia', subtitle: 'Primeras palabras en inglés',
  cefr: 'A0', icon: '🌱',
  color: '#58cc02', colorDark: '#46a302', colorLight: '#d7ffb8',
  lessons: [
    // ── 1‑1 SALUDOS ─────────────────────────────────────
    { id: '1-1', title: 'Saludos', icon: '👋',
      vocabulary: [
        { id:'v001', en:'hello',          es:'hola',          ex_en:'Hello! How are you?',                ex_es:'¡Hola! ¿Cómo estás?' },
        { id:'v002', en:'goodbye',        es:'adiós',         ex_en:'Goodbye! See you tomorrow.',         ex_es:'¡Adiós! Hasta mañana.' },
        { id:'v003', en:'good morning',   es:'buenos días',   ex_en:'Good morning everyone!',             ex_es:'¡Buenos días a todos!' },
        { id:'v004', en:'good afternoon', es:'buenas tardes', ex_en:'Good afternoon, how can I help?',    ex_es:'Buenas tardes, ¿en qué puedo ayudar?' },
        { id:'v005', en:'good night',     es:'buenas noches', ex_en:'Good night! Sleep well.',            ex_es:'¡Buenas noches! Que descanses.' },
        { id:'v006', en:'please',         es:'por favor',     ex_en:'Can I have water, please?',          ex_es:'¿Me da agua, por favor?' },
        { id:'v007', en:'thank you',      es:'gracias',       ex_en:'Thank you very much!',               ex_es:'¡Muchas gracias!' },
        { id:'v008', en:"you're welcome", es:'de nada',       ex_en:"You're welcome!",                    ex_es:'¡De nada!' },
        { id:'v009', en:'sorry',          es:'lo siento',     ex_en:"I'm sorry, I made a mistake.",       ex_es:'Lo siento, cometí un error.' },
        { id:'v010', en:'excuse me',      es:'disculpe',      ex_en:'Excuse me, where is the bathroom?',  ex_es:'Disculpe, ¿dónde está el baño?' },
      ],
      sentences: [
        { id:'s001', words:['Nice','to','meet','you'],    es:'Mucho gusto',    extra:['Hello','am','I','good'] },
        { id:'s002', words:['Thank','you','very','much'], es:'Muchas gracias', extra:['please','sorry','for','bye'] },
        { id:'s003', words:['See','you','tomorrow'],      es:'Hasta mañana',   extra:['Good','night','bye','me'] },
      ]
    },
    // ── 1‑2 YO Y TÚ ─────────────────────────────────────
    { id: '1-2', title: 'Yo y tú', icon: '🙋',
      vocabulary: [
        { id:'v011', en:'I',    es:'yo',            ex_en:'I am a student.',        ex_es:'Yo soy estudiante.' },
        { id:'v012', en:'you',  es:'tú / usted',    ex_en:'You are very kind.',     ex_es:'Tú eres muy amable.' },
        { id:'v013', en:'he',   es:'él',            ex_en:'He is my brother.',      ex_es:'Él es mi hermano.' },
        { id:'v014', en:'she',  es:'ella',          ex_en:'She is my sister.',      ex_es:'Ella es mi hermana.' },
        { id:'v015', en:'we',   es:'nosotros',      ex_en:'We are friends.',        ex_es:'Nosotros somos amigos.' },
        { id:'v016', en:'they', es:'ellos / ellas', ex_en:'They are from Argentina.',ex_es:'Ellos son de Argentina.' },
        { id:'v017', en:'my',   es:'mi / mis',      ex_en:'My name is Carlos.',     ex_es:'Mi nombre es Carlos.' },
        { id:'v018', en:'your', es:'tu / tus',      ex_en:'What is your name?',     ex_es:'¿Cuál es tu nombre?' },
        { id:'v019', en:'name', es:'nombre',        ex_en:'My name is Maria.',      ex_es:'Mi nombre es María.' },
        { id:'v020', en:'am',   es:'soy / estoy',   ex_en:'I am happy today.',      ex_es:'Estoy feliz hoy.' },
      ],
      sentences: [
        { id:'s004', words:['My','name','is','Carlos'],     es:'Mi nombre es Carlos', extra:['I','am','your','the'] },
        { id:'s005', words:['I','am','from','Argentina'],   es:'Soy de Argentina',    extra:['you','she','my','is'] },
        { id:'s006', words:['What','is','your','name','?'], es:'¿Cuál es tu nombre?', extra:['How','are','my','I'] },
        { id:'s007', words:['Nice','to','meet','you'],      es:'Mucho gusto',         extra:['am','I','is','from'] },
      ]
    },
    // ── 1‑3 NÚMEROS 1–10 ─────────────────────────────────
    { id: '1-3', title: 'Números 1–10', icon: '🔢',
      vocabulary: [
        { id:'v021', en:'one',   es:'uno',    ex_en:'I have one dog.',         ex_es:'Tengo un perro.' },
        { id:'v022', en:'two',   es:'dos',    ex_en:'I have two cats.',        ex_es:'Tengo dos gatos.' },
        { id:'v023', en:'three', es:'tres',   ex_en:'There are three people.', ex_es:'Hay tres personas.' },
        { id:'v024', en:'four',  es:'cuatro', ex_en:'I need four chairs.',     ex_es:'Necesito cuatro sillas.' },
        { id:'v025', en:'five',  es:'cinco',  ex_en:'She is five years old.',  ex_es:'Ella tiene cinco años.' },
        { id:'v026', en:'six',   es:'seis',   ex_en:'The store opens at six.', ex_es:'La tienda abre a las seis.' },
        { id:'v027', en:'seven', es:'siete',  ex_en:'I wake up at seven.',     ex_es:'Me levanto a las siete.' },
        { id:'v028', en:'eight', es:'ocho',   ex_en:'I sleep eight hours.',    ex_es:'Duermo ocho horas.' },
        { id:'v029', en:'nine',  es:'nueve',  ex_en:'There are nine players.', ex_es:'Hay nueve jugadores.' },
        { id:'v030', en:'ten',   es:'diez',   ex_en:'There are ten people.',   ex_es:'Hay diez personas.' },
      ],
      sentences: [
        { id:'s008', words:['I','have','two','cats'],          es:'Tengo dos gatos',       extra:['she','has','three','dogs'] },
        { id:'s009', words:['There','are','ten','people'],     es:'Hay diez personas',     extra:['is','five','eight','a'] },
        { id:'s010', words:['She','is','five','years','old'],  es:'Ella tiene cinco años', extra:['he','am','two','four'] },
      ]
    },
    // ── 1‑4 COLORES ──────────────────────────────────────
    { id: '1-4', title: 'Colores', icon: '🎨',
      vocabulary: [
        { id:'v031', en:'red',    es:'rojo',    ex_en:'The apple is red.',     ex_es:'La manzana es roja.' },
        { id:'v032', en:'blue',   es:'azul',    ex_en:'The sky is blue.',      ex_es:'El cielo es azul.' },
        { id:'v033', en:'green',  es:'verde',   ex_en:'The grass is green.',   ex_es:'El pasto es verde.' },
        { id:'v034', en:'yellow', es:'amarillo',ex_en:'The banana is yellow.', ex_es:'La banana es amarilla.' },
        { id:'v035', en:'white',  es:'blanco',  ex_en:'The snow is white.',    ex_es:'La nieve es blanca.' },
        { id:'v036', en:'black',  es:'negro',   ex_en:'The night is black.',   ex_es:'La noche es negra.' },
        { id:'v037', en:'big',    es:'grande',  ex_en:'It is a big house.',    ex_es:'Es una casa grande.' },
        { id:'v038', en:'small',  es:'pequeño', ex_en:'It is a small dog.',    ex_es:'Es un perro pequeño.' },
        { id:'v039', en:'good',   es:'bueno',   ex_en:'This is very good!',    ex_es:'¡Esto es muy bueno!' },
        { id:'v040', en:'bad',    es:'malo',    ex_en:'This is very bad.',     ex_es:'Esto es muy malo.' },
      ],
      sentences: [
        { id:'s011', words:['The','sky','is','blue'],      es:'El cielo es azul',      extra:['red','green','small','a'] },
        { id:'s012', words:['I','have','a','big','dog'],   es:'Tengo un perro grande', extra:['small','cat','she','is'] },
        { id:'s013', words:['That','is','very','good'],    es:'Eso es muy bueno',      extra:['bad','small','I','am'] },
      ]
    },
    // ── 1‑5 LA FAMILIA ───────────────────────────────────
    { id: '1-5', title: 'La familia', icon: '👨‍👩‍👧',
      vocabulary: [
        { id:'v121', en:'mother',      es:'madre',  ex_en:'My mother cooks very well.',       ex_es:'Mi madre cocina muy bien.' },
        { id:'v122', en:'father',      es:'padre',  ex_en:'My father works every day.',       ex_es:'Mi padre trabaja todos los días.' },
        { id:'v123', en:'brother',     es:'hermano',ex_en:'I have one brother.',              ex_es:'Tengo un hermano.' },
        { id:'v124', en:'sister',      es:'hermana',ex_en:'My sister is very smart.',         ex_es:'Mi hermana es muy inteligente.' },
        { id:'v125', en:'son',         es:'hijo',   ex_en:'Their son is five years old.',     ex_es:'Su hijo tiene cinco años.' },
        { id:'v126', en:'daughter',    es:'hija',   ex_en:'My daughter is a teacher.',        ex_es:'Mi hija es maestra.' },
        { id:'v127', en:'husband',     es:'esposo', ex_en:'Her husband is very kind.',        ex_es:'Su esposo es muy amable.' },
        { id:'v128', en:'wife',        es:'esposa', ex_en:'His wife is a doctor.',            ex_es:'Su esposa es médica.' },
        { id:'v129', en:'grandfather', es:'abuelo', ex_en:'My grandfather is 80 years old.',  ex_es:'Mi abuelo tiene 80 años.' },
        { id:'v130', en:'grandmother', es:'abuela', ex_en:'My grandmother makes great food.', ex_es:'Mi abuela hace una comida excelente.' },
      ],
      sentences: [
        { id:'s042', words:['My','mother','cooks','very','well'],           es:'Mi madre cocina muy bien',        extra:['father','sister','bad','good'] },
        { id:'s043', words:['I','have','one','brother','and','two','sisters'], es:'Tengo un hermano y dos hermanas', extra:['she','my','three','daughter'] },
        { id:'s044', words:['Her','husband','is','a','doctor'],             es:'Su esposo es médico',             extra:['wife','my','teacher','she'] },
      ]
    },
    // ── 1‑6 NÚMEROS 11–20 ────────────────────────────────
    { id: '1-6', title: 'Números 11–20', icon: '🔟',
      vocabulary: [
        { id:'v131', en:'eleven',   es:'once',      ex_en:'A soccer team has eleven players.',ex_es:'Un equipo de fútbol tiene once jugadores.' },
        { id:'v132', en:'twelve',   es:'doce',      ex_en:'A year has twelve months.',        ex_es:'Un año tiene doce meses.' },
        { id:'v133', en:'thirteen', es:'trece',     ex_en:'She is thirteen years old.',       ex_es:'Ella tiene trece años.' },
        { id:'v134', en:'fourteen', es:'catorce',   ex_en:'I have fourteen days of vacation.',ex_es:'Tengo catorce días de vacaciones.' },
        { id:'v135', en:'fifteen',  es:'quince',    ex_en:'There are fifteen students.',      ex_es:'Hay quince estudiantes.' },
        { id:'v136', en:'sixteen',  es:'dieciséis', ex_en:'She got sixteen out of twenty.',   ex_es:'Ella sacó dieciséis sobre veinte.' },
        { id:'v137', en:'seventeen',es:'diecisiete',ex_en:'He is seventeen years old.',       ex_es:'Él tiene diecisiete años.' },
        { id:'v138', en:'eighteen', es:'dieciocho', ex_en:'I turn eighteen next month.',      ex_es:'Cumplo dieciocho el mes que viene.' },
        { id:'v139', en:'nineteen', es:'diecinueve',ex_en:'There are nineteen people waiting.',ex_es:'Hay diecinueve personas esperando.' },
        { id:'v140', en:'twenty',   es:'veinte',    ex_en:'I have twenty dollars.',           ex_es:'Tengo veinte dólares.' },
      ],
      sentences: [
        { id:'s045', words:['A','year','has','twelve','months'],  es:'Un año tiene doce meses',  extra:['ten','eleven','week','days'] },
        { id:'s046', words:['She','is','fifteen','years','old'],  es:'Ella tiene quince años',   extra:['he','sixteen','I','am'] },
        { id:'s047', words:['I','have','twenty','dollars'],       es:'Tengo veinte dólares',     extra:['she','ten','euros','need'] },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════
// NIVEL 2 – BÁSICO  (A1)
// ══════════════════════════════════════════════════════════
{
  id: 2, title: 'Básico', subtitle: 'Verbos y vida cotidiana',
  cefr: 'A1', icon: '📗',
  color: '#1cb0f6', colorDark: '#0d8abf', colorLight: '#d0f0ff',
  lessons: [
    // ── 2‑1 VERBOS ESENCIALES ────────────────────────────
    { id: '2-1', title: 'Verbos esenciales', icon: '⚡',
      vocabulary: [
        { id:'v041', en:'eat',   es:'comer',    ex_en:'I eat rice every day.',         ex_es:'Como arroz todos los días.' },
        { id:'v042', en:'drink', es:'beber',    ex_en:'I drink water in the morning.', ex_es:'Bebo agua por la mañana.' },
        { id:'v043', en:'sleep', es:'dormir',   ex_en:'I sleep eight hours.',          ex_es:'Duermo ocho horas.' },
        { id:'v044', en:'work',  es:'trabajar', ex_en:'I work in an office.',          ex_es:'Trabajo en una oficina.' },
        { id:'v045', en:'live',  es:'vivir',    ex_en:'I live in Buenos Aires.',       ex_es:'Vivo en Buenos Aires.' },
        { id:'v046', en:'go',    es:'ir',       ex_en:'I go to school every day.',     ex_es:'Voy a la escuela todos los días.' },
        { id:'v047', en:'come',  es:'venir',    ex_en:'She comes from Spain.',         ex_es:'Ella viene de España.' },
        { id:'v048', en:'want',  es:'querer',   ex_en:'I want a coffee, please.',      ex_es:'Quiero un café, por favor.' },
        { id:'v049', en:'need',  es:'necesitar',ex_en:'I need help.',                  ex_es:'Necesito ayuda.' },
        { id:'v050', en:'have',  es:'tener',    ex_en:'I have two brothers.',          ex_es:'Tengo dos hermanos.' },
      ],
      sentences: [
        { id:'s014', words:['I','eat','breakfast','every','morning'],  es:'Como el desayuno cada mañana', extra:['she','drink','night','at'] },
        { id:'s015', words:['She','drinks','coffee','with','milk'],    es:'Ella toma café con leche',     extra:['I','eat','water','and'] },
        { id:'s016', words:['We','live','in','Buenos','Aires'],        es:'Vivimos en Buenos Aires',      extra:['I','go','from','they'] },
        { id:'s017', words:['I','want','to','sleep'],                  es:'Quiero dormir',                extra:['need','eat','she','go'] },
      ]
    },
    // ── 2‑2 LA CASA ──────────────────────────────────────
    { id: '2-2', title: 'La casa', icon: '🏠',
      vocabulary: [
        { id:'v051', en:'house',   es:'casa',       ex_en:'I live in a big house.',   ex_es:'Vivo en una casa grande.' },
        { id:'v052', en:'room',    es:'habitación', ex_en:'My house has four rooms.', ex_es:'Mi casa tiene cuatro habitaciones.' },
        { id:'v053', en:'kitchen', es:'cocina',     ex_en:'I cook in the kitchen.',   ex_es:'Cocino en la cocina.' },
        { id:'v054', en:'bathroom',es:'baño',       ex_en:'The bathroom is clean.',   ex_es:'El baño está limpio.' },
        { id:'v055', en:'bedroom', es:'dormitorio', ex_en:'My bedroom is small.',     ex_es:'Mi dormitorio es pequeño.' },
        { id:'v056', en:'door',    es:'puerta',     ex_en:'Please close the door.',   ex_es:'Por favor cierra la puerta.' },
        { id:'v057', en:'window',  es:'ventana',    ex_en:'Open the window, please.', ex_es:'Abre la ventana, por favor.' },
        { id:'v058', en:'chair',   es:'silla',      ex_en:'Sit on the chair.',        ex_es:'Siéntate en la silla.' },
        { id:'v059', en:'table',   es:'mesa',       ex_en:'The food is on the table.',ex_es:'La comida está en la mesa.' },
        { id:'v060', en:'bed',     es:'cama',       ex_en:'I sleep in my bed.',       ex_es:'Duermo en mi cama.' },
      ],
      sentences: [
        { id:'s018', words:['The','kitchen','is','very','clean'],       es:'La cocina está muy limpia',          extra:['big','small','room','I'] },
        { id:'s019', words:['My','bedroom','has','a','big','window'],   es:'Mi dormitorio tiene una ventana grande', extra:['door','table','small','is'] },
        { id:'s020', words:['Close','the','door','please'],             es:'Por favor cierra la puerta',         extra:['Open','window','the','is'] },
      ]
    },
    // ── 2‑3 COMIDA Y BEBIDA ──────────────────────────────
    { id: '2-3', title: 'Comida y bebida', icon: '🍽️',
      vocabulary: [
        { id:'v061', en:'water',    es:'agua',  ex_en:'I drink water every day.',      ex_es:'Bebo agua todos los días.' },
        { id:'v062', en:'coffee',   es:'café',  ex_en:'I drink coffee in the morning.',ex_es:'Tomo café por la mañana.' },
        { id:'v063', en:'bread',    es:'pan',   ex_en:'I eat bread for breakfast.',    ex_es:'Como pan en el desayuno.' },
        { id:'v064', en:'meat',     es:'carne', ex_en:"I don't eat meat.",             ex_es:'No como carne.' },
        { id:'v065', en:'fruit',    es:'fruta', ex_en:'I eat fruit for lunch.',        ex_es:'Como fruta en el almuerzo.' },
        { id:'v066', en:'vegetable',es:'verdura',ex_en:'Vegetables are very healthy.', ex_es:'Las verduras son muy saludables.' },
        { id:'v067', en:'milk',     es:'leche', ex_en:'I drink milk at night.',        ex_es:'Tomo leche por la noche.' },
        { id:'v068', en:'egg',      es:'huevo', ex_en:'I eat two eggs for breakfast.', ex_es:'Como dos huevos en el desayuno.' },
        { id:'v069', en:'rice',     es:'arroz', ex_en:'I eat rice with chicken.',      ex_es:'Como arroz con pollo.' },
        { id:'v070', en:'chicken',  es:'pollo', ex_en:'I like chicken with rice.',     ex_es:'Me gusta el pollo con arroz.' },
      ],
      sentences: [
        { id:'s021', words:['I','eat','rice','and','chicken'],       es:'Como arroz y pollo',         extra:['drink','she','with','bread'] },
        { id:'s022', words:['She','drinks','milk','every','night'],  es:'Ella toma leche cada noche', extra:['I','eat','coffee','morning'] },
        { id:'s023', words:['Do','you','want','some','coffee','?'],  es:'¿Querés un café?',           extra:['I','she','eat','water'] },
      ]
    },
    // ── 2‑4 PRESENTE SIMPLE ──────────────────────────────
    { id: '2-4', title: 'Presente simple', icon: '📝',
      vocabulary: [
        { id:'v071', en:'I am',     es:'yo soy / estoy',          ex_en:'I am a student.',         ex_es:'Soy estudiante.' },
        { id:'v072', en:'you are',  es:'tú eres / estás',          ex_en:'You are very smart.',     ex_es:'Eres muy inteligente.' },
        { id:'v073', en:'he is',    es:'él es / está',             ex_en:'He is my teacher.',       ex_es:'Él es mi profesor.' },
        { id:'v074', en:'she is',   es:'ella es / está',           ex_en:'She is beautiful.',       ex_es:'Ella es hermosa.' },
        { id:'v075', en:'we are',   es:'nosotros somos / estamos', ex_en:'We are happy.',           ex_es:'Estamos contentos.' },
        { id:'v076', en:'they are', es:'ellos son / están',        ex_en:'They are from Spain.',    ex_es:'Ellos son de España.' },
        { id:'v077', en:"I don't",  es:'yo no',                    ex_en:"I don't eat meat.",       ex_es:'Yo no como carne.' },
        { id:'v078', en:'I can',    es:'yo puedo',                 ex_en:'I can speak English.',    ex_es:'Puedo hablar inglés.' },
        { id:'v079', en:"I can't",  es:'yo no puedo',              ex_en:"I can't swim.",           ex_es:'No puedo nadar.' },
        { id:'v080', en:'there is', es:'hay (singular)',           ex_en:'There is a cat on the table.',ex_es:'Hay un gato en la mesa.' },
      ],
      sentences: [
        { id:'s024', words:['I','am','a','student','from','Argentina'], es:'Soy estudiante de Argentina', extra:['you','is','she','we'] },
        { id:'s025', words:['She','is','a','good','teacher'],           es:'Ella es una buena profesora', extra:['he','am','I','are'] },
        { id:'s026', words:['I','can','speak','English'],               es:'Puedo hablar inglés',         extra:['she','is','we','learn'] },
        { id:'s027', words:['There','is','a','cat','on','the','table'], es:'Hay un gato en la mesa',      extra:['are','I','have','chair'] },
      ]
    },
    // ── 2‑5 EL CUERPO HUMANO ─────────────────────────────
    { id: '2-5', title: 'El cuerpo', icon: '🧍',
      vocabulary: [
        { id:'v141', en:'head', es:'cabeza',  ex_en:'My head hurts today.',          ex_es:'Hoy me duele la cabeza.' },
        { id:'v142', en:'eye',  es:'ojo',     ex_en:'She has beautiful blue eyes.',  ex_es:'Ella tiene ojos azules hermosos.' },
        { id:'v143', en:'ear',  es:'oreja',   ex_en:'My ear hurts.',                 ex_es:'Me duele la oreja.' },
        { id:'v144', en:'nose', es:'nariz',   ex_en:'My nose is cold.',              ex_es:'Tengo la nariz fría.' },
        { id:'v145', en:'mouth',es:'boca',    ex_en:'Open your mouth, please.',      ex_es:'Abrí la boca, por favor.' },
        { id:'v146', en:'hand', es:'mano',    ex_en:'Wash your hands before eating.',ex_es:'Lavate las manos antes de comer.' },
        { id:'v147', en:'arm',  es:'brazo',   ex_en:'She broke her arm.',            ex_es:'Ella se rompió el brazo.' },
        { id:'v148', en:'leg',  es:'pierna',  ex_en:'My leg is very tired.',         ex_es:'Tengo la pierna muy cansada.' },
        { id:'v149', en:'foot', es:'pie',     ex_en:'My foot hurts from walking.',   ex_es:'Me duele el pie de caminar.' },
        { id:'v150', en:'back', es:'espalda', ex_en:'I have back pain.',             ex_es:'Tengo dolor de espalda.' },
      ],
      sentences: [
        { id:'s048', words:['My','head','hurts','today'],              es:'Hoy me duele la cabeza',          extra:['arm','back','I','am'] },
        { id:'s049', words:['She','has','beautiful','blue','eyes'],    es:'Ella tiene ojos azules hermosos', extra:['he','brown','I','big'] },
        { id:'s050', words:['Wash','your','hands','before','eating'],  es:'Lavate las manos antes de comer', extra:['face','feet','after','drinking'] },
      ]
    },
    // ── 2‑6 LA CIUDAD ────────────────────────────────────
    { id: '2-6', title: 'La ciudad', icon: '🏙️',
      vocabulary: [
        { id:'v151', en:'street',     es:'calle',      ex_en:'I live on a quiet street.',       ex_es:'Vivo en una calle tranquila.' },
        { id:'v152', en:'store',      es:'tienda',     ex_en:'The store opens at nine.',         ex_es:'La tienda abre a las nueve.' },
        { id:'v153', en:'bank',       es:'banco',      ex_en:'I need to go to the bank.',        ex_es:'Necesito ir al banco.' },
        { id:'v154', en:'hospital',   es:'hospital',   ex_en:'The hospital is very big.',        ex_es:'El hospital es muy grande.' },
        { id:'v155', en:'park',       es:'parque',     ex_en:'We walk in the park every day.',   ex_es:'Caminamos en el parque todos los días.' },
        { id:'v156', en:'restaurant', es:'restaurante',ex_en:'This restaurant is very good.',    ex_es:'Este restaurante es muy bueno.' },
        { id:'v157', en:'bus',        es:'colectivo',  ex_en:'I take the bus to work.',          ex_es:'Tomo el colectivo para ir al trabajo.' },
        { id:'v158', en:'station',    es:'estación',   ex_en:'The train station is near here.',  ex_es:'La estación de tren está cerca de aquí.' },
        { id:'v159', en:'library',    es:'biblioteca', ex_en:'I study at the library.',          ex_es:'Estudio en la biblioteca.' },
        { id:'v160', en:'office',     es:'oficina',    ex_en:'My office is on the third floor.', ex_es:'Mi oficina está en el tercer piso.' },
      ],
      sentences: [
        { id:'s051', words:['I','take','the','bus','to','work'],     es:'Tomo el colectivo para ir al trabajo', extra:['she','car','school','from'] },
        { id:'s052', words:['The','library','is','near','the','park'],es:'La biblioteca está cerca del parque', extra:['bank','store','far','a'] },
        { id:'s053', words:['This','restaurant','is','very','good'],  es:'Este restaurante es muy bueno',       extra:['hospital','park','bad','I'] },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════
// NIVEL 3 – CONVERSACIÓN  (A1+)
// ══════════════════════════════════════════════════════════
{
  id: 3, title: 'Conversación', subtitle: 'Hablar del día a día',
  cefr: 'A1+', icon: '💬',
  color: '#ce82ff', colorDark: '#a855e8', colorLight: '#f3e0ff',
  lessons: [
    // ── 3‑1 PREGUNTAS ────────────────────────────────────
    { id: '3-1', title: 'Preguntas', icon: '❓',
      vocabulary: [
        { id:'v081', en:'what',     es:'qué',                   ex_en:'What is your name?',            ex_es:'¿Cuál es tu nombre?' },
        { id:'v082', en:'who',      es:'quién',                 ex_en:'Who is that person?',           ex_es:'¿Quién es esa persona?' },
        { id:'v083', en:'where',    es:'dónde',                 ex_en:'Where do you live?',            ex_es:'¿Dónde vivís?' },
        { id:'v084', en:'when',     es:'cuándo',                ex_en:'When do you work?',             ex_es:'¿Cuándo trabajás?' },
        { id:'v085', en:'why',      es:'por qué',               ex_en:'Why are you sad?',              ex_es:'¿Por qué estás triste?' },
        { id:'v086', en:'how',      es:'cómo',                  ex_en:'How are you?',                  ex_es:'¿Cómo estás?' },
        { id:'v087', en:'which',    es:'cuál',                  ex_en:'Which is your house?',          ex_es:'¿Cuál es tu casa?' },
        { id:'v088', en:'how much', es:'cuánto',                ex_en:'How much does it cost?',        ex_es:'¿Cuánto cuesta?' },
        { id:'v089', en:'how many', es:'cuántos',               ex_en:'How many brothers do you have?',ex_es:'¿Cuántos hermanos tenés?' },
        { id:'v090', en:'how old',  es:'qué edad / cuántos años',ex_en:'How old are you?',            ex_es:'¿Cuántos años tenés?' },
      ],
      sentences: [
        { id:'s028', words:['What','is','your','name','?'],  es:'¿Cuál es tu nombre?',   extra:['Who','How','are','I'] },
        { id:'s029', words:['Where','do','you','live','?'],  es:'¿Dónde vivís?',         extra:['When','Why','I','am'] },
        { id:'s030', words:['How','old','are','you','?'],    es:'¿Cuántos años tenés?',  extra:['What','much','is','I'] },
        { id:'s031', words:['Why','are','you','happy','?'],  es:'¿Por qué estás contento?', extra:['How','What','I','am'] },
      ]
    },
    // ── 3‑2 EL TIEMPO ────────────────────────────────────
    { id: '3-2', title: 'El tiempo', icon: '⏰',
      vocabulary: [
        { id:'v091', en:'today',     es:'hoy',             ex_en:'I work today.',            ex_es:'Hoy trabajo.' },
        { id:'v092', en:'yesterday', es:'ayer',            ex_en:'I ate pizza yesterday.',   ex_es:'Ayer comí pizza.' },
        { id:'v093', en:'tomorrow',  es:'mañana',          ex_en:'I will travel tomorrow.',  ex_es:'Mañana voy a viajar.' },
        { id:'v094', en:'now',       es:'ahora',           ex_en:'I am eating now.',         ex_es:'Ahora estoy comiendo.' },
        { id:'v095', en:'later',     es:'después / más tarde',ex_en:'I will call you later.',ex_es:'Te llamo más tarde.' },
        { id:'v096', en:'always',    es:'siempre',         ex_en:'I always eat breakfast.',  ex_es:'Siempre desayuno.' },
        { id:'v097', en:'never',     es:'nunca',           ex_en:'I never drink alcohol.',   ex_es:'Nunca tomo alcohol.' },
        { id:'v098', en:'sometimes', es:'a veces',         ex_en:'I sometimes watch TV.',    ex_es:'A veces veo televisión.' },
        { id:'v099', en:'every day', es:'todos los días',  ex_en:'I exercise every day.',    ex_es:'Hago ejercicio todos los días.' },
        { id:'v100', en:'week',      es:'semana',          ex_en:'I work five days a week.', ex_es:'Trabajo cinco días a la semana.' },
      ],
      sentences: [
        { id:'s032', words:['I','always','eat','breakfast','in','the','morning'], es:'Siempre desayuno por la mañana', extra:['never','she','at','is'] },
        { id:'s033', words:['She','never','eats','meat'],                         es:'Ella nunca come carne',          extra:['always','I','drinks','do'] },
        { id:'s034', words:['I','will','call','you','tomorrow'],                  es:'Te llamo mañana',                extra:['today','she','eat','now'] },
      ]
    },
    // ── 3‑3 DESCRIBIR PERSONAS ───────────────────────────
    { id: '3-3', title: 'Describir personas', icon: '🧑',
      vocabulary: [
        { id:'v101', en:'tall',    es:'alto',           ex_en:'He is very tall.',        ex_es:'Él es muy alto.' },
        { id:'v102', en:'short',   es:'bajo',           ex_en:'She is short.',           ex_es:'Ella es baja.' },
        { id:'v103', en:'young',   es:'joven',          ex_en:'He is young and strong.', ex_es:'Él es joven y fuerte.' },
        { id:'v104', en:'old',     es:'viejo / mayor',  ex_en:'My grandfather is old.',  ex_es:'Mi abuelo es mayor.' },
        { id:'v105', en:'happy',   es:'feliz',          ex_en:'I am very happy today.',  ex_es:'Hoy estoy muy feliz.' },
        { id:'v106', en:'sad',     es:'triste',         ex_en:'Why are you sad?',        ex_es:'¿Por qué estás triste?' },
        { id:'v107', en:'tired',   es:'cansado',        ex_en:'I am very tired.',        ex_es:'Estoy muy cansado.' },
        { id:'v108', en:'hungry',  es:'hambriento',     ex_en:"I'm hungry, let's eat.",  ex_es:'Tengo hambre, vamos a comer.' },
        { id:'v109', en:'kind',    es:'amable',         ex_en:'She is very kind.',       ex_es:'Ella es muy amable.' },
        { id:'v110', en:'smart',   es:'inteligente',    ex_en:'You are very smart.',     ex_es:'Sos muy inteligente.' },
      ],
      sentences: [
        { id:'s035', words:['She','is','tall','and','beautiful'],  es:'Ella es alta y hermosa',     extra:['He','am','short','I'] },
        { id:'s036', words:['I','am','tired','and','hungry'],      es:'Estoy cansado y hambriento', extra:['she','is','sad','happy'] },
        { id:'s037', words:['He','is','young','and','smart'],      es:'Él es joven e inteligente',  extra:['she','old','I','am'] },
      ]
    },
    // ── 3‑4 MI RUTINA ────────────────────────────────────
    { id: '3-4', title: 'Mi rutina', icon: '🌅',
      vocabulary: [
        { id:'v111', en:'wake up',        es:'despertarse',   ex_en:'I wake up at seven.',           ex_es:'Me despierto a las siete.' },
        { id:'v112', en:'get up',         es:'levantarse',    ex_en:'I get up at seven thirty.',     ex_es:'Me levanto a las siete y media.' },
        { id:'v113', en:'have breakfast', es:'desayunar',     ex_en:'I have breakfast at eight.',    ex_es:'Desayuno a las ocho.' },
        { id:'v114', en:'go to work',     es:'ir al trabajo', ex_en:'I go to work at nine.',         ex_es:'Voy al trabajo a las nueve.' },
        { id:'v115', en:'have lunch',     es:'almorzar',      ex_en:'I have lunch at one.',          ex_es:'Almuerzo a la una.' },
        { id:'v116', en:'come home',      es:'volver a casa', ex_en:'I come home at six.',           ex_es:'Vuelvo a casa a las seis.' },
        { id:'v117', en:'have dinner',    es:'cenar',         ex_en:'I have dinner at eight.',       ex_es:'Ceno a las ocho.' },
        { id:'v118', en:'watch TV',       es:'ver televisión',ex_en:'I watch TV at night.',          ex_es:'Veo televisión de noche.' },
        { id:'v119', en:'take a shower',  es:'ducharse',      ex_en:'I take a shower every morning.',ex_es:'Me ducho todas las mañanas.' },
        { id:'v120', en:'go to bed',      es:'irse a dormir', ex_en:'I go to bed at eleven.',        ex_es:'Me acuesto a las once.' },
      ],
      sentences: [
        { id:'s038', words:['I','wake','up','at','seven','every','morning'], es:'Me despierto a las siete cada mañana', extra:['she','get','at','six'] },
        { id:'s039', words:['She','goes','to','work','by','bus'],            es:'Ella va al trabajo en colectivo',      extra:['I','come','home','car'] },
        { id:'s040', words:['I','go','to','bed','at','eleven'],              es:'Me acuesto a las once',                extra:['she','wake','up','ten'] },
        { id:'s041', words:['We','have','dinner','at','eight'],              es:'Cenamos a las ocho',                   extra:['I','lunch','breakfast','at'] },
      ]
    },
    // ── 3‑5 ROPA ─────────────────────────────────────────
    { id: '3-5', title: 'Ropa', icon: '👕',
      vocabulary: [
        { id:'v161', en:'shirt',   es:'camisa',    ex_en:'He wears a white shirt to work.',  ex_es:'Él usa camisa blanca para trabajar.' },
        { id:'v162', en:'pants',   es:'pantalón',  ex_en:'I need new pants.',                ex_es:'Necesito pantalones nuevos.' },
        { id:'v163', en:'dress',   es:'vestido',   ex_en:'She wears a red dress.',           ex_es:'Ella usa un vestido rojo.' },
        { id:'v164', en:'shoes',   es:'zapatos',   ex_en:'These shoes are very comfortable.',ex_es:'Estos zapatos son muy cómodos.' },
        { id:'v165', en:'hat',     es:'sombrero',  ex_en:'Put on your hat, it is cold.',     ex_es:'Ponete el sombrero, hace frío.' },
        { id:'v166', en:'jacket',  es:'campera',   ex_en:'I need a jacket, it is cold.',     ex_es:'Necesito una campera, hace frío.' },
        { id:'v167', en:'socks',   es:'medias',    ex_en:'I cannot find my socks.',          ex_es:'No encuentro mis medias.' },
        { id:'v168', en:'bag',     es:'bolso',     ex_en:'My bag is very heavy today.',      ex_es:'Mi bolso está muy pesado hoy.' },
        { id:'v169', en:'glasses', es:'anteojos',  ex_en:'She wears glasses to read.',       ex_es:'Ella usa anteojos para leer.' },
        { id:'v170', en:'belt',    es:'cinturón',  ex_en:'He always wears a black belt.',    ex_es:'Él siempre usa cinturón negro.' },
      ],
      sentences: [
        { id:'s054', words:['She','wears','a','red','dress'],    es:'Ella usa un vestido rojo',       extra:['he','blue','shirt','I'] },
        { id:'s055', words:['These','shoes','are','very','comfortable'], es:'Estos zapatos son muy cómodos', extra:['those','socks','big','I'] },
        { id:'s056', words:['I','need','a','jacket','today'],    es:'Necesito una campera hoy',       extra:['she','hat','new','dress'] },
      ]
    },
    // ── 3‑6 EL CLIMA ─────────────────────────────────────
    { id: '3-6', title: 'El clima', icon: '🌤️',
      vocabulary: [
        { id:'v171', en:'sun',        es:'sol',               ex_en:'The sun is very strong today.', ex_es:'El sol está muy fuerte hoy.' },
        { id:'v172', en:'rain',       es:'lluvia',            ex_en:'I love walking in the rain.',   ex_es:'Me encanta caminar bajo la lluvia.' },
        { id:'v173', en:'cloud',      es:'nube',              ex_en:'There are many clouds today.',  ex_es:'Hay muchas nubes hoy.' },
        { id:'v174', en:'wind',       es:'viento',            ex_en:'The wind is very strong.',      ex_es:'El viento es muy fuerte.' },
        { id:'v175', en:'snow',       es:'nieve',             ex_en:'The children play in the snow.',ex_es:'Los niños juegan en la nieve.' },
        { id:'v176', en:'hot',        es:'caluroso / hace calor',ex_en:'It is very hot today.',     ex_es:'Hace mucho calor hoy.' },
        { id:'v177', en:'cold',       es:'frío / hace frío',  ex_en:'It is cold in winter.',        ex_es:'Hace frío en invierno.' },
        { id:'v178', en:'weather',    es:'clima / tiempo',    ex_en:'How is the weather today?',    ex_es:'¿Cómo está el tiempo hoy?' },
        { id:'v179', en:'season',     es:'estación del año',  ex_en:'My favorite season is summer.',ex_es:'Mi estación favorita es el verano.' },
        { id:'v180', en:'temperature',es:'temperatura',       ex_en:'The temperature is 30 degrees.',ex_es:'La temperatura es de 30 grados.' },
      ],
      sentences: [
        { id:'s057', words:['It','is','very','hot','today'],          es:'Hace mucho calor hoy',         extra:['cold','was','I','rain'] },
        { id:'s058', words:['How','is','the','weather','today','?'],  es:'¿Cómo está el tiempo hoy?',    extra:['What','season','it','temperature'] },
        { id:'s059', words:['My','favorite','season','is','summer'],  es:'Mi estación favorita es el verano', extra:['winter','weather','I','cold'] },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════
// NIVEL 4 – SOCIAL  (A2)
// ══════════════════════════════════════════════════════════
{
  id: 4, title: 'Social', subtitle: 'Experiencias y pasado',
  cefr: 'A2', icon: '🗣️',
  color: '#ff9600', colorDark: '#cc7800', colorLight: '#fff0cc',
  lessons: [
    // ── 4‑1 PASADO SIMPLE REGULAR ────────────────────────
    { id: '4-1', title: 'Pasado regular', icon: '⏪',
      vocabulary: [
        { id:'v181', en:'walked',   es:'caminé / caminó',  ex_en:'I walked to school yesterday.',    ex_es:'Ayer caminé a la escuela.' },
        { id:'v182', en:'talked',   es:'hablé / habló',    ex_en:'We talked for two hours.',         ex_es:'Hablamos por dos horas.' },
        { id:'v183', en:'worked',   es:'trabajé / trabajó',ex_en:'She worked all weekend.',           ex_es:'Ella trabajó todo el fin de semana.' },
        { id:'v184', en:'played',   es:'jugué / jugó',     ex_en:'The children played in the park.', ex_es:'Los niños jugaron en el parque.' },
        { id:'v185', en:'watched',  es:'miré / miró',      ex_en:'I watched a movie last night.',    ex_es:'Miré una película anoche.' },
        { id:'v186', en:'listened', es:'escuché / escuchó',ex_en:'He listened to music all day.',    ex_es:'Él escuchó música todo el día.' },
        { id:'v187', en:'cooked',   es:'cociné / cocinó',  ex_en:'My mother cooked a big dinner.',   ex_es:'Mi madre cocinó una gran cena.' },
        { id:'v188', en:'cleaned',  es:'limpié / limpió',  ex_en:'I cleaned the house on Saturday.', ex_es:'Limpié la casa el sábado.' },
        { id:'v189', en:'called',   es:'llamé / llamó',    ex_en:'She called me this morning.',      ex_es:'Ella me llamó esta mañana.' },
        { id:'v190', en:'asked',    es:'pregunté / preguntó',ex_en:'He asked me a question.',        ex_es:'Él me hizo una pregunta.' },
      ],
      sentences: [
        { id:'s060', words:['I','walked','to','school','yesterday'],  es:'Ayer caminé a la escuela',   extra:['she','talked','today','home'] },
        { id:'s061', words:['We','talked','for','two','hours'],       es:'Hablamos por dos horas',     extra:['I','played','three','minutes'] },
        { id:'s062', words:['She','called','me','this','morning'],    es:'Ella me llamó esta mañana',  extra:['he','asked','last','night'] },
      ]
    },
    // ── 4‑2 PASADO SIMPLE IRREGULAR ──────────────────────
    { id: '4-2', title: 'Pasado irregular', icon: '🔀',
      vocabulary: [
        { id:'v191', en:'went',  es:'fui / fue',    ex_en:'I went to the supermarket yesterday.', ex_es:'Ayer fui al supermercado.' },
        { id:'v192', en:'came',  es:'vine / vino',  ex_en:'She came home late.',                  ex_es:'Ella llegó a casa tarde.' },
        { id:'v193', en:'saw',   es:'vi / vio',     ex_en:'I saw a great movie last weekend.',    ex_es:'Vi una gran película el fin de semana.' },
        { id:'v194', en:'ate',   es:'comí / comió', ex_en:'We ate pizza for dinner.',             ex_es:'Comimos pizza en la cena.' },
        { id:'v195', en:'drank', es:'bebí / bebió', ex_en:'She drank three cups of coffee.',      ex_es:'Ella tomó tres tazas de café.' },
        { id:'v196', en:'slept', es:'dormí / durmió',ex_en:'I slept eight hours last night.',    ex_es:'Dormí ocho horas anoche.' },
        { id:'v197', en:'got',   es:'conseguí / consiguió',ex_en:'He got a new job last month.', ex_es:'Él consiguió un trabajo nuevo el mes pasado.' },
        { id:'v198', en:'made',  es:'hice / hizo',  ex_en:'She made a delicious cake.',          ex_es:'Ella hizo una torta deliciosa.' },
        { id:'v199', en:'took',  es:'tomé / tomó',  ex_en:'I took the bus to work.',             ex_es:'Tomé el colectivo para ir al trabajo.' },
        { id:'v200', en:'gave',  es:'di / dio',     ex_en:'My friend gave me a gift.',           ex_es:'Mi amigo me dio un regalo.' },
      ],
      sentences: [
        { id:'s063', words:['I','went','to','the','supermarket','yesterday'], es:'Ayer fui al supermercado', extra:['she','came','today','school'] },
        { id:'s064', words:['We','ate','pizza','for','dinner'],               es:'Comimos pizza en la cena', extra:['I','drank','lunch','she'] },
        { id:'s065', words:['She','made','a','delicious','cake'],             es:'Ella hizo una torta deliciosa', extra:['he','got','big','took'] },
      ]
    },
    // ── 4‑3 VIAJES ───────────────────────────────────────
    { id: '4-3', title: 'Viajes', icon: '✈️',
      vocabulary: [
        { id:'v201', en:'airport',     es:'aeropuerto', ex_en:'The airport is 40 km from here.',   ex_es:'El aeropuerto está a 40 km de aquí.' },
        { id:'v202', en:'passport',    es:'pasaporte',  ex_en:'Do not forget your passport!',       ex_es:'¡No olvides tu pasaporte!' },
        { id:'v203', en:'ticket',      es:'boleto / pasaje', ex_en:'I bought two tickets.',        ex_es:'Compré dos boletos.' },
        { id:'v204', en:'hotel',       es:'hotel',      ex_en:'We stayed in a nice hotel.',         ex_es:'Nos quedamos en un lindo hotel.' },
        { id:'v205', en:'suitcase',    es:'valija',     ex_en:'My suitcase is very heavy.',         ex_es:'Mi valija está muy pesada.' },
        { id:'v206', en:'trip',        es:'viaje',      ex_en:'We had an amazing trip.',            ex_es:'Tuvimos un viaje increíble.' },
        { id:'v207', en:'country',     es:'país',       ex_en:'I want to visit many countries.',    ex_es:'Quiero visitar muchos países.' },
        { id:'v208', en:'map',         es:'mapa',       ex_en:'I need a map of the city.',         ex_es:'Necesito un mapa de la ciudad.' },
        { id:'v209', en:'reservation', es:'reserva',    ex_en:'I made a reservation for two.',     ex_es:'Hice una reserva para dos.' },
        { id:'v210', en:'departure',   es:'salida',     ex_en:'What is the departure time?',       ex_es:'¿A qué hora es la salida?' },
      ],
      sentences: [
        { id:'s066', words:['The','airport','is','very','far'],          es:'El aeropuerto está muy lejos',    extra:['hotel','station','near','is'] },
        { id:'s067', words:['I','made','a','reservation','for','two'],   es:'Hice una reserva para dos',      extra:['she','ticket','three','hotel'] },
        { id:'s068', words:['My','suitcase','is','very','heavy'],        es:'Mi valija está muy pesada',      extra:['bag','jacket','light','I'] },
      ]
    },
    // ── 4‑4 PROFESIONES ──────────────────────────────────
    { id: '4-4', title: 'Profesiones', icon: '💼',
      vocabulary: [
        { id:'v211', en:'doctor',      es:'médico/a',      ex_en:'My sister is a doctor.',           ex_es:'Mi hermana es médica.' },
        { id:'v212', en:'teacher',     es:'maestro/a',     ex_en:'She is an English teacher.',       ex_es:'Ella es profesora de inglés.' },
        { id:'v213', en:'engineer',    es:'ingeniero/a',   ex_en:'He works as an engineer.',         ex_es:'Él trabaja como ingeniero.' },
        { id:'v214', en:'lawyer',      es:'abogado/a',     ex_en:'I need to talk to a lawyer.',      ex_es:'Necesito hablar con un abogado.' },
        { id:'v215', en:'chef',        es:'chef / cocinero/a',ex_en:'The chef cooked an amazing meal.',ex_es:'El chef preparó una comida increíble.' },
        { id:'v216', en:'nurse',       es:'enfermero/a',   ex_en:'The nurse was very helpful.',      ex_es:'La enfermera fue muy servicial.' },
        { id:'v217', en:'driver',      es:'conductor/a',   ex_en:'The taxi driver was friendly.',    ex_es:'El taxista fue muy amigable.' },
        { id:'v218', en:'artist',      es:'artista',       ex_en:'She is a talented artist.',        ex_es:'Ella es una artista talentosa.' },
        { id:'v219', en:'manager',     es:'gerente',       ex_en:'The manager called a meeting.',    ex_es:'El gerente convocó una reunión.' },
        { id:'v220', en:'accountant',  es:'contador/a',    ex_en:'My father is an accountant.',      ex_es:'Mi padre es contador.' },
      ],
      sentences: [
        { id:'s069', words:['My','sister','is','a','doctor'],      es:'Mi hermana es médica',             extra:['brother','nurse','teacher','I'] },
        { id:'s070', words:['She','is','an','English','teacher'],  es:'Ella es profesora de inglés',      extra:['he','I','Spanish','lawyer'] },
        { id:'s071', words:['The','manager','called','a','meeting'],es:'El gerente convocó una reunión',  extra:['chef','driver','big','had'] },
      ]
    },
    // ── 4‑5 COMPRAS Y DINERO ─────────────────────────────
    { id: '4-5', title: 'Compras', icon: '🛍️',
      vocabulary: [
        { id:'v221', en:'price',       es:'precio',              ex_en:'What is the price of this?',    ex_es:'¿Cuál es el precio de esto?' },
        { id:'v222', en:'cheap',       es:'barato/a',            ex_en:'This store has cheap products.', ex_es:'Esta tienda tiene productos baratos.' },
        { id:'v223', en:'expensive',   es:'caro/a',              ex_en:'This restaurant is too expensive.',ex_es:'Este restaurante es demasiado caro.' },
        { id:'v224', en:'sale',        es:'oferta / liquidación',ex_en:'Everything is on sale today.',   ex_es:'Todo está en oferta hoy.' },
        { id:'v225', en:'discount',    es:'descuento',           ex_en:'I got a 20% discount.',          ex_es:'Obtuve un 20% de descuento.' },
        { id:'v226', en:'pay',         es:'pagar',               ex_en:'I need to pay the bill.',        ex_es:'Necesito pagar la cuenta.' },
        { id:'v227', en:'cash',        es:'efectivo',            ex_en:'Do you pay with cash or card?',  ex_es:'¿Pagás con efectivo o tarjeta?' },
        { id:'v228', en:'credit card', es:'tarjeta de crédito',  ex_en:'I forgot my credit card.',       ex_es:'Olvidé mi tarjeta de crédito.' },
        { id:'v229', en:'receipt',     es:'recibo',              ex_en:'Can I have the receipt please?', ex_es:'¿Me podés dar el recibo?' },
        { id:'v230', en:'change',      es:'vuelto / cambio',     ex_en:'Keep the change!',               ex_es:'¡Guardá el vuelto!' },
      ],
      sentences: [
        { id:'s072', words:['This','restaurant','is','too','expensive'], es:'Este restaurante es demasiado caro', extra:['store','cheap','very','I'] },
        { id:'s073', words:['I','need','to','pay','the','bill'],         es:'Necesito pagar la cuenta',          extra:['she','buy','receipt','discount'] },
        { id:'s074', words:['Everything','is','on','sale','today'],      es:'Todo está en oferta hoy',           extra:['nothing','cheap','expensive','yesterday'] },
      ]
    },
    // ── 4‑6 EMOCIONES ────────────────────────────────────
    { id: '4-6', title: 'Emociones', icon: '😊',
      vocabulary: [
        { id:'v231', en:'excited',     es:'emocionado/a',     ex_en:'I am so excited about the trip!',  ex_es:'¡Estoy tan emocionado por el viaje!' },
        { id:'v232', en:'nervous',     es:'nervioso/a',       ex_en:'She feels nervous before exams.',  ex_es:'Ella se pone nerviosa antes de los exámenes.' },
        { id:'v233', en:'surprised',   es:'sorprendido/a',    ex_en:'He was surprised by the news.',    ex_es:'Él estaba sorprendido por la noticia.' },
        { id:'v234', en:'angry',       es:'enojado/a',        ex_en:'Why are you so angry?',            ex_es:'¿Por qué estás tan enojado?' },
        { id:'v235', en:'scared',      es:'asustado/a',       ex_en:'I am scared of spiders.',          ex_es:'Le tengo miedo a las arañas.' },
        { id:'v236', en:'proud',       es:'orgulloso/a',      ex_en:'I am proud of my children.',       ex_es:'Estoy orgulloso de mis hijos.' },
        { id:'v237', en:'embarrassed', es:'avergonzado/a',    ex_en:'He felt embarrassed after that.',  ex_es:'Él se sintió avergonzado después de eso.' },
        { id:'v238', en:'bored',       es:'aburrido/a',       ex_en:'The students were bored in class.',ex_es:'Los estudiantes estaban aburridos en clase.' },
        { id:'v239', en:'frustrated',  es:'frustrado/a',      ex_en:'I feel frustrated when I fail.',   ex_es:'Me siento frustrado cuando fallo.' },
        { id:'v240', en:'relieved',    es:'aliviado/a',       ex_en:'I felt relieved after the exam.',  ex_es:'Me sentí aliviado después del examen.' },
      ],
      sentences: [
        { id:'s075', words:['I','am','so','excited','about','the','trip'], es:'Estoy tan emocionado por el viaje', extra:['she','nervous','scared','my'] },
        { id:'s076', words:['She','feels','nervous','before','exams'],     es:'Ella se pone nerviosa antes de los exámenes', extra:['he','proud','after','class'] },
        { id:'s077', words:['I','am','proud','of','my','children'],        es:'Estoy orgulloso de mis hijos',      extra:['she','scared','their','family'] },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════
// NIVEL 5 – FLUIDO  (A2+)
// ══════════════════════════════════════════════════════════
{
  id: 5, title: 'Fluido', subtitle: 'Futuro, condicionales y más',
  cefr: 'A2+', icon: '🚀',
  color: '#ff4b4b', colorDark: '#cc2c2c', colorLight: '#ffd9d9',
  lessons: [
    // ── 5‑1 FUTURO CON "WILL" ────────────────────────────
    { id: '5-1', title: 'Futuro con "will"', icon: '🔮',
      vocabulary: [
        { id:'v241', en:'will',      es:'va a (futuro)',        ex_en:'I will call you tomorrow.',        ex_es:'Te llamaré mañana.' },
        { id:'v242', en:"won't",     es:'no va a (will not)',   ex_en:"She won't be there.",              ex_es:'Ella no va a estar.' },
        { id:'v243', en:"I'll",      es:'voy a (I will)',       ex_en:"I'll help you with that.",         ex_es:'Te voy a ayudar con eso.' },
        { id:'v244', en:"you'll",    es:'vas a (you will)',     ex_en:"You'll love this movie.",          ex_es:'Te va a encantar esta película.' },
        { id:'v245', en:"they'll",   es:'van a (they will)',    ex_en:"They'll arrive at six.",           ex_es:'Van a llegar a las seis.' },
        { id:'v246', en:'probably',  es:'probablemente',        ex_en:'It will probably rain today.',     ex_es:'Probablemente va a llover hoy.' },
        { id:'v247', en:'definitely',es:'definitivamente',      ex_en:'I will definitely be there.',     ex_es:'Definitivamente voy a estar.' },
        { id:'v248', en:'promise',   es:'promesa / prometido',  ex_en:'I promise I will call you.',      ex_es:'Te prometo que te voy a llamar.' },
        { id:'v249', en:'soon',      es:'pronto',               ex_en:'The bus will arrive soon.',        ex_es:'El colectivo llegará pronto.' },
        { id:'v250', en:'someday',   es:'algún día',            ex_en:'Someday I will travel the world.', ex_es:'Algún día voy a viajar por el mundo.' },
      ],
      sentences: [
        { id:'s078', words:['I','will','call','you','tomorrow'],           es:'Te llamaré mañana',                  extra:['she','see','today','maybe'] },
        { id:'s079', words:['She','will','probably','be','late'],          es:'Ella probablemente va a llegar tarde',extra:['he','definitely','soon','come'] },
        { id:'s080', words:['Someday','I','will','travel','the','world'],  es:'Algún día voy a viajar por el mundo',extra:['today','she','visit','city'] },
      ]
    },
    // ── 5‑2 FUTURO "GOING TO" ────────────────────────────
    { id: '5-2', title: 'Futuro "going to"', icon: '🎯',
      vocabulary: [
        { id:'v251', en:'going to',   es:'va a (intención futura)', ex_en:'I am going to study tonight.',   ex_es:'Voy a estudiar esta noche.' },
        { id:'v252', en:'plan',       es:'planear / plan',          ex_en:'I plan to visit my family.',     ex_es:'Planeo visitar a mi familia.' },
        { id:'v253', en:'intend',     es:'tener intención de',      ex_en:'I intend to learn English.',     ex_es:'Tengo la intención de aprender inglés.' },
        { id:'v254', en:'arrange',    es:'organizar / acordar',     ex_en:'We arranged to meet at noon.',   ex_es:'Acordamos encontrarnos al mediodía.' },
        { id:'v255', en:'about to',   es:'a punto de',              ex_en:'I am about to leave.',           ex_es:'Estoy a punto de irme.' },
        { id:'v256', en:'next week',  es:'la próxima semana',       ex_en:'I have a meeting next week.',    ex_es:'Tengo una reunión la próxima semana.' },
        { id:'v257', en:'next year',  es:'el próximo año',          ex_en:'We are going to move next year.',ex_es:'Nos vamos a mudar el próximo año.' },
        { id:'v258', en:'decide',     es:'decidir',                 ex_en:'I have decided to quit.',        ex_es:'Decidí renunciar.' },
        { id:'v259', en:'goal',       es:'meta / objetivo',         ex_en:'My goal is to speak English.',   ex_es:'Mi meta es hablar inglés.' },
        { id:'v260', en:'prepare',    es:'preparar',                ex_en:'I need to prepare for the meeting.',ex_es:'Necesito prepararme para la reunión.' },
      ],
      sentences: [
        { id:'s081', words:['I','am','going','to','study','tonight'],     es:'Voy a estudiar esta noche',      extra:['she','will','tomorrow','work'] },
        { id:'s082', words:['We','are','going','to','move','next','year'],es:'Nos vamos a mudar el próximo año',extra:['I','travel','this','week'] },
        { id:'s083', words:['My','goal','is','to','speak','English'],     es:'Mi meta es hablar inglés',       extra:['plan','learn','Spanish','I'] },
      ]
    },
    // ── 5‑3 CONDICIONALES ────────────────────────────────
    { id: '5-3', title: 'Condicionales', icon: '🤔',
      vocabulary: [
        { id:'v261', en:'if',         es:'si (condicional)',         ex_en:'If it rains, I will stay home.',   ex_es:'Si llueve, me quedo en casa.' },
        { id:'v262', en:'would',      es:'condicional (haría)',      ex_en:'I would travel if I had money.',   ex_es:'Viajaría si tuviera dinero.' },
        { id:'v263', en:'could',      es:'podría',                   ex_en:'You could call me anytime.',       ex_es:'Podés llamarme en cualquier momento.' },
        { id:'v264', en:'should',     es:'debería',                  ex_en:'You should see a doctor.',         ex_es:'Deberías ver a un médico.' },
        { id:'v265', en:'might',      es:'podría / tal vez',         ex_en:'It might rain later.',             ex_es:'Podría llover más tarde.' },
        { id:'v266', en:'unless',     es:'a menos que',              ex_en:'I will go unless it rains.',       ex_es:'Iré a menos que llueva.' },
        { id:'v267', en:'as long as', es:'siempre que',              ex_en:'I will help you as long as you try.',ex_es:'Te ayudaré siempre que lo intentes.' },
        { id:'v268', en:'in case',    es:'en caso de que',           ex_en:'Take an umbrella in case it rains.',ex_es:'Llevá un paraguas en caso de que llueva.' },
        { id:'v269', en:'provided',   es:'a condición de que',       ex_en:'I will do it provided you help.',  ex_es:'Lo haré a condición de que me ayudes.' },
        { id:'v270', en:'otherwise',  es:'de lo contrario / si no',  ex_en:'Study hard, otherwise you will fail.',ex_es:'Estudia duro, de lo contrario vas a reprobar.' },
      ],
      sentences: [
        { id:'s084', words:['If','it','rains','I','will','stay','home'],  es:'Si llueve me quedo en casa',  extra:['unless','would','tomorrow','go'] },
        { id:'s085', words:['You','should','see','a','doctor'],           es:'Deberías ver a un médico',    extra:['could','might','I','lawyer'] },
        { id:'s086', words:['Take','an','umbrella','in','case','it','rains'], es:'Llevá un paraguas en caso de que llueva', extra:['jacket','if','unless','cold'] },
      ]
    },
    // ── 5‑4 COMPARATIVOS Y SUPERLATIVOS ──────────────────
    { id: '5-4', title: 'Comparativos', icon: '⚖️',
      vocabulary: [
        { id:'v271', en:'bigger',   es:'más grande',    ex_en:'This house is bigger than mine.',    ex_es:'Esta casa es más grande que la mía.' },
        { id:'v272', en:'smaller',  es:'más pequeño',   ex_en:'My car is smaller than yours.',      ex_es:'Mi auto es más pequeño que el tuyo.' },
        { id:'v273', en:'better',   es:'mejor',         ex_en:'This coffee is better than that.',   ex_es:'Este café es mejor que ese.' },
        { id:'v274', en:'worse',    es:'peor',          ex_en:'The weather is worse today.',         ex_es:'El tiempo está peor hoy.' },
        { id:'v275', en:'faster',   es:'más rápido',    ex_en:'She runs faster than me.',            ex_es:'Ella corre más rápido que yo.' },
        { id:'v276', en:'more',     es:'más',           ex_en:'I need more time.',                   ex_es:'Necesito más tiempo.' },
        { id:'v277', en:'less',     es:'menos',         ex_en:'I want less sugar, please.',          ex_es:'Quiero menos azúcar, por favor.' },
        { id:'v278', en:'the best', es:'el / la mejor', ex_en:'This is the best pizza in town.',    ex_es:'Esta es la mejor pizza de la ciudad.' },
        { id:'v279', en:'the worst',es:'el / la peor',  ex_en:'That was the worst movie ever.',     ex_es:'Esa fue la peor película que vi.' },
        { id:'v280', en:'as...as',  es:'tan...como',    ex_en:'She is as tall as her brother.',      ex_es:'Ella es tan alta como su hermano.' },
      ],
      sentences: [
        { id:'s087', words:['This','house','is','bigger','than','mine'],   es:'Esta casa es más grande que la mía',  extra:['smaller','better','she','car'] },
        { id:'s088', words:['This','is','the','best','pizza','in','town'], es:'Esta es la mejor pizza de la ciudad', extra:['worst','biggest','I','restaurant'] },
        { id:'s089', words:['She','runs','faster','than','me'],            es:'Ella corre más rápido que yo',        extra:['he','slower','walks','better'] },
      ]
    },
    // ── 5‑5 PHRASAL VERBS BÁSICOS ────────────────────────
    { id: '5-5', title: 'Phrasal verbs', icon: '🔧',
      vocabulary: [
        { id:'v281', en:'get up',   es:'levantarse',             ex_en:'I get up at seven every morning.',  ex_es:'Me levanto a las siete todas las mañanas.' },
        { id:'v282', en:'sit down', es:'sentarse',               ex_en:'Please sit down.',                  ex_es:'Por favor sentate.' },
        { id:'v283', en:'turn on',  es:'encender / prender',     ex_en:'Turn on the lights, please.',       ex_es:'Prendé las luces, por favor.' },
        { id:'v284', en:'turn off', es:'apagar',                 ex_en:'Turn off the TV before sleeping.',  ex_es:'Apagá la tele antes de dormir.' },
        { id:'v285', en:'pick up',  es:'recoger / levantar',     ex_en:'Can you pick up the kids?',         ex_es:'¿Podés buscar a los chicos?' },
        { id:'v286', en:'put down', es:'dejar / soltar',         ex_en:'Put down your phone!',              ex_es:'¡Dejá el teléfono!' },
        { id:'v287', en:'give up',  es:'rendirse / dejar',       ex_en:'Never give up on your dreams.',     ex_es:'Nunca te rindas con tus sueños.' },
        { id:'v288', en:'find out', es:'descubrir / averiguar',  ex_en:'I need to find out the truth.',     ex_es:'Necesito averiguar la verdad.' },
        { id:'v289', en:'look for', es:'buscar',                 ex_en:'I am looking for my keys.',         ex_es:'Estoy buscando mis llaves.' },
        { id:'v290', en:'take off', es:'despegar / quitarse',    ex_en:'The plane takes off at noon.',      ex_es:'El avión despega al mediodía.' },
      ],
      sentences: [
        { id:'s090', words:['I','get','up','at','seven','every','morning'], es:'Me levanto a las siete todas las mañanas', extra:['she','wake','six','always'] },
        { id:'s091', words:['Never','give','up','on','your','dreams'],      es:'Nunca te rindas con tus sueños',          extra:['always','look','find','goals'] },
        { id:'s092', words:['I','am','looking','for','my','keys'],          es:'Estoy buscando mis llaves',               extra:['she','find','phone','wallet'] },
      ]
    },
    // ── 5‑6 CONECTORES ───────────────────────────────────
    { id: '5-6', title: 'Conectores', icon: '🔗',
      vocabulary: [
        { id:'v291', en:'however',          es:'sin embargo',       ex_en:'I like coffee. However, I prefer tea.',      ex_es:'Me gusta el café. Sin embargo, prefiero el té.' },
        { id:'v292', en:'although',         es:'aunque',            ex_en:'Although it was cold, we went out.',         ex_es:'Aunque hacía frío, salimos.' },
        { id:'v293', en:'because',          es:'porque',            ex_en:'I stayed home because it was raining.',      ex_es:'Me quedé en casa porque estaba lloviendo.' },
        { id:'v294', en:'therefore',        es:'por lo tanto',      ex_en:'She studied hard; therefore, she passed.',   ex_es:'Estudió mucho; por lo tanto, aprobó.' },
        { id:'v295', en:'moreover',         es:'además / es más',   ex_en:'The food was good. Moreover, it was cheap.', ex_es:'La comida era buena. Además, era barata.' },
        { id:'v296', en:'furthermore',      es:'asimismo / además', ex_en:'She is smart. Furthermore, she works hard.', ex_es:'Es inteligente. Asimismo, trabaja duro.' },
        { id:'v297', en:'on the other hand',es:'por otro lado',     ex_en:'On the other hand, it could be wrong.',      ex_es:'Por otro lado, podría estar equivocado.' },
        { id:'v298', en:'in addition',      es:'además',            ex_en:'In addition to English, she speaks French.', ex_es:'Además del inglés, ella habla francés.' },
        { id:'v299', en:'for example',      es:'por ejemplo',       ex_en:'I like sports, for example, tennis.',        ex_es:'Me gustan los deportes, por ejemplo, el tenis.' },
        { id:'v300', en:'as a result',      es:'como resultado',    ex_en:'He did not study; as a result, he failed.',  ex_es:'No estudió; como resultado, reprobó.' },
      ],
      sentences: [
        { id:'s093', words:['I','stayed','home','because','it','was','raining'], es:'Me quedé en casa porque llovía',          extra:['she','went','although','cold'] },
        { id:'s094', words:['Although','it','was','cold','we','went','outside'], es:'Aunque hacía frío salimos',               extra:['because','however','hot','stayed'] },
        { id:'s095', words:['She','studied','hard','therefore','she','passed'],  es:'Estudió mucho por lo tanto aprobó',       extra:['however','although','failed','because'] },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════
// NIVEL 6 – INTERMEDIO  (B1)
// ══════════════════════════════════════════════════════════
{
  id: 6, title: 'Intermedio', subtitle: 'Gramática compleja y negocios',
  cefr: 'B1', icon: '💡',
  color: '#ffc800', colorDark: '#cc9e00', colorLight: '#fff8cc',
  lessons: [
    // ── 6‑1 PRESENTE PERFECTO ────────────────────────────
    { id: '6-1', title: 'Presente perfecto', icon: '✅',
      vocabulary: [
        { id:'v301', en:'have been',   es:'he / has estado',   ex_en:'I have been to Paris twice.',        ex_es:'He estado en París dos veces.' },
        { id:'v302', en:'have done',   es:'he / has hecho',    ex_en:'I have done my homework.',           ex_es:'He hecho mi tarea.' },
        { id:'v303', en:'have seen',   es:'he / has visto',    ex_en:'Have you seen this movie?',          ex_es:'¿Has visto esta película?' },
        { id:'v304', en:'have had',    es:'he / ha tenido',    ex_en:'She has had a long day.',            ex_es:'Ella ha tenido un día largo.' },
        { id:'v305', en:'have gone',   es:'ha / han ido',      ex_en:'They have gone to the store.',       ex_es:'Ellos han ido a la tienda.' },
        { id:'v306', en:'have eaten',  es:'he / ha comido',    ex_en:'I have eaten there many times.',     ex_es:'He comido ahí muchas veces.' },
        { id:'v307', en:'have written',es:'he / ha escrito',   ex_en:'She has written three books.',       ex_es:'Ella ha escrito tres libros.' },
        { id:'v308', en:'have spoken', es:'he / ha hablado',   ex_en:'Have you spoken to the manager?',   ex_es:'¿Has hablado con el gerente?' },
        { id:'v309', en:'have read',   es:'he / ha leído',     ex_en:'I have read all his novels.',        ex_es:'He leído todas sus novelas.' },
        { id:'v310', en:'have known',  es:'he / ha conocido',  ex_en:'I have known her for ten years.',    ex_es:'La conozco hace diez años.' },
      ],
      sentences: [
        { id:'s096', words:['I','have','been','to','Paris','twice'],  es:'He estado en París dos veces', extra:['she','gone','London','three'] },
        { id:'s097', words:['She','has','written','three','books'],   es:'Ella ha escrito tres libros',  extra:['he','read','two','I'] },
        { id:'s098', words:['Have','you','seen','this','movie','?'],  es:'¿Has visto esta película?',    extra:['I','read','book','done'] },
      ]
    },
    // ── 6‑2 PASADO CONTINUO ──────────────────────────────
    { id: '6-2', title: 'Pasado continuo', icon: '🎬',
      vocabulary: [
        { id:'v311', en:'was doing',    es:'estaba haciendo',     ex_en:'I was doing my homework at eight.',    ex_es:'A las ocho estaba haciendo mi tarea.' },
        { id:'v312', en:'were playing', es:'estaban jugando',     ex_en:'The kids were playing outside.',       ex_es:'Los chicos estaban jugando afuera.' },
        { id:'v313', en:'while',        es:'mientras',            ex_en:'I fell asleep while watching TV.',     ex_es:'Me quedé dormido mientras miraba la tele.' },
        { id:'v314', en:'when',         es:'cuando',              ex_en:'She called when I was sleeping.',      ex_es:'Ella llamó cuando yo estaba durmiendo.' },
        { id:'v315', en:'at that moment',es:'en ese momento',     ex_en:'At that moment, I understood.',        ex_es:'En ese momento, entendí todo.' },
        { id:'v316', en:'suddenly',     es:'de repente',          ex_en:'Suddenly, the lights went off.',       ex_es:'De repente, se fueron las luces.' },
        { id:'v317', en:'then',         es:'luego / entonces',    ex_en:'First it rained, then it cleared up.', ex_es:'Primero llovió, luego se despejó.' },
        { id:'v318', en:'afterwards',   es:'después / luego',     ex_en:'We ate, and afterwards we walked.',    ex_es:'Comimos, y después salimos a caminar.' },
        { id:'v319', en:'before',       es:'antes',               ex_en:'She had studied before the exam.',     ex_es:'Ella había estudiado antes del examen.' },
        { id:'v320', en:'during',       es:'durante',             ex_en:'I fell asleep during the movie.',      ex_es:'Me quedé dormido durante la película.' },
      ],
      sentences: [
        { id:'s099', words:['I','was','doing','my','homework','at','eight'], es:'A las ocho estaba haciendo mi tarea',     extra:['she','playing','nine','studying'] },
        { id:'s100', words:['She','called','when','I','was','sleeping'],     es:'Ella llamó cuando yo estaba durmiendo',   extra:['he','while','eating','working'] },
        { id:'s101', words:['Suddenly','the','lights','went','off'],         es:'De repente se fueron las luces',          extra:['then','during','when','came'] },
      ]
    },
    // ── 6‑3 VOCABULARIO DE NEGOCIOS ──────────────────────
    { id: '6-3', title: 'Negocios', icon: '🏢',
      vocabulary: [
        { id:'v321', en:'meeting',  es:'reunión',       ex_en:'The meeting starts at ten.',           ex_es:'La reunión empieza a las diez.' },
        { id:'v322', en:'deadline', es:'fecha límite',  ex_en:'The deadline is next Friday.',         ex_es:'El plazo vence el próximo viernes.' },
        { id:'v323', en:'project',  es:'proyecto',      ex_en:'We are working on a big project.',     ex_es:'Estamos trabajando en un proyecto grande.' },
        { id:'v324', en:'client',   es:'cliente',       ex_en:'The client is very demanding.',        ex_es:'El cliente es muy exigente.' },
        { id:'v325', en:'budget',   es:'presupuesto',   ex_en:'We are over budget.',                  ex_es:'Estamos por encima del presupuesto.' },
        { id:'v326', en:'proposal', es:'propuesta',     ex_en:'I prepared a proposal for the client.',ex_es:'Preparé una propuesta para el cliente.' },
        { id:'v327', en:'contract', es:'contrato',      ex_en:'We signed the contract today.',        ex_es:'Firmamos el contrato hoy.' },
        { id:'v328', en:'invoice',  es:'factura',       ex_en:'Please send me the invoice.',          ex_es:'Por favor enviame la factura.' },
        { id:'v329', en:'profit',   es:'ganancia',      ex_en:'Our profit increased this year.',      ex_es:'Nuestras ganancias aumentaron este año.' },
        { id:'v330', en:'strategy', es:'estrategia',    ex_en:'We need a new marketing strategy.',    ex_es:'Necesitamos una nueva estrategia de marketing.' },
      ],
      sentences: [
        { id:'s102', words:['The','meeting','starts','at','ten'],      es:'La reunión empieza a las diez',          extra:['deadline','project','nine','I'] },
        { id:'s103', words:['We','signed','the','contract','today'],   es:'Firmamos el contrato hoy',               extra:['I','invoice','proposal','yesterday'] },
        { id:'s104', words:['Our','profit','increased','this','year'], es:'Nuestras ganancias aumentaron este año', extra:['budget','client','last','decreased'] },
      ]
    },
    // ── 6‑4 PHRASAL VERBS AVANZADOS ──────────────────────
    { id: '6-4', title: 'Phrasal verbs avanzados', icon: '🎓',
      vocabulary: [
        { id:'v331', en:'carry out',   es:'llevar a cabo',     ex_en:'We need to carry out the plan.',     ex_es:'Necesitamos llevar a cabo el plan.' },
        { id:'v332', en:'come up with',es:'idear / proponer',  ex_en:'She came up with a great idea.',     ex_es:'Ella propuso una gran idea.' },
        { id:'v333', en:'deal with',   es:'ocuparse de',       ex_en:'I will deal with the problem.',      ex_es:'Me voy a ocupar del problema.' },
        { id:'v334', en:'look into',   es:'investigar',        ex_en:'We need to look into this issue.',   ex_es:'Necesitamos investigar este tema.' },
        { id:'v335', en:'put off',     es:'posponer',          ex_en:'Do not put off your work.',          ex_es:'No postergues tu trabajo.' },
        { id:'v336', en:'set up',      es:'establecer / crear',ex_en:'They set up a new company.',         ex_es:'Ellos crearon una nueva empresa.' },
        { id:'v337', en:'take over',   es:'hacerse cargo de',  ex_en:'She will take over the project.',    ex_es:'Ella se hará cargo del proyecto.' },
        { id:'v338', en:'work out',    es:'resolver / funcionar',ex_en:'We need to work out a solution.',  ex_es:'Necesitamos resolver una solución.' },
        { id:'v339', en:'bring up',    es:'mencionar',         ex_en:'He brought up an interesting point.',ex_es:'Él mencionó un punto interesante.' },
        { id:'v340', en:'make up',     es:'inventar',          ex_en:'She made up an excuse.',             ex_es:'Ella inventó una excusa.' },
      ],
      sentences: [
        { id:'s105', words:['She','came','up','with','a','great','idea'],  es:'Ella propuso una gran idea',          extra:['he','put','deal','I'] },
        { id:'s106', words:['We','need','to','carry','out','the','plan'],  es:'Necesitamos llevar a cabo el plan',   extra:['I','look','set','work'] },
        { id:'s107', words:['They','set','up','a','new','company'],        es:'Ellos crearon una nueva empresa',     extra:['she','took','put','made'] },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════
// NIVELES 7–8  (próximamente)
// ══════════════════════════════════════════════════════════
{
  id:7, title:'Avanzado', subtitle:'Gramática compleja y expresiones', cefr:'B1+',
  icon:'🏆', color:'#9e9e9e', colorDark:'#666', colorLight:'#eee',
  comingSoon: true, lessons:[]
},
{
  id:8, title:'Series', subtitle:'Inglés natural y slang', cefr:'B2',
  icon:'🎬', color:'#ce82ff', colorDark:'#8b2be2', colorLight:'#f3e0ff',
  comingSoon: true, lessons:[]
},

]};

// ── Helpers ───────────────────────────────────────────────

function getLessonById(id) {
  for (const lv of CURRICULUM.levels)
    for (const ls of lv.lessons)
      if (ls.id === id) return ls;
  return null;
}

function getLevelOfLesson(lessonId) {
  for (const lv of CURRICULUM.levels)
    for (const ls of lv.lessons)
      if (ls.id === lessonId) return lv;
  return null;
}

function getAllVocab() {
  const all = [];
  for (const lv of CURRICULUM.levels)
    for (const ls of lv.lessons)
      all.push(...ls.vocabulary);
  return all;
}

function getVocabById(id) {
  return getAllVocab().find(v => v.id === id);
}
