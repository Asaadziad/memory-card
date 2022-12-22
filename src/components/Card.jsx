import React from "react";
import "./style.css";
const Card = ({ title, onClick }) => {
  return (
    <div className="card Card" onClick={onClick}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
      </div>
    </div>
  );
};

export default Card;
