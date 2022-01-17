import React from "react";
import Recipe from "./Recipe";

const RecipeList = ({ recipeList }) => {
  return (
    <div>
      {recipeList.map((recipe) => {
        return <Recipe key={recipe.id} {...recipe} />;
      })}
    </div>
  );
};

export default RecipeList;
