import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card";

const Pokemons = ({ id, onClick, pokemonArr }) => {
  const [pokemon, setPokemon] = useState({ pokemonId: "", name: "", icon: "" });
  const getPokemon = async function () {
    try {
      const response2 = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/" + id
      );
      setPokemon({
        pokemonId: id,
        name: response2.data.forms[0].name,
        icon: response2.data.sprites.other["official-artwork"].front_default,
      });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getPokemon();
  });

  return (
    <>
      <Card
        title={pokemon.name}
        img={pokemon.icon}
        onClick={onClick}
        pokemonArr={pokemonArr}
      />
    </>
  );
};

export default Pokemons;
