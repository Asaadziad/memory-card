import React from "react";
const ScoreBoard = ({ Score, level, highScore }) => {
  return (
    <div className="container-fluid scoreContinaer">
      <div className="score">
        <h2>Score: {Score}</h2>
        <div className="action">
          <h2>Level: {level}</h2>
        </div>
        <h2>Highscore: {highScore}</h2>
      </div>
    </div>
  );
};

export default ScoreBoard;
