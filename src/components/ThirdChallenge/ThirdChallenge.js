import React from "react";

const ThirdChallenge = () => {
  let fName = "Nacho Caiafa";
  let date = new Date();
  let currentYear = date.getFullYear();
  let imgUrl = "https://picsum.photos/200";

  return (
    <div>
      <h2>
        Third Challenge
      </h2>
      <img src={imgUrl} alt="Random" />
      <footer>
        <p>
          Created by <i>{fName}</i>
        </p>
        <p>
          Copyright &copy; <b>{currentYear}</b>
        </p>
      </footer>
    </div>
  );
};

export default ThirdChallenge;
