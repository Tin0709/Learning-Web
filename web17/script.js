const startBtn = document.getElementById('start-btn');
const datetimePicker = document.getElementById('datetime-picker');
const endMessage = document.getElementById('end-message');

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

let countdownInterval;

startBtn.addEventListener('click', () => {
  const endDate = new Date(datetimePicker.value);
  if (isNaN(endDate.getTime()) || endDate <= new Date()) {
    alert('Please select a valid future date and time.');
    return;
  }

  clearInterval(countdownInterval); // reset if already running

  countdownInterval = setInterval(() => {
    const now = new Date();
    const diff = endDate - now;

    if (diff <= 0) {
      clearInterval(countdownInterval);
      daysEl.textContent = "00";
      hoursEl.textContent = "00";
      minutesEl.textContent = "00";
      secondsEl.textContent = "00";
      endMessage.textContent = "⏰ Time's up!";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
  }, 1000);
});
