const form = document.getElementById("journal-form");
const entriesList = document.getElementById("entries-list");

let entries = JSON.parse(localStorage.getItem("journalEntries")) || [];

function saveEntries() {
  localStorage.setItem("journalEntries", JSON.stringify(entries));
}

function renderEntries() {
  entriesList.innerHTML = "";

  entries.forEach((entry, index) => {
    const li = document.createElement("li");
    li.className = "entry";

    li.innerHTML = `
      <div class="entry-title">${entry.title}</div>
      <div class="entry-content">${entry.content}</div>
      <button class="delete-btn" onclick="deleteEntry(${index})">Delete</button>
    `;

    entriesList.appendChild(li);
  });
}

function deleteEntry(index) {
  entries.splice(index, 1);
  saveEntries();
  renderEntries();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value.trim();
  const content = document.getElementById("content").value.trim();

  if (title && content) {
    const newEntry = { title, content, date: new Date().toISOString() };
    entries.unshift(newEntry);
    saveEntries();
    renderEntries();
    form.reset();
  }
});

renderEntries();
