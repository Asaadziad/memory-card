import React from "react";
const ScoreBoard = ({ Score, highScore }) => {
  return (
    <div className="container-fluid">
      <h2>
        Score: {Score} || Highscore: {highScore}
      </h2>
    </div>
  );
};

export default ScoreBoard;
