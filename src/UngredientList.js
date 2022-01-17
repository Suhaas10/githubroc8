import React from "react";

const UngredientList = ({ ingredients }) => {
  console.log(ingredients);
  return (
    <div>
      {ingredients.map((ingredient) => (
        <div>
          <span>{ingredient.name}</span>
          <span>{ingredient.amount}</span>
        </div>
      ))}
    </div>
  );
};

export default UngredientList;
