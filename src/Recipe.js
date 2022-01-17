import React from "react";
import UngredientList from "./UngredientList";
import AnimatedButton from "./AnimatedButton.style";

const Recipe = (props) => {
  const { id, name, cookTime, servings, instructions, ingredients } = props;
  console.log(props.id);
  return (
    <div>
      <div>
        <h3>{name}</h3>
      </div>
      <button>Edit</button>
      <button>Delete</button>
      <div>
        <span>Cook Time : </span>
        <span>{cookTime}</span>
      </div>
      <div>
        <span>Servings : </span>
        <span>{servings}</span>
      </div>
      <div>
        <span>Instructions : </span>
        <div>{instructions}</div>
      </div>
      <div>
        <span>Ingredients : </span>
        <UngredientList key={id} ingredients={ingredients} />
      </div>
      <div>test</div>
    </div>
  );
};

export default Recipe;
