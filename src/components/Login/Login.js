import React from "react";
import "./Login.css";
import Input from "./Input";
import Label from "./Label";

let isLoggedIn = false;
const currentTime = new Date(2019, 11, 1, 9).getHours();

function Login() {
  return (
    <div className="container">
      {isLoggedIn ? (
        <h1>Hello</h1>
      ) : (
        <form className="form">
          <Label htmlFor="name" title="Name:" />
          <Input type="text" placeholder="Username" id="name" />
          <Label htmlFor="password" title="Password:" />
          <Input type="password" placeholder="Password" id="password" />
          <button type="submit">Login</button>
          {currentTime > 12 && <h1>Why are you still working?</h1>}
        </form>
      )}
    </div>
  );
}

export default Login;
