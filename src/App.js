import React from "react";
import RecipeList from "./RecipeList";

export const ThemeContext = React.createContext();

function App() {
  console.log("App rendered");

  return (
    <>
      <RecipeList recipeList={recipeList}></RecipeList>
    </>
  );
}

const recipeList = [
  {
    id: 1,
    name: "plain chicken",
    cookTime: 1.45,
    servings: 3,
    instructions:
      "1. put salt on chicken\n 2. put chicken in oven\n 3. eat chicken",
    ingredients: [
      {
        name: "chicken",
        amount: "1 KG",
      },
      {
        name: "salt",
        amount: "1 teaspoon",
      },
    ],
  },
  {
    id: 2,
    name: "plain pork",
    cookTime: 0.45,
    servings: 5,
    instructions:
      "1. put pepper on chicken\n 2. put pork in oven\n 3. eat pork",
    ingredients: [
      {
        name: "chicken",
        amount: "1 KG",
      },
      {
        name: "salt",
        amount: "1 teaspoon",
      },
    ],
  },
];

export default App;
