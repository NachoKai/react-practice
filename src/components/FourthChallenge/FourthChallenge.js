import React from "react";
import "./FourthChallenge.scss";

const FourthChallenge = () => {
  let day = new Date();
  let hour = day.getHours();

  const customColor = {
    color: "",
  };

  function getHour(hour) {
    if (hour > 12 && hour <= 18) {
      customColor.color = "#e67700";
      return "Good Afternoon 🌇";
    } else if (hour > 18 && hour <= 24) {
      customColor.color = "#364fc7";
      return "Good Evening 🌛";
    } else if (hour >= 1 && hour <= 12) {
      customColor.color = "#5c940d";
      return "Good Morning 🌞";
    } else {
      return "Error";
    }
  }

  let clock = getHour(hour);

  return (
    <div>
      <h2>Fourth Challenge</h2>
      <h3 className="clock" style={customColor}>
        {clock}
      </h3>
    </div>
  );
};

export default FourthChallenge;
