import { useEffect, useState } from "react";
import SelectCharacter from "./SelectCharacter";
import HandleLocation from "./HandleLocations";

function LoadEnemyPokemon({ url, sendDataToApp, onBackClicked }) {
  const [pokemon, setPokemon] = useState();
  const [selectButton, setSelectbutton] = useState(false);
  const [isLocationEmpty, setIsLocationEmpty] = useState(false);
  const [backClicked, setBackClicked] = useState(false);

  const handleClick = () => {
    setSelectbutton(true);
    sendDataToApp(pokemon && pokemon);
  };

  const handleBackClick = () => {
    onBackClicked();
  };

  useEffect(() => {
    async function displayPokemon() {
      const data = await fetch(url);
      const currentLocation = await data.json();
      const randomAreaIndex = Math.floor(
        Math.random() * currentLocation.areas.length
      );
      if (currentLocation.areas[randomAreaIndex]?.url) {
        const areaUrl = currentLocation.areas[randomAreaIndex].url;
        const areaData = await fetch(areaUrl);
        const area = await areaData.json();
        const encounters = area["pokemon_encounters"];
        const randomPokemonIndex = Math.floor(
          Math.random() * encounters.length
        );
        const encounterObject = encounters[randomPokemonIndex].pokemon;
        const encounterObjectUrl = encounterObject.url;
        const pokemonData = await fetch(encounterObjectUrl);
        const pokemonObject = await pokemonData.json();

        setPokemon(pokemonObject);
      } else {
        console.error("No pokemon found!");
        setIsLocationEmpty(true);
      }
    }
    displayPokemon();
  }, []);

  return (
    <>
      {backClicked ? (
        <HandleLocation />
      ) : selectButton ? (
        <SelectCharacter />
      ) : isLocationEmpty ? (
        <div>
          <h2>This location does not seem to have any pokémon</h2>
          <button onClick={handleBackClick}>Back</button>
        </div>
      ) : (
        <div>
          <h3 id="enemy-pokemon-name">Enemy pokemon: {pokemon && pokemon.name}</h3>
          <img
            id="enemy-pokemon-img"
            src={pokemon && pokemon.sprites["front_default"]}
            alt={pokemon && pokemon.name}
          />
          <button id="select-user-pokemon" onClick={handleClick}>
            Select your pokemon
          </button>
        </div>
      )}
    </>
  );
}

export default LoadEnemyPokemon;
