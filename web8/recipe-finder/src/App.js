import logo from "./logo.svg";
import "./App.css";

import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";

import { useEffect } from "react";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchRecipes = async (q) => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${q}`
      );
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setRecipes(data.meals || []);
    } catch (err) {
      console.error("Failed to fetch recipes:", err);
      alert("Failed to fetch recipes. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const suggestions = ["pasta", "chicken", "pizza", "rice", "soup", "fish"];

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "";
  }, [darkMode]);

  return (
    <div className={`App ${darkMode ? "dark" : ""}`}>
      <div className="top-bar">
        <h1>Recipe Finder</h1>
        <button className="dark-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      <SearchBar
        onSearch={() => fetchRecipes(query)}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="suggestions">
        {suggestions.map((item) => (
          <button key={item} onClick={() => fetchRecipes(item)}>
            {item}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="loader"></div>
      ) : (
        <RecipeList recipes={recipes} />
      )}
    </div>
  );
}

export default App;
