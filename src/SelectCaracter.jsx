import { useState, useEffect } from "react"

function selectCaracter(){
    const usersPokemon = [
        "https://pokeapi.co/api/v2/pokemon/bulbasaur",
        "https://pokeapi.co/api/v2/pokemon/charizard",
        "https://pokeapi.co/api/v2/pokemon/poliwhirl"
    ]
const [pokemond1, setPokemon1] = useState(undefined);
const [pokemon2, setPokemon2] = useState(undefined);
const [pokemon3, setPokemon3] = useState(undefined)




    const [selectedCaracter, setSelectedCarater] = useState('');
    const handleClick = (e) =>{
        setSelectedCarater(e.target.url)
    }
useEffect(() => {
    async function fetchData(url) {
      const response = await fetch(url);
      const data = await response.json();
      
    }
      fetchData(selectCaracter);
  }, []);


  return
<>
<div>
    <h1 onClick={handleClick}  >Bulbasaur</h1>
     </div>
</>




}
export default selectCaracter