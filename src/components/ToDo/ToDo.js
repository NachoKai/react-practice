import React, { useState } from "react";
import "./ToDo.css";

const ToDo = () => {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(e) {
    const newText = e.target.value;
    setText(newText);
  }

  function handleClick() {
    if (text !== "") {
      setItems((prevItems) => {
        return [...prevItems, text];
      });
      setText("");
    } else {
      return () => {};
    }
  }

  return (
    <div className="container-todo">
      <div className="heading-todo">
        <h1>To-Do List</h1>
      </div>
      <div className="form-todo">
        <input onChange={handleChange} type="text" value={text} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDo;
