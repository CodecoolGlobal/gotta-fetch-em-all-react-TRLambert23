import React, { useState, useEffect } from 'react';
import './App.css'

function App() {
const pokemonLocationUrl = 'https://pokeapi.co/api/v2/location'
const [locations, setLocations] = useState(null)

useEffect(() =>{
async function fetchData(){
  const data = await fetch(pokemonLocationUrl)
  const pokemonLocations = await data.json();
  setLocations(pokemonLocations)
}
fetchData()
}, [])



  return (
    <>
    <div>
    {
     locations.results.map(result =>
     result.name)}
    </div>
     
    </>
  )
}

export default App
