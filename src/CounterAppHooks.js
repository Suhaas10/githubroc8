import React, { useState, useContext } from "react";
import { ThemeContext } from "./App";

const CounterAppHooks = ({ initialCount }) => {
  console.log("counter hooks rendered");
  const [count, setCount] = useState(initialCount);
  const style = useContext(ThemeContext);
  return (
    <div>
      <button style={style} onClick={(prevState) => prevState - 1}>
        -
      </button>
      <span>{count}</span>
      <button
        style={style}
        onClick={() => setCount((prevState) => prevState + 1)}
      >
        +
      </button>
    </div>
  );
};

export default CounterAppHooks;
