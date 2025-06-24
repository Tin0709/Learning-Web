// Load tasks from localStorage
window.onload = function () {
  loadTasks();
};

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") return;

  createTaskElement(taskText);
  saveTask(taskText);
  input.value = "";
}

function createTaskElement(taskText, isCompleted = false) {
  const li = document.createElement("li");
  if (isCompleted) li.classList.add("completed");

  li.innerHTML = `
    <span onclick="toggleComplete(this)">${taskText}</span>
    <button onclick="deleteTask(this)">🗑️</button>
  `;

  document.getElementById("taskList").appendChild(li);
}

function toggleComplete(span) {
  const li = span.parentElement;
  li.classList.toggle("completed");
  updateStorage();
}

function deleteTask(button) {
  const li = button.parentElement;
  li.remove();
  updateStorage();
}

function saveTask(text) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push({ text, completed: false });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(task => {
    createTaskElement(task.text, task.completed);
  });
}

function updateStorage() {
  const taskList = document.querySelectorAll("#taskList li");
  const tasks = [];

  taskList.forEach(li => {
    tasks.push({
      text: li.querySelector("span").innerText,
      completed: li.classList.contains("completed")
    });
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}
