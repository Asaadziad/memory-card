import React, { useState } from "react";
import CardBoard from "./CardBoard";
import ScoreBoard from "./ScoreBoard";

const Game = () => {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [level, setLevel] = useState(1);

  const handleClick = (pokemonArray) => {
    const shuffle = (arr) => {
      arr.sort((a, b) => {
        return Math.random() - 0.5;
      });
    };
    setScore(score + 1);
    shuffle(pokemonArray);
  };
  return (
    <div>
      <ScoreBoard Score={score} highScore={highScore} />
      <CardBoard level={level} onClick={handleClick} />
    </div>
  );
};

export default Game;
