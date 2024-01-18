import { useState, useEffect } from "react";

function SelectCaracter({ sendDataToApp }) {
  const usersPokemon = [
    "https://pokeapi.co/api/v2/pokemon/bulbasaur",
    "https://pokeapi.co/api/v2/pokemon/charizard",
    "https://pokeapi.co/api/v2/pokemon/poliwhirl",
  ];

  const [pokemon1, setPokemon1] = useState(undefined);
  const [pokemon2, setPokemon2] = useState(undefined);
  const [pokemon3, setPokemon3] = useState(undefined);

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

  const handleClick = (pokemon) => {
    sendDataToApp(pokemon);
  };

  return (
    <>
      <div>
        <h3 id="pokemon1" key={pokemon1?.name}>
          {pokemon1 && pokemon1.name}
        </h3>
        <img
          id="enemy-pokemon-img"
          src={pokemon1 && pokemon1.sprites["front_default"]}
          alt={pokemon1 && pokemon1.name}
        />
        <button onClick={() => handleClick(pokemon1)}>Select</button>
      </div>
      <div>
        <h3 id="pokemon2" key={pokemon2?.name}>
          {pokemon2 && pokemon2.name}
        </h3>
        <img
          id="enemy-pokemon-img"
          src={pokemon2 && pokemon2.sprites["front_default"]}
          alt={pokemon2 && pokemon2.name}
        />
        <button onClick={() => handleClick(pokemon2)}>Select</button>
      </div>
      <div>
        <h3 id="pokemon3" key={pokemon3?.name}>
          {pokemon3 && pokemon3.name}
        </h3>
        <img
          id="enemy-pokemon-img"
          src={pokemon3 && pokemon3.sprites["front_default"]}
          alt={pokemon3 && pokemon3.name}
        />
        <button onClick={() => handleClick(pokemon3)}>Select</button>
      </div>
    </>
  );
}

export default SelectCaracter;
