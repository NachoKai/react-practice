import React, { useState } from "react";
import "./Time.css";

const Time = () => {
  let [time, setTime] = useState("TIME");
  time = new Date().toLocaleTimeString();

  function getTime() {
    return setTime(time);
  }

  function getAutoTime() {
    return setInterval(getTime, 1000);
  }

  return (
    <div className="time-container">
      <h1 className="time-h1">{time}</h1>
      <button className="time-button" onClick={getTime}>
        Get Time
      </button>
      <button className="time-button" onClick={getAutoTime}>
        Auto Time
      </button>
    </div>
  );
};

export default Time;
