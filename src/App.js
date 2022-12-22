import ScoreBoard from "./components/ScoreBoard";
import React, { useState } from "react";
import CardBoard from "./components/CardBoard";

const App = () => {
  const [score, setScore] = useState(0);
  const incrementScore = () => {
    setScore(score + 1);
  };
  return (
    <div className="container">
      <ScoreBoard Score={score} />
      <CardBoard onClick={incrementScore} />
    </div>
  );
};

export default App;
