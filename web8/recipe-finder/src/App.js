import logo from "./logo.svg";
import "./App.css";

import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";

function App() {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async (query) => {
    const res = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=YOUR_APP_ID&app_key=YOUR_APP_KEY`
    );
    const data = await res.json();
    setRecipes(data.hits);
  };

  return (
    <div className="App">
      <h1>Recipe Finder</h1>
      <SearchBar onSearch={fetchRecipes} />
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;
