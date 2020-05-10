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
          <h1>🌐 React Angela Yu</h1>
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

          <Route path="/">
            <Navbar />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
