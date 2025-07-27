const textDisplay = document.getElementById('text-display');
const textInput = document.getElementById('text-input');
const wpmDisplay = document.getElementById('wpm');
const cpmDisplay = document.getElementById('cpm');
const accuracyDisplay = document.getElementById('accuracy');
const timerDisplay = document.getElementById('timer');
const restartBtn = document.getElementById('restart');

const paragraphs = [
  "Typing fast is a useful skill for work and school.",
  "Practice makes perfect when learning to type quickly.",
  "Coding challenges are a great way to improve logic and speed.",
  "JavaScript is fun once you understand the core concepts."
];

let timer = 60;
let timerInterval = null;
let startTime = null;
let currentIndex = 0;
let correctChars = 0;

function loadParagraph() {
  const text = paragraphs[Math.floor(Math.random() * paragraphs.length)];
  textDisplay.innerHTML = '';
  text.split('').forEach(char => {
    const span = document.createElement('span');
    span.innerText = char;
    textDisplay.appendChild(span);
  });
  textInput.value = '';
  currentIndex = 0;
  correctChars = 0;
  startTime = null;
  clearInterval(timerInterval);
  timer = 60;
  timerDisplay.innerText = timer;
  wpmDisplay.innerText = 0;
  cpmDisplay.innerText = 0;
  accuracyDisplay.innerText = '100%';
}

function updateStats() {
  const elapsedTime = 60 - timer;
  const wpm = Math.round((correctChars / 5) / (elapsedTime / 60));
  const cpm = Math.round(correctChars / (elapsedTime / 60));
  const accuracy = Math.round((correctChars / textInput.value.length) * 100) || 100;
  wpmDisplay.innerText = isNaN(wpm) ? 0 : wpm;
  cpmDisplay.innerText = isNaN(cpm) ? 0 : cpm;
  accuracyDisplay.innerText = accuracy + '%';
}

function startTimer() {
  if (timerInterval) return;
  startTime = Date.now();
  timerInterval = setInterval(() => {
    timer--;
    timerDisplay.innerText = timer;
    if (timer <= 0) {
      clearInterval(timerInterval);
      textInput.disabled = true;
    }
  }, 1000);
}

textInput.addEventListener('input', () => {
  startTimer();
  const textSpans = textDisplay.querySelectorAll('span');
  const inputValue = textInput.value;

  inputValue.split('').forEach((char, i) => {
    const span = textSpans[i];
    if (!span) return;
    if (char === span.innerText) {
      span.classList.add('correct');
      span.classList.remove('incorrect');
    } else {
      span.classList.add('incorrect');
      span.classList.remove('correct');
    }
  });

  correctChars = inputValue.split('').filter((char, i) => {
    return textSpans[i] && char === textSpans[i].innerText;
  }).length;

  updateStats();
});

restartBtn.addEventListener('click', () => {
  textInput.disabled = false;
  loadParagraph();
});

loadParagraph();
