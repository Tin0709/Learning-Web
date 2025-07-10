import logo from "./logo.svg";
import "./App.css";

import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");

  const fetchRecipes = async (q) => {
    try {
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
    }
  };

  const suggestions = [
    "pasta",
    "chicken",
    "salad",
    "beef",
    "rice",
    "soup",
    "fish",
  ];

  return (
    <div className="App">
      <h1>Recipe Finder</h1>
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

      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;
