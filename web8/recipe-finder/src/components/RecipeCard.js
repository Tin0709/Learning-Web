import React from "react";

const RecipeCard = ({ recipe }) => {
  if (!recipe || !recipe.strMealThumb) return null;

  const link = recipe.strSource || recipe.strYoutube;

  return (
    <div className="recipe-card">
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <h2>{recipe.strMeal}</h2>
      <p>
        <strong>Category:</strong> {recipe.strCategory}
      </p>
      <p>
        <strong>Area:</strong> {recipe.strArea}
      </p>

      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          View Recipe
        </a>
      ) : (
        <p style={{ margin: "16px", color: "gray" }}>
          No recipe link available
        </p>
      )}
    </div>
  );
};

export default RecipeCard;
