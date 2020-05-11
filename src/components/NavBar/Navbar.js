import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/FirstChallenge">FirstChallenge</Link>
      <Link to="/SecondChallenge">SecondChallenge</Link>
      <Link to="/ThirdChallenge">ThirdChallenge</Link>
      <Link to="/FourthChallenge">FourthChallenge</Link>
      <Link to="/importExport">importExport</Link>
      <Link to="/importExportChallenge">importExportChallenge</Link>
      <Link to="/Cards">Cards</Link>
      <Link to="/Emojipedia">Emojipedia</Link>
      <Link to="/Keeper">Keeper</Link>
      <Link to="/Login">Login</Link>
      <Link to="/Register">Register</Link>
      <Link to="/Counter">Counter</Link>
      <Link to="/Time">Time</Link>
      <Link to="/Destructuring">Destructuring</Link>
      <Link to="/"></Link>
    </div>
  );
};

export default Navbar;
