import React from "react";
const ScoreBoard = ({ Score, highScore }) => {
  return (
    <div className="container-fluid scoreContinaer">
      <div className="score">
        <h2>Score: {Score}</h2>
        <div className="action">
          <button className="btn btn-primary visually-hidden">
            Action here
          </button>
        </div>
        <h2>Highscore: {highScore}</h2>
      </div>
    </div>
  );
};

export default ScoreBoard;
