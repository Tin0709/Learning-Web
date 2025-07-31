const chatBox = document.getElementById('chat-box');
const input = document.getElementById('message-input');
const sendBtn = document.getElementById('send-btn');

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
