import React from "react";
import "./style.css";
const Card = ({ title, img, onClick, id }) => {
  return (
    <div className="card Card" onClick={() => onClick(id)}>
      <img className="card-img-top" src={img} alt={title}></img>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
      </div>
    </div>
  );
};

export default Card;
