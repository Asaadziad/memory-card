import React from "react";
const ScoreBoard = ({ Score }) => {
  return (
    <div className="container-fluid">
      <h2>Score: {Score}</h2>
    </div>
  );
};

export default ScoreBoard;
