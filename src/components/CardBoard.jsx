import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./style.css";
import axios from "axios";

const CardBoard = ({ onClick }) => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function fetchPokemon() {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
      const pokeArr = response.data.results;
      let pokemonArr = [];
      for (let i = 0; i < pokeArr.length; i++) {
        const response2 = await axios.get(
          "https://pokeapi.co/api/v2/pokemon/" + (i + 1)
        );
        pokemonArr.push({
          id: i,
          name: response2.data.forms[0].name,
          imgUrl:
            response2.data.sprites.other["official-artwork"].front_default,
        });
      }
      setPokemon(pokemonArr);
    }
    fetchPokemon();
  }, []);

  return (
    <div className="card-container">
      {pokemon.map((item) => {
        return (
          <Card
            key={item.name}
            title={item.name}
            img={item.imgUrl}
            onClick={onClick}
          />
        );
      })}
    </div>
  );
};

export default CardBoard;
