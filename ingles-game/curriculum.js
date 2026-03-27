'use strict';
// ─────────────────────────────────────────────────────────
//  CURRICULUM  –  3 niveles, 12 lecciones, 120 palabras
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
    {
      id: '1-1', title: 'Saludos', icon: '👋',
      vocabulary: [
        { id:'v001', en:'hello',           es:'hola',          ex_en:'Hello! How are you?',                      ex_es:'¡Hola! ¿Cómo estás?' },
        { id:'v002', en:'goodbye',         es:'adiós',         ex_en:'Goodbye! See you tomorrow.',               ex_es:'¡Adiós! Hasta mañana.' },
        { id:'v003', en:'good morning',    es:'buenos días',   ex_en:'Good morning everyone!',                   ex_es:'¡Buenos días a todos!' },
        { id:'v004', en:'good afternoon',  es:'buenas tardes', ex_en:'Good afternoon, how can I help?',          ex_es:'Buenas tardes, ¿en qué puedo ayudar?' },
        { id:'v005', en:'good night',      es:'buenas noches', ex_en:'Good night! Sleep well.',                  ex_es:'¡Buenas noches! Que descanses.' },
        { id:'v006', en:'please',          es:'por favor',     ex_en:'Can I have water, please?',                ex_es:'¿Me da agua, por favor?' },
        { id:'v007', en:'thank you',       es:'gracias',       ex_en:'Thank you very much!',                     ex_es:'¡Muchas gracias!' },
        { id:'v008', en:"you're welcome",  es:'de nada',       ex_en:"You're welcome!",                          ex_es:'¡De nada!' },
        { id:'v009', en:'sorry',           es:'lo siento',     ex_en:"I'm sorry, I made a mistake.",             ex_es:'Lo siento, cometí un error.' },
        { id:'v010', en:'excuse me',       es:'disculpe',      ex_en:'Excuse me, where is the bathroom?',        ex_es:'Disculpe, ¿dónde está el baño?' },
      ],
      sentences: [
        { id:'s001', words:['Nice','to','meet','you'],    es:'Mucho gusto',      extra:['Hello','am','I','good'] },
        { id:'s002', words:['Thank','you','very','much'], es:'Muchas gracias',   extra:['please','sorry','for','bye'] },
        { id:'s003', words:['See','you','tomorrow'],      es:'Hasta mañana',     extra:['Good','night','bye','me'] },
      ]
    },
    // ── 1‑2 YO Y TÚ ─────────────────────────────────────
    {
      id: '1-2', title: 'Yo y tú', icon: '🙋',
      vocabulary: [
        { id:'v011', en:'I',       es:'yo',           ex_en:'I am a student.',                    ex_es:'Yo soy estudiante.' },
        { id:'v012', en:'you',     es:'tú / usted',   ex_en:'You are very kind.',                 ex_es:'Tú eres muy amable.' },
        { id:'v013', en:'he',      es:'él',           ex_en:'He is my brother.',                  ex_es:'Él es mi hermano.' },
        { id:'v014', en:'she',     es:'ella',         ex_en:'She is my sister.',                  ex_es:'Ella es mi hermana.' },
        { id:'v015', en:'we',      es:'nosotros',     ex_en:'We are friends.',                    ex_es:'Nosotros somos amigos.' },
        { id:'v016', en:'they',    es:'ellos / ellas',ex_en:'They are from Argentina.',            ex_es:'Ellos son de Argentina.' },
        { id:'v017', en:'my',      es:'mi / mis',     ex_en:'My name is Carlos.',                 ex_es:'Mi nombre es Carlos.' },
        { id:'v018', en:'your',    es:'tu / tus',     ex_en:'What is your name?',                 ex_es:'¿Cuál es tu nombre?' },
        { id:'v019', en:'name',    es:'nombre',       ex_en:'My name is Maria.',                  ex_es:'Mi nombre es María.' },
        { id:'v020', en:'am',      es:'soy / estoy',  ex_en:'I am happy today.',                  ex_es:'Estoy feliz hoy.' },
      ],
      sentences: [
        { id:'s004', words:['My','name','is','Carlos'],        es:'Mi nombre es Carlos',      extra:['I','am','your','the'] },
        { id:'s005', words:['I','am','from','Argentina'],      es:'Soy de Argentina',         extra:['you','she','my','is'] },
        { id:'s006', words:['What','is','your','name','?'],    es:'¿Cuál es tu nombre?',      extra:['How','are','my','I'] },
        { id:'s007', words:['Nice','to','meet','you'],         es:'Mucho gusto',              extra:['am','I','is','from'] },
      ]
    },
    // ── 1‑3 NÚMEROS 1–10 ─────────────────────────────────
    {
      id: '1-3', title: 'Números 1–10', icon: '🔢',
      vocabulary: [
        { id:'v021', en:'one',   es:'uno',   ex_en:'I have one dog.',          ex_es:'Tengo un perro.' },
        { id:'v022', en:'two',   es:'dos',   ex_en:'I have two cats.',         ex_es:'Tengo dos gatos.' },
        { id:'v023', en:'three', es:'tres',  ex_en:'There are three people.',  ex_es:'Hay tres personas.' },
        { id:'v024', en:'four',  es:'cuatro',ex_en:'I need four chairs.',      ex_es:'Necesito cuatro sillas.' },
        { id:'v025', en:'five',  es:'cinco', ex_en:'She is five years old.',   ex_es:'Ella tiene cinco años.' },
        { id:'v026', en:'six',   es:'seis',  ex_en:'The store opens at six.',  ex_es:'La tienda abre a las seis.' },
        { id:'v027', en:'seven', es:'siete', ex_en:'I wake up at seven.',      ex_es:'Me levanto a las siete.' },
        { id:'v028', en:'eight', es:'ocho',  ex_en:'I sleep eight hours.',     ex_es:'Duermo ocho horas.' },
        { id:'v029', en:'nine',  es:'nueve', ex_en:'There are nine players.',  ex_es:'Hay nueve jugadores.' },
        { id:'v030', en:'ten',   es:'diez',  ex_en:'There are ten people.',    ex_es:'Hay diez personas.' },
      ],
      sentences: [
        { id:'s008', words:['I','have','two','cats'],           es:'Tengo dos gatos',              extra:['she','has','three','dogs'] },
        { id:'s009', words:['There','are','ten','people'],      es:'Hay diez personas',            extra:['is','five','eight','a'] },
        { id:'s010', words:['She','is','five','years','old'],   es:'Ella tiene cinco años',        extra:['he','am','two','four'] },
      ]
    },
    // ── 1‑4 COLORES ──────────────────────────────────────
    {
      id: '1-4', title: 'Colores', icon: '🎨',
      vocabulary: [
        { id:'v031', en:'red',    es:'rojo',     ex_en:'The apple is red.',        ex_es:'La manzana es roja.' },
        { id:'v032', en:'blue',   es:'azul',     ex_en:'The sky is blue.',         ex_es:'El cielo es azul.' },
        { id:'v033', en:'green',  es:'verde',    ex_en:'The grass is green.',      ex_es:'El pasto es verde.' },
        { id:'v034', en:'yellow', es:'amarillo', ex_en:'The banana is yellow.',    ex_es:'La banana es amarilla.' },
        { id:'v035', en:'white',  es:'blanco',   ex_en:'The snow is white.',       ex_es:'La nieve es blanca.' },
        { id:'v036', en:'black',  es:'negro',    ex_en:'The night is black.',      ex_es:'La noche es negra.' },
        { id:'v037', en:'big',    es:'grande',   ex_en:'It is a big house.',       ex_es:'Es una casa grande.' },
        { id:'v038', en:'small',  es:'pequeño',  ex_en:'It is a small dog.',       ex_es:'Es un perro pequeño.' },
        { id:'v039', en:'good',   es:'bueno',    ex_en:'This is very good!',       ex_es:'¡Esto es muy bueno!' },
        { id:'v040', en:'bad',    es:'malo',     ex_en:'This is very bad.',        ex_es:'Esto es muy malo.' },
      ],
      sentences: [
        { id:'s011', words:['The','sky','is','blue'],         es:'El cielo es azul',          extra:['red','green','small','a'] },
        { id:'s012', words:['I','have','a','big','dog'],      es:'Tengo un perro grande',     extra:['small','cat','she','is'] },
        { id:'s013', words:['That','is','very','good'],       es:'Eso es muy bueno',          extra:['bad','small','I','am'] },
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
    {
      id: '2-1', title: 'Verbos esenciales', icon: '⚡',
      vocabulary: [
        { id:'v041', en:'eat',   es:'comer',      ex_en:'I eat rice every day.',          ex_es:'Como arroz todos los días.' },
        { id:'v042', en:'drink', es:'beber',       ex_en:'I drink water in the morning.',  ex_es:'Bebo agua por la mañana.' },
        { id:'v043', en:'sleep', es:'dormir',      ex_en:'I sleep eight hours.',           ex_es:'Duermo ocho horas.' },
        { id:'v044', en:'work',  es:'trabajar',    ex_en:'I work in an office.',           ex_es:'Trabajo en una oficina.' },
        { id:'v045', en:'live',  es:'vivir',       ex_en:'I live in Buenos Aires.',        ex_es:'Vivo en Buenos Aires.' },
        { id:'v046', en:'go',    es:'ir',          ex_en:'I go to school every day.',      ex_es:'Voy a la escuela todos los días.' },
        { id:'v047', en:'come',  es:'venir',       ex_en:'She comes from Spain.',          ex_es:'Ella viene de España.' },
        { id:'v048', en:'want',  es:'querer',      ex_en:'I want a coffee, please.',       ex_es:'Quiero un café, por favor.' },
        { id:'v049', en:'need',  es:'necesitar',   ex_en:'I need help.',                   ex_es:'Necesito ayuda.' },
        { id:'v050', en:'have',  es:'tener',       ex_en:'I have two brothers.',           ex_es:'Tengo dos hermanos.' },
      ],
      sentences: [
        { id:'s014', words:['I','eat','breakfast','every','morning'],    es:'Como el desayuno cada mañana',   extra:['she','drink','night','at'] },
        { id:'s015', words:['She','drinks','coffee','with','milk'],      es:'Ella toma café con leche',       extra:['I','eat','water','and'] },
        { id:'s016', words:['We','live','in','Buenos','Aires'],          es:'Vivimos en Buenos Aires',        extra:['I','go','from','they'] },
        { id:'s017', words:['I','want','to','sleep'],                    es:'Quiero dormir',                  extra:['need','eat','she','go'] },
      ]
    },
    // ── 2‑2 LA CASA ──────────────────────────────────────
    {
      id: '2-2', title: 'La casa', icon: '🏠',
      vocabulary: [
        { id:'v051', en:'house',    es:'casa',          ex_en:'I live in a big house.',         ex_es:'Vivo en una casa grande.' },
        { id:'v052', en:'room',     es:'habitación',    ex_en:'My house has four rooms.',       ex_es:'Mi casa tiene cuatro habitaciones.' },
        { id:'v053', en:'kitchen',  es:'cocina',        ex_en:'I cook in the kitchen.',         ex_es:'Cocino en la cocina.' },
        { id:'v054', en:'bathroom', es:'baño',          ex_en:'The bathroom is clean.',         ex_es:'El baño está limpio.' },
        { id:'v055', en:'bedroom',  es:'dormitorio',    ex_en:'My bedroom is small.',           ex_es:'Mi dormitorio es pequeño.' },
        { id:'v056', en:'door',     es:'puerta',        ex_en:'Please close the door.',         ex_es:'Por favor cierra la puerta.' },
        { id:'v057', en:'window',   es:'ventana',       ex_en:'Open the window, please.',       ex_es:'Abre la ventana, por favor.' },
        { id:'v058', en:'chair',    es:'silla',         ex_en:'Sit on the chair.',              ex_es:'Siéntate en la silla.' },
        { id:'v059', en:'table',    es:'mesa',          ex_en:'The food is on the table.',      ex_es:'La comida está en la mesa.' },
        { id:'v060', en:'bed',      es:'cama',          ex_en:'I sleep in my bed.',             ex_es:'Duermo en mi cama.' },
      ],
      sentences: [
        { id:'s018', words:['The','kitchen','is','very','clean'],         es:'La cocina está muy limpia',       extra:['big','small','room','I'] },
        { id:'s019', words:['My','bedroom','has','a','big','window'],     es:'Mi dormitorio tiene una ventana grande', extra:['door','table','small','is'] },
        { id:'s020', words:['Close','the','door','please'],               es:'Por favor cierra la puerta',     extra:['Open','window','the','is'] },
      ]
    },
    // ── 2‑3 COMIDA Y BEBIDA ──────────────────────────────
    {
      id: '2-3', title: 'Comida y bebida', icon: '🍽️',
      vocabulary: [
        { id:'v061', en:'water',     es:'agua',      ex_en:'I drink water every day.',      ex_es:'Bebo agua todos los días.' },
        { id:'v062', en:'coffee',    es:'café',      ex_en:'I drink coffee in the morning.',ex_es:'Tomo café por la mañana.' },
        { id:'v063', en:'bread',     es:'pan',       ex_en:'I eat bread for breakfast.',    ex_es:'Como pan en el desayuno.' },
        { id:'v064', en:'meat',      es:'carne',     ex_en:"I don't eat meat.",             ex_es:'No como carne.' },
        { id:'v065', en:'fruit',     es:'fruta',     ex_en:'I eat fruit for lunch.',        ex_es:'Como fruta en el almuerzo.' },
        { id:'v066', en:'vegetable', es:'verdura',   ex_en:'Vegetables are very healthy.',  ex_es:'Las verduras son muy saludables.' },
        { id:'v067', en:'milk',      es:'leche',     ex_en:'I drink milk at night.',        ex_es:'Tomo leche por la noche.' },
        { id:'v068', en:'egg',       es:'huevo',     ex_en:'I eat two eggs for breakfast.', ex_es:'Como dos huevos en el desayuno.' },
        { id:'v069', en:'rice',      es:'arroz',     ex_en:'I eat rice with chicken.',      ex_es:'Como arroz con pollo.' },
        { id:'v070', en:'chicken',   es:'pollo',     ex_en:'I like chicken with rice.',     ex_es:'Me gusta el pollo con arroz.' },
      ],
      sentences: [
        { id:'s021', words:['I','eat','rice','and','chicken'],         es:'Como arroz y pollo',             extra:['drink','she','with','bread'] },
        { id:'s022', words:['She','drinks','milk','every','night'],    es:'Ella toma leche cada noche',     extra:['I','eat','coffee','morning'] },
        { id:'s023', words:['Do','you','want','some','coffee','?'],    es:'¿Querés un café?',               extra:['I','she','eat','water'] },
      ]
    },
    // ── 2‑4 PRESENTE SIMPLE ──────────────────────────────
    {
      id: '2-4', title: 'Presente simple', icon: '📝',
      vocabulary: [
        { id:'v071', en:'I am',      es:'yo soy / estoy',    ex_en:'I am a student.',            ex_es:'Soy estudiante.' },
        { id:'v072', en:'you are',   es:'tú eres / estás',   ex_en:'You are very smart.',        ex_es:'Eres muy inteligente.' },
        { id:'v073', en:'he is',     es:'él es / está',      ex_en:'He is my teacher.',          ex_es:'Él es mi profesor.' },
        { id:'v074', en:'she is',    es:'ella es / está',    ex_en:'She is beautiful.',          ex_es:'Ella es hermosa.' },
        { id:'v075', en:'we are',    es:'nosotros somos/estamos', ex_en:'We are happy.',         ex_es:'Estamos contentos.' },
        { id:'v076', en:'they are',  es:'ellos son / están', ex_en:'They are from Spain.',       ex_es:'Ellos son de España.' },
        { id:'v077', en:"I don't",   es:'yo no',             ex_en:"I don't eat meat.",          ex_es:'Yo no como carne.' },
        { id:'v078', en:'I can',     es:'yo puedo',          ex_en:'I can speak English.',       ex_es:'Puedo hablar inglés.' },
        { id:'v079', en:"I can't",   es:'yo no puedo',       ex_en:"I can't swim.",              ex_es:'No puedo nadar.' },
        { id:'v080', en:'there is',  es:'hay (singular)',    ex_en:'There is a cat on the table.',ex_es:'Hay un gato en la mesa.' },
      ],
      sentences: [
        { id:'s024', words:['I','am','a','student','from','Argentina'], es:'Soy estudiante de Argentina',   extra:['you','is','she','we'] },
        { id:'s025', words:['She','is','a','good','teacher'],           es:'Ella es una buena profesora',   extra:['he','am','I','are'] },
        { id:'s026', words:['I','can','speak','English'],               es:'Puedo hablar inglés',           extra:["can't",'she','is','we'] },
        { id:'s027', words:['There','is','a','cat','on','the','table'], es:'Hay un gato en la mesa',        extra:['are','I','have','chair'] },
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
    {
      id: '3-1', title: 'Preguntas', icon: '❓',
      vocabulary: [
        { id:'v081', en:'what',      es:'qué',           ex_en:'What is your name?',             ex_es:'¿Cuál es tu nombre?' },
        { id:'v082', en:'who',       es:'quién',         ex_en:'Who is that person?',             ex_es:'¿Quién es esa persona?' },
        { id:'v083', en:'where',     es:'dónde',         ex_en:'Where do you live?',              ex_es:'¿Dónde vivís?' },
        { id:'v084', en:'when',      es:'cuándo',        ex_en:'When do you work?',               ex_es:'¿Cuándo trabajás?' },
        { id:'v085', en:'why',       es:'por qué',       ex_en:'Why are you sad?',                ex_es:'¿Por qué estás triste?' },
        { id:'v086', en:'how',       es:'cómo',          ex_en:'How are you?',                    ex_es:'¿Cómo estás?' },
        { id:'v087', en:'which',     es:'cuál',          ex_en:'Which is your house?',            ex_es:'¿Cuál es tu casa?' },
        { id:'v088', en:'how much',  es:'cuánto',        ex_en:'How much does it cost?',          ex_es:'¿Cuánto cuesta?' },
        { id:'v089', en:'how many',  es:'cuántos',       ex_en:'How many brothers do you have?',  ex_es:'¿Cuántos hermanos tenés?' },
        { id:'v090', en:'how old',   es:'qué edad / cuántos años', ex_en:'How old are you?',      ex_es:'¿Cuántos años tenés?' },
      ],
      sentences: [
        { id:'s028', words:['What','is','your','name','?'],      es:'¿Cuál es tu nombre?',        extra:['Who','How','are','I'] },
        { id:'s029', words:['Where','do','you','live','?'],      es:'¿Dónde vivís?',              extra:['When','Why','I','am'] },
        { id:'s030', words:['How','old','are','you','?'],        es:'¿Cuántos años tenés?',       extra:['What','much','is','I'] },
        { id:'s031', words:['Why','are','you','happy','?'],      es:'¿Por qué estás contento?',   extra:['How','What','I','am'] },
      ]
    },
    // ── 3‑2 EL TIEMPO ────────────────────────────────────
    {
      id: '3-2', title: 'El tiempo', icon: '⏰',
      vocabulary: [
        { id:'v091', en:'today',      es:'hoy',           ex_en:'I work today.',              ex_es:'Hoy trabajo.' },
        { id:'v092', en:'yesterday',  es:'ayer',          ex_en:'I ate pizza yesterday.',     ex_es:'Ayer comí pizza.' },
        { id:'v093', en:'tomorrow',   es:'mañana',        ex_en:'I will travel tomorrow.',    ex_es:'Mañana voy a viajar.' },
        { id:'v094', en:'now',        es:'ahora',         ex_en:'I am eating now.',           ex_es:'Ahora estoy comiendo.' },
        { id:'v095', en:'later',      es:'después / más tarde', ex_en:'I will call you later.', ex_es:'Te llamo más tarde.' },
        { id:'v096', en:'always',     es:'siempre',       ex_en:'I always eat breakfast.',    ex_es:'Siempre desayuno.' },
        { id:'v097', en:'never',      es:'nunca',         ex_en:'I never drink alcohol.',     ex_es:'Nunca tomo alcohol.' },
        { id:'v098', en:'sometimes',  es:'a veces',       ex_en:'I sometimes watch TV.',      ex_es:'A veces veo televisión.' },
        { id:'v099', en:'every day',  es:'todos los días',ex_en:'I exercise every day.',      ex_es:'Hago ejercicio todos los días.' },
        { id:'v100', en:'week',       es:'semana',        ex_en:'I work five days a week.',   ex_es:'Trabajo cinco días a la semana.' },
      ],
      sentences: [
        { id:'s032', words:['I','always','eat','breakfast','in','the','morning'], es:'Siempre desayuno por la mañana', extra:['never','she','at','is'] },
        { id:'s033', words:['She','never','eats','meat'],                         es:'Ella nunca come carne',          extra:['always','I','drinks','do'] },
        { id:'s034', words:['I','will','call','you','tomorrow'],                  es:'Te llamo mañana',                extra:['today','she','eat','now'] },
      ]
    },
    // ── 3‑3 DESCRIBIR PERSONAS ───────────────────────────
    {
      id: '3-3', title: 'Describir personas', icon: '🧑',
      vocabulary: [
        { id:'v101', en:'tall',         es:'alto',          ex_en:'He is very tall.',           ex_es:'Él es muy alto.' },
        { id:'v102', en:'short',        es:'bajo',          ex_en:'She is short.',              ex_es:'Ella es baja.' },
        { id:'v103', en:'young',        es:'joven',         ex_en:'He is young and strong.',    ex_es:'Él es joven y fuerte.' },
        { id:'v104', en:'old',          es:'viejo / mayor', ex_en:'My grandfather is old.',     ex_es:'Mi abuelo es mayor.' },
        { id:'v105', en:'happy',        es:'feliz',         ex_en:'I am very happy today.',     ex_es:'Hoy estoy muy feliz.' },
        { id:'v106', en:'sad',          es:'triste',        ex_en:'Why are you sad?',           ex_es:'¿Por qué estás triste?' },
        { id:'v107', en:'tired',        es:'cansado',       ex_en:'I am very tired.',           ex_es:'Estoy muy cansado.' },
        { id:'v108', en:'hungry',       es:'hambriento',    ex_en:"I'm hungry, let's eat.",     ex_es:'Tengo hambre, vamos a comer.' },
        { id:'v109', en:'kind',         es:'amable',        ex_en:'She is very kind.',          ex_es:'Ella es muy amable.' },
        { id:'v110', en:'smart',        es:'inteligente',   ex_en:'You are very smart.',        ex_es:'Sos muy inteligente.' },
      ],
      sentences: [
        { id:'s035', words:['She','is','tall','and','beautiful'],     es:'Ella es alta y hermosa',      extra:['He','am','short','I'] },
        { id:'s036', words:['I','am','tired','and','hungry'],         es:'Estoy cansado y hambriento',  extra:['she','is','sad','happy'] },
        { id:'s037', words:['He','is','young','and','smart'],         es:'Él es joven e inteligente',   extra:['she','old','I','am'] },
      ]
    },
    // ── 3‑4 MI RUTINA ────────────────────────────────────
    {
      id: '3-4', title: 'Mi rutina', icon: '🌅',
      vocabulary: [
        { id:'v111', en:'wake up',        es:'despertarse',          ex_en:'I wake up at seven.',           ex_es:'Me despierto a las siete.' },
        { id:'v112', en:'get up',         es:'levantarse',           ex_en:'I get up at seven thirty.',     ex_es:'Me levanto a las siete y media.' },
        { id:'v113', en:'have breakfast', es:'desayunar',            ex_en:'I have breakfast at eight.',    ex_es:'Desayuno a las ocho.' },
        { id:'v114', en:'go to work',     es:'ir al trabajo',        ex_en:'I go to work at nine.',         ex_es:'Voy al trabajo a las nueve.' },
        { id:'v115', en:'have lunch',     es:'almorzar',             ex_en:'I have lunch at one.',          ex_es:'Almuerzo a la una.' },
        { id:'v116', en:'come home',      es:'volver a casa',        ex_en:'I come home at six.',           ex_es:'Vuelvo a casa a las seis.' },
        { id:'v117', en:'have dinner',    es:'cenar',                ex_en:'I have dinner at eight.',       ex_es:'Ceno a las ocho.' },
        { id:'v118', en:'watch TV',       es:'ver televisión',       ex_en:'I watch TV at night.',          ex_es:'Veo televisión de noche.' },
        { id:'v119', en:'take a shower',  es:'ducharse',             ex_en:'I take a shower every morning.',ex_es:'Me ducho todas las mañanas.' },
        { id:'v120', en:'go to bed',      es:'irse a dormir',        ex_en:'I go to bed at eleven.',        ex_es:'Me acuesto a las once.' },
      ],
      sentences: [
        { id:'s038', words:['I','wake','up','at','seven','every','morning'],  es:'Me despierto a las siete cada mañana',  extra:['she','get','at','six'] },
        { id:'s039', words:['She','goes','to','work','by','bus'],             es:'Ella va al trabajo en colectivo',       extra:['I','come','home','car'] },
        { id:'s040', words:['I','go','to','bed','at','eleven'],               es:'Me acuesto a las once',                 extra:['she','wake','up','ten'] },
        { id:'s041', words:['We','have','dinner','at','eight'],               es:'Cenamos a las ocho',                    extra:['I','lunch','breakfast','at'] },
      ]
    },
  ]
},

// ══════════════════════════════════════════════════════════
// NIVELES 4–8  (próximamente)
// ══════════════════════════════════════════════════════════
{
  id:4, title:'Social', subtitle:'Experiencias y pasado', cefr:'A2',
  icon:'🗣️', color:'#ff9600', colorDark:'#cc7800', colorLight:'#fff0cc',
  comingSoon: true, lessons:[]
},
{
  id:5, title:'Fluido', subtitle:'Futuro y condicionales', cefr:'A2+',
  icon:'🚀', color:'#ff4b4b', colorDark:'#cc2c2c', colorLight:'#ffd9d9',
  comingSoon: true, lessons:[]
},
{
  id:6, title:'Intermedio', subtitle:'Phrasal verbs y expresiones', cefr:'B1',
  icon:'💡', color:'#ffc800', colorDark:'#cc9e00', colorLight:'#fff8cc',
  comingSoon: true, lessons:[]
},
{
  id:7, title:'Avanzado', subtitle:'Gramática compleja', cefr:'B1+',
  icon:'🏆', color:'#9e9e9e', colorDark:'#666', colorLight:'#eee',
  comingSoon: true, lessons:[]
},
{
  id:8, title:'Series', subtitle:'Inglés natural y slang', cefr:'B2',
  icon:'🎬', color:'#ce82ff', colorDark:'#8b2be2', colorLight:'#f3e0ff',
  comingSoon: true, lessons:[]
},

]};

// Helpers
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
