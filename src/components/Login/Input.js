import React from "react";

const Input = (props) => {
  return (
    <input type={props.type} placeholder={props.placeholder} id={props.name} />
  );
};

export default Input;
