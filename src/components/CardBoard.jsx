import React, { useEffect, useState } from "react";
import Pokemons from "./Pokemons/Pokemons";
import "./style.css";

const CardBoard = ({ level, onClick }) => {
  const pokemonsArr = [...Array(level * 4).keys()];

  return (
    <div className="card-container">
      {pokemonsArr.map((item) => {
        return (
          <Pokemons
            key={item}
            id={item + 1}
            onClick={onClick}
            pokemonArr={pokemonsArr}
          />
        );
      })}
    </div>
  );
};

export default CardBoard;
