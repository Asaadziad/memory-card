import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./style.css";
import axios from "axios";

const CardBoard = ({ score, setScore, highScore, setHighScore }) => {
  const [pokemon, setPokemon] = useState([]);
  const [clickedPokemons, setClickedPokemons] = useState([]);
  async function fetchPokemon() {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
      const pokeArr = await response.data.results;
      let pokemonArr = [];
      for (let i = 0; i < pokeArr.length; i++) {
        try {
          const response2 = await axios.get(
            "https://pokeapi.co/api/v2/pokemon/" + (i + 1)
          );
          pokemonArr.push({
            id: i,
            name: response2.data.forms[0].name,
            imgUrl:
              response2.data.sprites.other["official-artwork"].front_default,
          });
        } catch (error) {
          console.log(error);
        }
      }
      setPokemon(
        pokemonArr.sort((a, b) => {
          return 0.5 - Math.random();
        })
      );
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchPokemon();
  }, []);
  const checkPokemon = (pokemon) => {
    console.log(clickedPokemons);
    let test = clickedPokemons.filter((item) => {
      return item.id === pokemon.id;
    });
    if (test.length >= 1) {
      return true;
    }

    return false;
  };
  const handleClick = (pokemon) => {
    if (checkPokemon(pokemon)) {
      setScore(0);
      setClickedPokemons([]);
      fetchPokemon();
      console.log("you lost");
    } else {
      setScore(score + 1);
      setHighScore(highScore > score ? highScore : score);
      setClickedPokemons((prevPokemons) => [...prevPokemons, pokemon]);
      fetchPokemon();
    }
  };

  return (
    <div className="card-container">
      {pokemon.map((item) => {
        return (
          <Card
            key={item.name}
            title={item.name}
            img={item.imgUrl}
            pokemon={item}
            onClick={handleClick}
          />
        );
      })}
    </div>
  );
};

export default CardBoard;
