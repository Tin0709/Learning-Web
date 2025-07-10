import React from "react";
import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes }) => {
  return (
    <div className="recipe-list">
      {recipes?.map((recipe, index) =>
        recipe ? <RecipeCard key={index} recipe={recipe} /> : null
      )}
    </div>
  );
};

export default RecipeList;
