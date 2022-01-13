import React, { Component } from "react";
import { ThemeContext } from "./App";

class CounterApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.initialCount,
    };
  }
  render() {
    console.log("counter rendered");
    return (
      <ThemeContext.Consumer>
        {(style) => {
          return (
            <div>
              <button
                style={style}
                onClick={() => {
                  this.setCount(-1);
                }}
              >
                -
              </button>
              <span>{this.state.count}</span>
              <button style={style} onClick={() => this.setCount(1)}>
                +
              </button>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }

  setCount = (amount) => {
    this.setState((prevState) => {
      return { count: prevState.count + amount };
    });
  };
}

export default CounterApp;
