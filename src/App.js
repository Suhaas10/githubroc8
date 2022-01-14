import React, { useState } from "react";
import CounterApp from "./CounterApp";
import CounterAppHooks from "./CounterAppHooks";

export const ThemeContext = React.createContext();

function App() {
  console.log("App rendered");
  const [theme, setTheme] = useState("green");

  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      {" "}
      Counter
      <CounterApp initialCount={0} />
      Counterhooks
      <CounterAppHooks initialCount={0} />
      <button
        onClick={() =>
          setTheme((prevState) => (prevState === "green" ? "red" : "green"))
        }
      >
        change theme
      </button>
    </ThemeContext.Provider>
  );
}

export default App;
