import "./App.css";
import LoadEnemyPokemon from "./components/EnemyPokemon";
import HandleLocations from "./components/HandleLocations";
import Header from "./components/Header";
import { useState } from "react";
import SelectCharacter from "./components/SelectCharacter";

function App() {
  const [chosenLocation, setChosenLocation] = useState();
  const [enemyPokemon, setEnemyPokemon] = useState();
  const [myPokemon, setMyPokemon] = useState();

  function toggleLocation(url) {
    setChosenLocation(url);
  }

  const handleDataFromEnemy = (data) => {
    setEnemyPokemon(data);
  };

  const handLeDataFromSelectC = (selectedData) => {
    setMyPokemon(selectedData);
  };

  return (
    <>
      <h1>
        <Header />
      </h1>
      {enemyPokemon ? (
        <SelectCharacter sendDataToApp={handLeDataFromSelectC} />
      ) : chosenLocation ? (
        <LoadEnemyPokemon
          url={chosenLocation}
          sendDataToApp={handleDataFromEnemy}
        />
      ) : (
        <HandleLocations OnPick={toggleLocation} />
      )}
    </>
  );
}

export default App;
