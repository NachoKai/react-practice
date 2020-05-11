import React from "react";

const FirstChallenge = () => {
  return (
    <div>
      <h2>First Challenge</h2>
      <h3>My favourite foods:</h3>
      <ul>
        <li>
          Pizza
          <span role="img" aria-label="Pizza">
            🍕
          </span>
        </li>
        <li>
          Pasta
          <span role="img" aria-label="Pasta">
            🍝
          </span>
        </li>
        <li>
          Fruits
          <span role="img" aria-label="Banana">
            🍌
          </span>
          <span role="img" aria-label="Apple">
            🍎
          </span>
          <span role="img" aria-label="Watermelon">
            🍉
          </span>
        </li>
      </ul>
    </div>
  );
};

export default FirstChallenge;
