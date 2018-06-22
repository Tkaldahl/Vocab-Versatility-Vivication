// Variables and event listeners are all added first. Skip down for game logic

// random word generator
var words = {
  Magnificent: {
    word: 'Magnificent',
    definition: 'Adjective. Impressively beautiful, elaborate, or extravagant; striking.'
  },
  Indignant: {
    word: 'Indignant',
    definition: 'Adjective. Feeling or showing anger or annoyance at what is perceived as unfair treatment.'
  },
  Stoke: {
    word: 'Stoke',
    definition: 'Verb. To stir up or excite'
  },
  abate: {
    word: 'Abate',
    definition: 'Verb. To become less active, less intense, or less in amount'
  },
  Abstract: {
    word: 'Abstract',
    definition: 'Adjective. Existing purely in the mind; not representing actual reality'
  },
  Abysmal: {
    word: 'Abysmal',
    definition: 'Adjective. Extremely bad; appalling.'
  },
  Acquisition: {
    word: 'Acquisition',
    definition: 'Noun: An asset or object bought or obtained. Verb: The learning or developing of a skill, habit.'
  },
  Adept: {
    word: 'Adept',
    definition: 'Adjective: Very skilled or proficient at something. Noun: a person who is skilled or proficient at something.'
  },
  Advent: {
    word: 'Advent',
    definition: 'Noun: The arrival of something'
  },
  Altercation: {
    word: 'Altercation',
    definition: 'Noun: a noisy argument or disagreement, particularly in public.'
  },
  Ambivalence: {
    word: 'Ambivalence',
    definition: 'Noun: The state of being uncertain or stuck between two or more options.'
  },
  Antipathy: {
    word: 'Antipathy',
    definition: 'Noun: A strong feeling of dislike.'
  },
  Austere: {
    word: 'Austere',
    definition: 'Adjective: 1. Severe or strict in manner, attitude, or appearance. 2. Living conditions having no comforts or luxuries; harsh or ascetic. 3. having an extremely plain and simple style or appearance; unadorned.'
  },
  Benevolent: {
    word: 'Benevolent',
    definition: 'Adjective: ell meaning and kindly. Serving a charitable rather than a profit-making purpose.'
  },
  Bolster: {
    word: 'Bolster',
    definition: 'Verb: To support, strengthen, or fortify'
  },
  Brevity: {
    word: 'Brevity',
    definition: 'Noun: The quality of being brief or terse'
  },
  Candor: {
    word: 'Candor',
    definition: 'Noun: The trait of being honest and frank'
  },
  Civic: {
    word: 'Civic',
    definition: 'Adjective: Relating to the city or citizens'
  },
  Clout: {
    word: 'Clout',
    definition: 'Noun: Influence or power, especially in politics or business'
  },
  Complacent: {
    word: 'Complacent',
    definition: 'Adjective: Satisfied, with no desire to change or improve'
  },
  Complement: {
    word: 'Complement',
    definition: 'Verb: To make perfect or complete.'
  },
  Conducive: {
    word: 'Conducive',
    definition: 'Adjective: Able to bring about or be suitable for'
  },
  Corroborate: {
    word: 'Corroborate',
    definition: 'Verb: To provide evidence for; to back up (a claim)'
  },
  Culmination: {
    word: 'Culmination',
    definition: 'Culmination'
  },
  Deficient: {
    word: 'Deficient',
    definition: 'Adjective: Not enough in degree or amount'
  },
  Demur: {
    word: 'Demur',
    definition: 'Verb: To raise doubts or objections or show reluctance'
  },
  Desolate: {
    word: 'Desolate',
    definition: 'Adjective: Barren, bare, empty'
  },
  Dire: {
    word: 'Dire',
    definition: 'Adjective: hopeless and dangerous or fearful'
  },
  Mellifluous: {
    word: 'Mellifluous',
    definition: 'Adjective: A sound that is sweet and smooth, pleasing to hear.'
  },
  Ineffable: {
    word: 'Ineffable',
    definition: 'Adjective: Too great to be expressed in words. (like this website)'
  },
  Nefarious: {
    word: 'Nefarious',
    definition: 'Adjective: Wicked, villainous, despicable.'
  },
  Epoch: {
    word: 'Epoch',
    definition: "Noun: A particular period of time in history or a person's life."
  },
  Sonorous: {
    word: 'Sonorous',
    definition: 'Adjective: An imposingly deep and full sound.'
  },
  Serendipity: {
    word: 'Serendipity',
    definition: 'Noun: The chance occurrence of events in a beneficial way.'
  },
  Limerence: {
    word: 'Limerence',
    definition: 'Noun: The state of being infatuated with another person.'
  },
  Bombinate: {
    word: 'Bombinate',
    definition: 'Verb: To make a humming or buzzing noise.'
  },
  Ethereal: {
    word: 'Ethereal',
    definition: 'Adjective: Extremely delicate, light, in a way too perfect for this world.'
  },
  Illicit: {
    word: 'Illicit',
    definition: 'Adjective: forbidden by law, rules, or custom.'
  },
  Iridescent: {
    word: 'Iridescent',
    definition: 'Adjective: Producing a display of rainbowlike colours'
  },
  Epiphany: {
    word: 'Epiphany',
    definition: 'Noun: A moment of sudden revelation.'
  },
  Supine: {
    word: 'Supine',
    definition: 'Adjective: Lying face upwards'
  },
  Luminescence: {
    word: 'Luminescence',
    definition: 'Noun: The emission of light by a substance that has not been heated, as in fluorescence and phosphorescence.'
  },
  Incandescence: {
    word: 'Incandescence',
    definition: 'Noun: Light produced by high temperatures.'
  },
  Solitude: {
    word: 'Solitude',
    definition: 'Noun: A state of seclusion or isolation'
  },
  Oblivion: {
    word: 'Oblivion',
    definition: 'Noun: The state of being unaware or unconscious of what is happening. The state of being forgotten by all'
  },
  Ephemeral: {
    word: 'Ephemeral',
    definition: 'Adjective: Lasting for a very short time.'
  },
  Denouement: {
    word: 'Denouement',
    definition: 'Noun: The climax of a chain of events, usually when something is decided or made clear with respect to movies, plays, or narratives in particular.'
  },
  Eloquence: {
    word: 'Eloquence',
    definition: 'Noun: The art of using language in an apt, fluent way.'
  },
  Defenestration: {
    word: 'Defenestration',
    definition: 'the action of throwing someone or something out of a window.'
  },
  Effervescence: {
    word: 'Effervescence',
    definition: 'Bubbles in a liquid.'
  }
}

