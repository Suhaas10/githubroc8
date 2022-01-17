import React from "react";

const Recipe = (props) => {
  const { id, name, cookTime, servings, instructions } = props;
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
      <div>test</div>
    </div>
  );
};

export default Recipe;
