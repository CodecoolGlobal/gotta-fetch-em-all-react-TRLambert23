import "./App.css";
import LoadEnemyPokemon from "./components/EnemyPokemon";
import HandleLocations from "./components/HandleLocations";
import Header from "./components/Header";
import { useState } from "react";
import SelectCharacter from "./components/SelectCharacter";
import Fight from "./components/Fight";

function App() {
  const [chosenLocation, setChosenLocation] = useState();
  const [enemyPokemon, setEnemyPokemon] = useState();
  const [myPokemon, setMyPokemon] = useState();

  function toggleLocation(location) {
    setChosenLocation(location);
  }

  const handleDataFromEnemy = (data) => {
    setEnemyPokemon(data);
  };

  const handLeDataFromSelectC = (selectedData) => {
    setMyPokemon(selectedData);
  };

  return (
    <>
      <img id="poke-logo" src="https://i.ibb.co/4FgwXhB/pokebgless.png"/>
      <h1>
        <Header
          title={chosenLocation ? chosenLocation.name.replace(/-/g, ' ') : "Select your location"}
        />
      </h1>
      {myPokemon ? (
        <Fight
          enemy={enemyPokemon}
          userPokemon={myPokemon}
          onBackClicked={() => {
            setMyPokemon(null);
            setEnemyPokemon(null);
            setChosenLocation(null)
          }}
        />
      ) : enemyPokemon ? (
        <SelectCharacter sendDataToApp={handLeDataFromSelectC} />
      ) : chosenLocation ? (
        <LoadEnemyPokemon
          url={chosenLocation.url}
          sendDataToApp={handleDataFromEnemy}
          onBackClicked={() => {
            setChosenLocation(null);
          }}
        />
      ) : (
        <HandleLocations OnPick={toggleLocation} />
      )}
    </>
  );
}

export default App;
