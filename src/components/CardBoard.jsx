import React from "react";
import Pokemons from "./Pokemons/Pokemons";
import "./style.css";

const CardBoard = ({ pokemonsArr, onClick }) => {
  return (
    <div className="card-container">
      {pokemonsArr.map((item) => {
        return <Pokemons key={item} id={item + 1} onClick={onClick} />;
      })}
    </div>
  );
};

export default CardBoard;
