// Timer
let timerInterval;
let timerSeconds = 0;

function startTimer() {
  timerInterval = setInterval(() => {
    timerSeconds++;
    const hours = Math.floor(timerSeconds / 3600);
    const minutes = Math.floor((timerSeconds % 3600) / 60);
    const seconds = timerSeconds % 60;
    document.getElementById('timer').textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  timerSeconds = 0;
  document.getElementById('timer').textContent = '00:00:00';
}

document.getElementById('start-timer').addEventListener('click', startTimer);
document.getElementById('pause-timer').addEventListener('click', pauseTimer);
document.getElementById('reset-timer').addEventListener('click', resetTimer);


// Stopwatch
let stopwatchInterval;
let stopwatchSeconds = 0;

function startStopwatch() {
  stopwatchInterval = setInterval(() => {
    stopwatchSeconds++;
    const hours = Math.floor(stopwatchSeconds / 3600);
    const minutes = Math.floor((stopwatchSeconds % 3600) / 60);
    const seconds = stopwatchSeconds % 60;
    document.getElementById('stopwatch').textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }, 1000);
}

function pauseStopwatch() {
  clearInterval(stopwatchInterval);
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchSeconds = 0;
  document.getElementById('stopwatch').textContent = '00:00:00';
}

document.getElementById('start-stopwatch').addEventListener('click', startStopwatch);
document.getElementById('pause-stopwatch').addEventListener('click', pauseStopwatch);
document.getElementById('reset-stopwatch').addEventListener('click', resetStopwatch);
