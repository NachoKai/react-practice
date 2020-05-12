import React from "react";
import "./App.css";
import "./Normalize.css";
import FirstChallenge from "./components/FirstChallenge/FirstChallenge";
import SecondChallenge from "./components/SecondChallenge/SecondChallenge";
import ThirdChallenge from "./components/ThirdChallenge/ThirdChallenge";
import FourthChallenge from "./components/FourthChallenge/FourthChallenge";
import PI, {
  DOUBLE_PI,
  TRIPLE_PI,
  fixedPI,
  add,
  multiply,
  divide,
  subtract,
} from "./components/Pi/pi";
import Card from "./components/Card/Card";
import contacts from "./components/Card/contacts";
import Emojipedia from "./components/Emojipedia/Emojipedia";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import Keeper from "./components/Keeper/Keeper";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Counter from "./components/Counter/Counter";
import Time from "./components/Time/Time";
import Destructuring from "./components/Destructuring/Destructuring";
import EventHandling from "./components/EventHandling/EventHandling";
import ComplexState from "./components/ComplexState/ComplexState";

function App() {
  const createCard = (contact) => {
    return (
      <Card
        key={contact.id}
        id={contact.id}
        name={contact.name}
        imgURL={contact.imgURL}
        phone={contact.phone}
        email={contact.email}
      />
    );
  };

  return (
    <Router>
      <div className="App">
        <Link to="/">
          <h1>
            <span className="logo" aria-label="react" role="img">
              🌐
            </span>
            React Practice
          </h1>
        </Link>

        <Switch>
          <Route path="/FirstChallenge">
            <FirstChallenge />
          </Route>
          <Route path="/SecondChallenge">
            <SecondChallenge />
          </Route>
          <Route path="/ThirdChallenge">
            <ThirdChallenge />
          </Route>
          <Route path="/FourthChallenge">
            <FourthChallenge />
          </Route>
          <Route path="/importExport">
            <h3>import/export</h3>
            <ul>
              <li>{PI}</li>
              <li>{DOUBLE_PI}</li>
              <li>{TRIPLE_PI}</li>
              <li>{fixedPI(PI)}</li>
            </ul>
          </Route>
          <Route path="/importExportChallenge">
            <h3>import/export Challenge</h3>
            <ul>
              <li>{add(1, 2)}</li>
              <li>{multiply(2, 3)}</li>
              <li>{subtract(7, 2)}</li>
              <li>{divide(5, 2)}</li>
            </ul>
          </Route>
          <Route path="/Cards">
            <h1 className="heading">My Contacts</h1>
            {contacts.map(createCard)}
          </Route>
          <Route path="/Emojipedia">
            <Emojipedia />
          </Route>
          <Route path="/Keeper">
            <Keeper />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Register">
            <Register />
          </Route>
          <Route path="/Counter">
            <Counter />
          </Route>
          <Route path="/Time">
            <Time />
          </Route>
          <Route path="/Destructuring">
            <Destructuring />
          </Route>
          <Route path="/EventHandling">
            <EventHandling />
          </Route>
          <Route path="/ComplexState">
            <ComplexState />
          </Route>

          <Route path="/">
            <Navbar />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
