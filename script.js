// Initialize time variables and references
let [hours, minutes, seconds, milliseconds] = [0, 0, 0, 0];
let timerRef = document.getElementById('stopwatch');
let lapsRef = document.getElementById('laps');
let int = null;

// Start button: Starts the timer
document.getElementById('start').addEventListener('click', () => {
  if (int !== null) clearInterval(int);
  int = setInterval(displayTimer, 10);
  timerRef.classList.add('running');
});

// Pause button: Pauses the timer
document.getElementById('pause').addEventListener('click', () => {
  clearInterval(int);
  timerRef.classList.remove('running');
});

// Reset button: Resets the timer and clears laps
document.getElementById('reset').addEventListener('click', () => {
  clearInterval(int);
  [hours, minutes, seconds, milliseconds] = [0, 0, 0, 0];
  timerRef.innerHTML = '00:00:00:000';
  timerRef.classList.remove('running');
  lapsRef.innerHTML = '';
});

// Lap button: Records the current time as a lap
document.getElementById('lap').addEventListener('click', () => {
  let lap = document.createElement('div');
  lap.className = 'lap-item';
  lap.textContent = timerRef.innerHTML;
  lapsRef.appendChild(lap);
});

// Theme toggle button: Toggles between light and dark themes
document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Updates and displays the timer
function displayTimer() {
  milliseconds += 10;
  if (milliseconds == 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
    }
  }

  // Format time with leading zeros
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms = milliseconds < 100 ? (milliseconds < 10 ? "00" + milliseconds : "0" + milliseconds) : milliseconds;

  timerRef.innerHTML = `${h}:${m}:${s}:${ms}`;
}