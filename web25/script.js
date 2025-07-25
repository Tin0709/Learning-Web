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
  addTransactionToDOM(transaction);
  updateSummary();
  updateLocalStorage();

  textInput.value = "";
  amountInput.value = "";
}

function removeTransaction(id) {
  const li = document.querySelector(`li[data-id='${id}']`);
  if (!li) return;

  li.classList.add('fade-out');

  setTimeout(() => {
    // Remove from array
    transactions = transactions.filter(t => t.id !== id);

    // Remove from DOM
    li.remove();

    // Update values only (not the entire list)
    updateSummary();
    updateLocalStorage();
  }, 400);
}

function addTransactionToDOM(transaction) {
  const sign = transaction.amount < 0 ? "-" : "+";
  const item = document.createElement("li");
  item.setAttribute("data-id", transaction.id);
  item.classList.add(transaction.amount < 0 ? "expense" : "income");
  item.innerHTML = `
    ${transaction.text} <span>${sign}$${Math.abs(transaction.amount).toFixed(2)}</span>
    <button class="delete-btn" onclick="removeTransaction(${transaction.id})">x</button>
  `;
  transactionsUl.appendChild(item);
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

// Initial render
transactions.forEach(addTransactionToDOM);
updateSummary();
form.addEventListener("submit", addTransaction);
