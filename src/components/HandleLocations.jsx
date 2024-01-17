import { useState, useEffect } from 'react';

function HandleLocation() {
  const LocationUrl = 'https://pokeapi.co/api/v2/location';
  const [locations, setLocations] = useState(null);
  const [selectedArenaUrl, setSelectedArenaUrl] = useState(null); // Add state for selected arena URL

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(LocationUrl);
      const data = await response.json();
      setLocations(data);
    }
    fetchData();
  }, []);

  const arenas = locations?.results;
  const arenaNames = arenas?.map(arena => arena.name);
  const arenaUrls = arenas?.map(arena => arena.url);

  function handleLocationClick(index) {
    setSelectedArenaUrl(arenaUrls[index]); // Update the selected URL in state
  }

  return (
    <div>
      <ol>
        {arenaNames ? (
          arenaNames.map((name, index) => (
            <li
              id={name.slice(0, 2)}
              key={index}
              onClick={() => {
                const randomArenaIndex = Math.round(Math.random() * Object.keys(arenaUrls).length)

                handleLocationClick(randomArenaIndex)
                
                
              }} // Pass the index to the click handler
            >
              {name}
            </li>
          ))
        ) : (
          <li>Loading...</li>
        )}
      </ol>
      {selectedArenaUrl && (
        <p id="show-location">Selected Arena URL: {selectedArenaUrl}</p> // Display the selected URL if it's set
      )}
    </div>
  );
}

export default HandleLocation;
