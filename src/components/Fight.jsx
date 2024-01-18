function Fight({ enemy, userPokemon }) {
  const enemyPokemon = enemy;
  const myPokemon = userPokemon;

  console.log(userPokemon);
  
  return (
    <div>
      <h3 id="enemy-fighter" key={enemyPokemon.name}>
        {enemyPokemon.name}
      </h3>
      <img
        id="enemy-fighter-img"
        src={enemyPokemon && enemyPokemon.sprites["front_default"]}
        alt={enemyPokemon && enemyPokemon.name}
      />
        <h3 id="user-fighter" key={myPokemon.name}>
          {myPokemon.name}
        </h3>
        <img
          id="user-fighter-img"
          src={myPokemon && myPokemon.sprites["front_default"]}
          alt={myPokemon && myPokemon.name}
        />
    </div>
  );
}

export default Fight;