// Variables for the timer
var count = 0
var interval = null
var timerElement = document.getElementById('timer')

// Variables for the game
var randomWordArray = Object.keys(words)
var printRandomWord = null
var wordIndex = null // Variable for selecting our of the words array. value will be randomly assigned at start of game and after each answer.
var focusBox = 1 // Selects which input box the player is writing in.
var randomWordHTML = document.getElementById('randomWord')
var sentenceField = document.getElementsByClassName('sentenceField')

// Function for the timer
function timer () {
  timerElement.innerHTML = count--
  console.log(count)
  if (count === -2) {
    clearInterval(interval)
    timerElement.innerHTML = "Time's Up."
  }
}

// Function to start the timer (triggered by event listener on start button).
function startTimer () {
  count = 180 // set the number of seconds you want to countdown.
  timer()
  interval = setInterval(timer, 1000)

  // On game start add a timeout function to end the game after 60 seconds or upon entering the final answer field. Post the answers by 'clicking' the submit button
  setTimeout(function () {
    document.getElementById('jsSubmitButton').click()
  }, 183000)
  document.getElementById('focus6').addEventListener('keypress', function (evt) {
    if (evt.keyCode === 13) {
      document.getElementById('jsSubmitButton').click()
    }
  })
}

// Random number generator for picking words from the array.
function randomWordIndex () {
  wordIndex = Math.floor((Math.random() * (Object.keys(words).length + 1)))
  console.log(wordIndex)
}

// Starts the game setting variables and starting the timer.
function startGame () {
  randomWordIndex()
  focusBox = 1
  assignWordHTML()
  startTimer()
  document.getElementById('focus1').focus()
}

// game logic
function assignWordHTML () {
  printRandomWord = randomWordArray[wordIndex] + ':<br>' + words[randomWordArray[wordIndex]].definition
  randomWordHTML.innerHTML = printRandomWord
}

// Add event listener to the start button
document.getElementById('startButton').addEventListener('click', startGame)

// Add event listener to each input field
for (var i = 0; i < sentenceField.length; i++) {
  sentenceField[i].addEventListener('keypress', function (evt) {
    if (evt.keyCode === 13) {
      evt.preventDefault()
      focusBox++
      randomWordIndex()
      console.log(wordIndex)
      assignWordHTML()
      document.getElementById(`focus${focusBox}`).focus()
      // if (wordIndex < 1) { // cycle through the three randomly selected words
      //   wordIndex++
      //   assignWordHTML()
      //   // element.value = ''
      // } else { // at wordIndex = 1 we want to reset to the beginning since there are only 2 words in our randomWordArray.
      //   wordIndex = 0
      //   assignWordHTML()
      //   // element.value = ''
      // }
    }
  })
}
