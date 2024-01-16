import React, { useState, useEffect } from 'react';

function HandleLocation() {
    const pokemonLocationUrl = 'https://pokeapi.co/api/v2/location';
  const [locations, setLocations] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(pokemonLocationUrl);
      const pokemonLocations = await data.json();
      setLocations(pokemonLocations);
    }
    fetchData();
  }, []);

 
  const arenas = locations?.results; // Use optional chaining to handle null initially
  const arenaNames = arenas?.map(arena => arena.name); // Use optional chaining

  function handleLocationClick(e) {
    const arenaName = e.target.textContent 
    console.log(arenaName); 
  }

  return (
    <div>
      <ol>
        {arenaNames ? (
          arenaNames.map((name, index) => (
            <li id={name.slice(0,2)} key={index}
            onClick={handleLocationClick}
            >
            {name}</li>
          ))
        ) : (
          <li>Loading...</li>
        )}
      </ol>
    </div>
  );
}

export default HandleLocation