import { useEffect, useState } from "react";
import SelectCharacter from "./SelectCaracter";
function LoadEnemyPokemon({ url }) {
  const [pokemon, setPokemon] = useState();
  const [selectButton, setSelectbutton] = useState(false);
  function handleClick() {
    setSelectbutton(true);
  }
  useEffect(() => {
    async function displayPokemon() {
      //THIS
      const data = await fetch(url);
      const currentLocation = await data.json();
      const randomAreaIndex = Math.floor(
        Math.random() * currentLocation.areas.length
      );
      const areaUrl = currentLocation.areas[randomAreaIndex].url;
      const areaData = await fetch(areaUrl);
      const area = await areaData.json();
      const encounters = area["pokemon_encounters"];
      const randomPokemonIndex = Math.floor(Math.random() * encounters.length);
      const encounterObject = encounters[randomPokemonIndex].pokemon;
      const encounterObjectUrl = encounterObject.url;
      const pokemonData = await fetch(encounterObjectUrl);
      const pokemonObject = await pokemonData.json();

      setPokemon(pokemonObject);
    }
    displayPokemon();
  }, []);

  return (
    <>
      {selectButton ? (
        <SelectCharacter />
      ) : (
        <div>
          <h3 id="enemy-pokemon-name">{pokemon && pokemon.name}</h3>
          <img
            id="enemy-pokemon-img"
            src={pokemon && pokemon.sprites["front_default"]}
          />
          <button onClick={handleClick}>Select your pokemon</button>
        </div>
      )}
    </>
  );
}

export default LoadEnemyPokemon;
