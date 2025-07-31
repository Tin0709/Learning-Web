const chatBox = document.getElementById('chat-box');
const input = document.getElementById('message-input');
const sendBtn = document.getElementById('send-btn');


const toggleBtn = document.getElementById('toggle-theme');

// Check localStorage for saved theme
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  toggleBtn.textContent = '☀️';
}

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  toggleBtn.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

const botReplies = [
  "Hello!",
  "How can I help you?",
  "That's interesting.",
  "Tell me more.",
  "I see.",
  "Can you explain that?"
];

function appendMessage(message, sender) {
  const msgDiv = document.createElement('div');
  msgDiv.classList.add('message', sender);
  msgDiv.textContent = message;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function botReply() {
  const reply = botReplies[Math.floor(Math.random() * botReplies.length)];
  appendMessage(reply, 'bot');
}

sendBtn.addEventListener('click', () => {
  const message = input.value.trim();
  if (message !== "") {
    appendMessage(message, 'user');
    input.value = '';
    setTimeout(botReply, 500); // simulate delay
  }
});

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    sendBtn.click();
  }
});
