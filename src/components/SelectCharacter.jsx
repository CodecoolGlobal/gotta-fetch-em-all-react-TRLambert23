import { useState, useEffect } from "react";

function selectCharacter() {
  const usersPokemon = [
    "https://pokeapi.co/api/v2/pokemon/bulbasaur",
    "https://pokeapi.co/api/v2/pokemon/charizard",
    "https://pokeapi.co/api/v2/pokemon/poliwhirl",
  ];

  const [pokemon1, setPokemon1] = useState(undefined);
  const [pokemon2, setPokemon2] = useState(undefined);
  const [pokemon3, setPokemon3] = useState(undefined);

  const [selectedCharacter, setSelectedCharater] = useState("");

  useEffect(() => {
    async function fetchData(url) {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    }
    async function setPokemons() {
      setPokemon1(await fetchData(usersPokemon[0]));
      setPokemon2(await fetchData(usersPokemon[1]));
      setPokemon3(await fetchData(usersPokemon[2]));
    }
    setPokemons();
  }, []);

  console.log(pokemon1);
  return (
    <>
      <div>
        <h3 id="pokemon1">{pokemon1 && pokemon1.name}</h3>
        <img
          id="enemy-pokemon-img"
          src={pokemon1 && pokemon1.sprites["front_default"]}
        />
        <button>Select</button>
      </div>
      <div>
        <h3 id="pokemon1">{pokemon2 && pokemon2.name}</h3>
        <img
          id="enemy-pokemon-img"
          src={pokemon2 && pokemon2.sprites["front_default"]}
        />
        <button>Select</button>
      </div>
      <div>
        <h3 id="pokemon1">{pokemon3 && pokemon3.name}</h3>
        <img
          id="enemy-pokemon-img"
          src={pokemon3 && pokemon3.sprites["front_default"]}
        />
        <button>Select</button>
      </div>
    </>
  );
}
export default selectCharacter;
