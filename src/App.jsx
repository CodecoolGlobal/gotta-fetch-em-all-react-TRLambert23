import './App.css';
import LoadEnemyPokemon from './components/EnemyPokemon';
import HandleLocations from './components/HandleLocations'
import Header from './components/Header'
import { useState } from 'react';

function App() {
  const [chosenLocation, setChosenLocation] = useState();

  function toggleLocation(url) {
    setChosenLocation(url);
  }

  return (
    <body>
      <h1>
        <Header />
      </h1>
      {chosenLocation ? (
        <LoadEnemyPokemon url={chosenLocation} />
      ) : (
        <HandleLocations OnPick={toggleLocation} />
      )}
    </body>
  );
}

export default App;
