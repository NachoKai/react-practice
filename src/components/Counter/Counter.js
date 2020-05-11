import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  function counterUp() {
    setCounter(counter + 1);
  }
  function counterDown() {
    setCounter(counter - 1);
  }

  return (
    <div className="counter">
      <h2>Counter</h2>
      <button className="counter-btn" onClick={counterUp}>
        +
      </button>

      <h1 className="counter-num">{counter}</h1>
      <button className="counter-btn" onClick={counterDown}>
        -
      </button>
    </div>
  );
};

export default Counter;
