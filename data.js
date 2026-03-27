// ─────────────────────────────────────────────
//  LECCIONES Y EJERCICIOS
// ─────────────────────────────────────────────

const LESSONS = [
  {
    id: 1,
    icon: '🙋',
    title: 'Saludos',
    description: 'Hello, goodbye, how are you',
    exercises: [
      {
        type: 'translate_es_to_en',   // elige la traducción correcta
        question: '¿Cómo se dice "Hola" en inglés?',
        choices: ['Hello', 'Goodbye', 'Thank you', 'Please'],
        correct: 0
      },
      {
        type: 'translate_es_to_en',
        question: '¿Cómo se dice "¿Cómo estás?" en inglés?',
        choices: ['What is your name?', 'How are you?', 'Where are you from?', 'How old are you?'],
        correct: 1
      },
      {
        type: 'word_bank',
        question: 'Ordena las palabras: "Mucho gusto"',
        words: ['you', 'to', 'Nice', 'meet'],
        correct: ['Nice', 'to', 'meet', 'you']
      },
      {
        type: 'translate_en_to_es',
        question: 'What does "Goodbye" mean?',
        choices: ['Hola', 'Adiós', 'Por favor', 'Gracias'],
        correct: 1
      },
      {
        type: 'fill_blank',
        question: 'My ___ is Carlos. (Mi nombre es Carlos)',
        choices: ['age', 'name', 'job', 'city'],
        correct: 1
      },
      {
        type: 'word_bank',
        question: 'Traduce: "¿Cómo te llamas?"',
        words: ['name', 'is', 'What', 'your', '?'],
        correct: ['What', 'is', 'your', 'name', '?']
      },
      {
        type: 'translate_es_to_en',
        question: '¿Cómo se dice "Buenos días"?',
        choices: ['Good night', 'Good afternoon', 'Good morning', 'Good evening'],
        correct: 2
      }
    ]
  },
  {
    id: 2,
    icon: '🔢',
    title: 'Números',
    description: 'One to twenty and more',
    exercises: [
      {
        type: 'translate_es_to_en',
        question: '¿Cómo se dice "cinco" en inglés?',
        choices: ['Four', 'Six', 'Five', 'Three'],
        correct: 2
      },
      {
        type: 'translate_en_to_es',
        question: 'What does "twelve" mean?',
        choices: ['Veinte', 'Doce', 'Trece', 'Once'],
        correct: 1
      },
      {
        type: 'fill_blank',
        question: 'I have ___ cats. (Tengo dos gatos)',
        choices: ['one', 'two', 'three', 'four'],
        correct: 1
      },
      {
        type: 'word_bank',
        question: 'Escribe el número: "Quince"',
        words: ['teen', 'fif', 'six', 'thir'],
        correct: ['fif', 'teen']
      },
      {
        type: 'translate_es_to_en',
        question: '¿Cómo se dice "veinte" en inglés?',
        choices: ['Twelve', 'Twenty', 'Thirty', 'Fifteen'],
        correct: 1
      },
      {
        type: 'translate_en_to_es',
        question: 'What does "one hundred" mean?',
        choices: ['Diez', 'Cien', 'Mil', 'Cincuenta'],
        correct: 1
      },
      {
        type: 'fill_blank',
        question: 'There are ___ days in a week. (Hay siete días en una semana)',
        choices: ['five', 'six', 'seven', 'eight'],
        correct: 2
      }
    ]
  },
  {
    id: 3,
    icon: '🍎',
    title: 'Comida',
    description: 'Food, drinks and meals',
    exercises: [
      {
        type: 'translate_es_to_en',
        question: '¿Cómo se dice "manzana" en inglés?',
        choices: ['Orange', 'Apple', 'Banana', 'Grape'],
        correct: 1
      },
      {
        type: 'translate_en_to_es',
        question: 'What does "bread" mean?',
        choices: ['Queso', 'Leche', 'Pan', 'Huevo'],
        correct: 2
      },
      {
        type: 'word_bank',
        question: 'Traduce: "Me gusta el café"',
        words: ['coffee', 'like', 'I', 'the'],
        correct: ['I', 'like', 'coffee']
      },
      {
        type: 'fill_blank',
        question: 'I drink ___ every morning. (Bebo agua cada mañana)',
        choices: ['milk', 'water', 'juice', 'tea'],
        correct: 1
      },
      {
        type: 'translate_es_to_en',
        question: '¿Cómo se dice "almuerzo" en inglés?',
        choices: ['Breakfast', 'Dinner', 'Lunch', 'Snack'],
        correct: 2
      },
      {
        type: 'translate_en_to_es',
        question: 'What does "chicken" mean?',
        choices: ['Cerdo', 'Res', 'Pollo', 'Pescado'],
        correct: 2
      },
      {
        type: 'word_bank',
        question: 'Ordena: "El desayuno es delicioso"',
        words: ['is', 'The', 'breakfast', 'delicious'],
        correct: ['The', 'breakfast', 'is', 'delicious']
      }
    ]
  },
  {
    id: 4,
    icon: '🌍',
    title: 'Lugares',
    description: 'Places and locations',
    exercises: [
      {
        type: 'translate_es_to_en',
        question: '¿Cómo se dice "escuela" en inglés?',
        choices: ['Hospital', 'School', 'Store', 'Church'],
        correct: 1
      },
      {
        type: 'translate_en_to_es',
        question: 'What does "airport" mean?',
        choices: ['Puerto', 'Estación', 'Aeropuerto', 'Parque'],
        correct: 2
      },
      {
        type: 'fill_blank',
        question: 'I work at a ___. (Trabajo en un hospital)',
        choices: ['school', 'bank', 'hospital', 'park'],
        correct: 2
      },
      {
        type: 'word_bank',
        question: 'Traduce: "¿Dónde está el banco?"',
        words: ['bank', 'is', 'Where', 'the', '?'],
        correct: ['Where', 'is', 'the', 'bank', '?']
      },
      {
        type: 'translate_es_to_en',
        question: '¿Cómo se dice "biblioteca" en inglés?',
        choices: ['Library', 'Bookstore', 'Museum', 'Gallery'],
        correct: 0
      },
      {
        type: 'translate_en_to_es',
        question: 'What does "neighborhood" mean?',
        choices: ['Ciudad', 'País', 'Barrio', 'Calle'],
        correct: 2
      },
      {
        type: 'word_bank',
        question: 'Ordena: "Vivo cerca del parque"',
        words: ['the', 'near', 'I', 'live', 'park'],
        correct: ['I', 'live', 'near', 'the', 'park']
      }
    ]
  },
  {
    id: 5,
    icon: '⏰',
    title: 'Tiempo',
    description: 'Days, months and time',
    exercises: [
      {
        type: 'translate_es_to_en',
        question: '¿Cómo se dice "lunes" en inglés?',
        choices: ['Sunday', 'Tuesday', 'Monday', 'Friday'],
        correct: 2
      },
      {
        type: 'translate_en_to_es',
        question: 'What does "yesterday" mean?',
        choices: ['Hoy', 'Mañana', 'Ayer', 'Ahora'],
        correct: 2
      },
      {
        type: 'fill_blank',
        question: 'Today is ___. (Hoy es viernes)',
        choices: ['Thursday', 'Friday', 'Saturday', 'Sunday'],
        correct: 1
      },
      {
        type: 'word_bank',
        question: 'Traduce: "¿Qué hora es?"',
        words: ['time', 'What', 'it', 'is', '?'],
        correct: ['What', 'time', 'is', 'it', '?']
      },
      {
        type: 'translate_es_to_en',
        question: '¿Cómo se dice "diciembre" en inglés?',
        choices: ['November', 'October', 'January', 'December'],
        correct: 3
      },
      {
        type: 'translate_en_to_es',
        question: 'What does "next week" mean?',
        choices: ['La semana pasada', 'Esta semana', 'La próxima semana', 'El próximo mes'],
        correct: 2
      },
      {
        type: 'word_bank',
        question: 'Ordena: "Me despierto a las siete"',
        words: ['at', 'I', 'up', 'seven', 'wake'],
        correct: ['I', 'wake', 'up', 'at', 'seven']
      }
    ]
  }
];
