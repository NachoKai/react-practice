import React from "react";

const SecondChallenge = () => {
  let fName = "Nacho";
  let lName = "Caiafa";
  let luckyNumber = Math.floor(Math.random() * 100);

  return (
    <div>
      <h2>Second Challenge</h2>
      <h3>Hello {`${fName} ${lName}`}!</h3>
      <p>Your lucky number is: {luckyNumber}</p>
    </div>
  );
};

export default SecondChallenge;
