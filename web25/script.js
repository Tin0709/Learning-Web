let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

const transactionsUl = document.getElementById("transactions");
const balanceEl = document.getElementById("balance");
const incomeEl = document.getElementById("income");
const expenseEl = document.getElementById("expense");
const form = document.getElementById("transaction-form");
const textInput = document.getElementById("text");
const amountInput = document.getElementById("amount");

function addTransaction(e) {
  e.preventDefault();

  const text = textInput.value.trim();
  const amount = +amountInput.value;

  if (!text || !amount) return;

  const transaction = {
    id: Date.now(),
    text,
    amount,
  };

  transactions.push(transaction);
  updateUI();
  updateLocalStorage();

  textInput.value = "";
  amountInput.value = "";
}

function removeTransaction(id) {
  transactions = transactions.filter(t => t.id !== id);
  updateUI();
  updateLocalStorage();
}

function updateUI() {
  transactionsUl.innerHTML = "";

  transactions.forEach(t => {
    const sign = t.amount < 0 ? "-" : "+";
    const item = document.createElement("li");
    item.classList.add(t.amount < 0 ? "expense" : "income");
    item.innerHTML = `
      ${t.text} <span>${sign}$${Math.abs(t.amount).toFixed(2)}</span>
      <button class="delete-btn" onclick="removeTransaction(${t.id})">x</button>
    `;
    transactionsUl.appendChild(item);
  });

  updateSummary();
}

function updateSummary() {
  const amounts = transactions.map(t => t.amount);
  const total = amounts.reduce((acc, val) => acc + val, 0).toFixed(2);
  const income = amounts
    .filter(val => val > 0)
    .reduce((acc, val) => acc + val, 0)
    .toFixed(2);
  const expense = (
    amounts.filter(val => val < 0).reduce((acc, val) => acc + val, 0) * -1
  ).toFixed(2);

  balanceEl.innerText = total;
  incomeEl.innerText = income;
  expenseEl.innerText = expense;
}

function updateLocalStorage() {
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

// Init
updateUI();
form.addEventListener("submit", addTransaction);
