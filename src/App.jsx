
import "./App.css";
import LoadEnemyPokemon from "./components/EnemyPokemon";
import HandleLocations from "./components/HandleLocations";
import Header from "./components/Header";
import { useState } from "react";
import SelectCaracter from "./components/SelectCaracter";

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
    setMyPokemon(selectedData)
  }

  console.log(myPokemon);
  return (

    <>
      <h1>
        <Header />
      </h1>
      {enemyPokemon ? (
        <SelectCaracter sendDataToApp = {handLeDataFromSelectC}/>
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
