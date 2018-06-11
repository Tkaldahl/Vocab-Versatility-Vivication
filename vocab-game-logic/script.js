// Widget for the timer
var count = 0
var interval = null

function startTimer () {
  count = 60 // set the number of seconds you want to countdown.
  timer()
  interval = setInterval(timer, 1000)
}

var timerElement = document.getElementById('timer')
function timer () {
  timerElement.innerHTML = count--
  console.log(count)
  if (count === -2) {
    clearInterval(interval)
    timerElement.innerHTML = "Time's Up."
  }
}
document.getElementById('startButton').addEventListener('click', startGame)

// random word generator
var words = {
  magnificent: {
    word: 'magnificent',
    definition: 'impressively beautiful, elaborate, or extravagant; striking.'
  },
  indignant: {
    word: 'indignant',
    definition: 'feeling or showing anger or annoyance at what is perceived as unfair treatment.'
  },
  stoke: {
    word: 'stoke',
    definition: 'to stir up or excite'
  }
}

// save the sentence responses for access later
var answers = {
  1: null,
  2: null,
  3: null,
  4: null,
  5: null,
  6: null,
  7: null,
  8: null,
  9: null
}

var randomWordArray = Object.keys(words)
var printRandomWord = null
var wordIndex = 0
var answerIndex = 1
var randomWordHTML = document.getElementById('randomWord')
var sentenceField = document.getElementById('sentenceField')

// clears all saved fields and resets word/answer indexes.
function startGame () {
  wordIndex = 0
  answerIndex = 1
  for (var i = 1; i < 10; i++) {
    answers[i] = null
  }
  assignWordHTML()
  startTimer()
  sentenceField.focus()
}

// game logic

function assignWordHTML () {
  printRandomWord = randomWordArray[wordIndex] + ':<br>' + words[randomWordArray[wordIndex]].definition
  randomWordHTML.innerHTML = printRandomWord
}

// The function below listens for the enter key in the input field. On enter, it stores the sentence in the answers object, clears the input field, and moves to the next random word.
sentenceField.addEventListener('keypress', function (evt) {
  if (evt.keyCode === 13) {
    evt.preventDefault()
    answers[answerIndex] = sentenceField.value
    answerIndex++
    if (wordIndex < 2) { // cycle through the three randomly selected words
      wordIndex++
      assignWordHTML()
      sentenceField.value = ''
    } else { // at wordIndex = 2 we want to reset to the beginning since there are only 3 words in our randomWordArray.
      wordIndex = 0
      assignWordHTML()
      sentenceField.value = ''
    }
  }
})
