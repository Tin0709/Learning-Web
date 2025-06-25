let quotes = [];
let currentQuote = "";

document.addEventListener("DOMContentLoaded", () => {
  fetch("quotes.json")
    .then(res => {
      if (!res.ok) throw new Error("Failed to load quotes.json");
      return res.json();
    })
    .then(data => {
      quotes = data;
      getQuote();
      loadFavorites();
    })
    .catch(err => {
      console.error(err);
      document.getElementById("quote").textContent = "Failed to load quotes.";
    });

  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark");
  }
});


function getQuote() {
  if (!quotes.length) return;
  const box = document.getElementById("quote-box");
  box.style.opacity = 0;
  setTimeout(() => {
    currentQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote").textContent = currentQuote;
    box.style.opacity = 1;
  }, 300);
}

function saveFavorite() {
  if (!currentQuote) return;
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  if (!favorites.includes(currentQuote)) {
    favorites.push(currentQuote);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    loadFavorites();
  }
}

function loadFavorites() {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const list = document.getElementById("favorite-list");
  list.innerHTML = "";
  favorites.forEach(q => {
    const li = document.createElement("li");
    li.textContent = q;
    list.appendChild(li);
  });
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("darkMode", isDark);
}
