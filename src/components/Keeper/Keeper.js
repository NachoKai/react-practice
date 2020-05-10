import React from "react";
import "./notes";
import "./Keeper.css";
import Header from "./Header";
import Note from "./Note";
import notes from "./notes";

const Keeper = () => {
  function createNote(notes) {
    return <Note key={notes.key} title={notes.title} content={notes.content} />;
  }

  return (
    <div className="keeper">
      <Header />
      {notes.map(createNote)}
    </div>
  );
};

export default Keeper;
