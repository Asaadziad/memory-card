import React from "react";
import Card from "./Card";
import "./style.css";
const CardBoard = ({ onClick }) => {
  const names = ["Test", "Test2", "test3", "test4"];
  return (
    <div className="card-container">
      {names.map((item) => {
        return <Card title={item} onClick={onClick} />;
      })}
    </div>
  );
};

export default CardBoard;
