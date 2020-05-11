import React, { useState } from "react";
import "./EventHandling.css";

const EventHandling = () => {
  const [headingText, setHeadingText] = useState("Hello");
  const [isMousedOver, setMouseOver] = useState(false);

  function handleClick() {
    setHeadingText("Submitted");
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="eh-container">
      <h1>{headingText}</h1>
      <input className="eh-input" type="text" placeholder="What's your name?" />
      <button
        className="eh-button"
        style={{ backgroundColor: isMousedOver ? "black" : "white" }}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
};

export default EventHandling;
