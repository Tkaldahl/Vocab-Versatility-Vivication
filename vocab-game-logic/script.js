// Widget for the timer
var count = 0
var interval = null
function startTimer () {
  count = 5 // set the number of seconds you want to countdown. 
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
document.getElementById('startButton').addEventListener('click', startTimer)