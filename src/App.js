import ScoreBoard from "./components/ScoreBoard";
import React, { useState } from "react";
import CardBoard from "./components/CardBoard";

const App = () => {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  return (
    <div className="container">
      <ScoreBoard Score={score} highScore={highScore} />
      <CardBoard
        score={score}
        setScore={setScore}
        highScore={highScore}
        setHighScore={setHighScore}
      />
    </div>
  );
};

export default App;
