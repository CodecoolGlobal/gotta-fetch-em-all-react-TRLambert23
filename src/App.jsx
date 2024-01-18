import "./App.css";
import LoadEnemyPokemon from "./components/EnemyPokemon";
import HandleLocations from "./components/HandleLocations";
import Header from "./components/Header";
import { useState } from "react";
import SelectCaracter from "./components/SelectCaracter";
function App() {
  const [chosenLocation, setChosenLocation] = useState();

  function toggleLocation(url) {
    setChosenLocation(url);
  }

  return (
    <>
      <h1>
        <Header />
      </h1>

      {chosenLocation ? (
        <LoadEnemyPokemon url={chosenLocation} />
      ) : (
        <HandleLocations OnPick={toggleLocation} />
      )}
    </>
  );
}

export default App;
