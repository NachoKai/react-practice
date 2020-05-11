import React from "react";
import Label from "../Login/Label";

const Register = (props) => {
  let userIsRegistered = false;

  return (
    <form className="form">
      <Label htmlFor="name" title="Username:" />
      <input type="text" placeholder="Username" />
      <Label htmlFor="password" title="Password:" />
      <input type="password" placeholder="Password" />
      {!userIsRegistered && (
        <input type="password" placeholder="Confirm Password" />
      )}
      <button type="submit">{userIsRegistered ? "Login" : "Register"}</button>
    </form>
  );
};

export default Register;
