import React from "react";
import "./Card.css";
import Avatar from "./Avatar";
import Detail from "./Detail";
import Name from "./Name";

const Card = (props) => {
  return (
    <div>
      <div className="card">
        <div className="top">
          <span>{props.id}</span>
          <Name name={props.name} />
          <Avatar img={props.imgURL} />
        </div>
        <div className="bottom">
          <Detail detailInfo={props.phone} />
          <Detail detailInfo={props.email} />
        </div>
      </div>
    </div>
  );
};

export default Card;
