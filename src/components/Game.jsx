import React, { useState } from "react";
import CardBoard from "./CardBoard";
import ScoreBoard from "./ScoreBoard";
import LoseScreen from "./LoseScreen/LoseScreen";

const Game = () => {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [pokemonsArr, setPokemonsArr] = useState([...Array(level * 5).keys()]);
  const [clickedPokemon, setClickedPokemon] = useState([]);
  const [gameLost, setGameLost] = useState(false);

  const checkLevelWon = (newClicked) => {
    const test = newClicked.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    const test2 = pokemonsArr
      .map((item) => item + 1)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log(test);
    console.log(test2);
    return test2 === test && newClicked.length === pokemonsArr.length;
  };
  const handleClick = (index) => {
    if (clickedPokemon.includes(index)) {
      setGameLost(true);
    } else {
      setClickedPokemon([...clickedPokemon, index]);
      setScore(score + 1);
      setHighScore(score > highScore ? score : highScore);
      if (checkLevelWon([...clickedPokemon, index])) {
        setLevel(level + 1);
        reset(level + 1);
        return;
      }
      setPokemonsArr(
        pokemonsArr.sort((a, b) => {
          return Math.random() - 0.5;
        })
      );
    }
  };

  const reset = (level) => {
    setGameLost(false);
    setClickedPokemon([]);
    setScore(0);
    setLevel(level);
    setPokemonsArr([...Array(level * 5).keys()]);
  };
  return (
    <>
      {gameLost && (
        <>
          <LoseScreen reset={() => reset(1)} />
        </>
      )}
      {!gameLost && (
        <>
          <ScoreBoard Score={score} level={level} highScore={highScore} />
          <CardBoard
            level={level}
            pokemonsArr={pokemonsArr}
            onClick={handleClick}
          />
        </>
      )}
    </>
  );
};

export default Game;
