import { useState, useEffect } from 'react';
import EnemyPokemon from './EnemyPokemon';

function HandleLocation({OnPick}) {
  const locationUrl = 'https://pokeapi.co/api/v2/location';
  const [locations, setLocations] = useState(null);
 
  const [showEnemy, setShowEnemy] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(locationUrl);
      const data = await response.json();
      setLocations(data.results); 
    }
    fetchData();
  }, []);



  return (
    <div>
      {showEnemy ? (null) : (<ol>
        {locations ? (
          locations.map((location) => (
            <li
              id={location.name.slice(0, 2)}
              key={location.url}
              onClick={() => {
                OnPick(location.url)
              }} 
            >
              {location.name}
            </li>
          ))
        ) : (
          <li>Loading...</li>
        )}
      </ol>)} 

    </div>
  );
}

export default HandleLocation;
