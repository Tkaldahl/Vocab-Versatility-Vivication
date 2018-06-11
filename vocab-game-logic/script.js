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

var answer1 = null
var answer2 = null
var answer3 = null
var answer4 = null
var answer5 = null
var answer6 = null
var answer7 = null
var answer8 = null
var answer9 = null

var randomWord1 = null
var randomWord2 = null
var randomWord3 = null

var randomWordHTML = document.getElementById('randomWord')
var sentenceField = document.getElementById('sentenceField')

function startGame () {
  assignWord()
  startTimer()
  sentenceField.focus()
}

function assignWord () {
  randomWord1 = words.magnificent.word + ':<br>' + words.magnificent.definition
  randomWordHTML.innerHTML = randomWord1
}

sentenceField.addEventListener('keypress', function (evt) {
  if (evt.keyCode === 13) {
    evt.preventDefault()
    answer1 = sentenceField.value
    console.log(answer1)
  }
})
