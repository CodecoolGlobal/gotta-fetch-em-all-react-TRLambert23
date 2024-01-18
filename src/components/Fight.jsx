import { useState } from "react";

function Fight({ enemy, userPokemon, onBackClicked }) {
  const enemyPokemon = enemy;
  const myPokemon = userPokemon;
  const [enemyHp, setEnemyHp] = useState(enemyPokemon.stats[0].base_stat);
  const [userHp, setUserHp] = useState(myPokemon.stats[0].base_stat);
  const [userTurn, setUserTurn] = useState(true);
  const [finished, setFinished] = useState(false);

  const enemyA = enemyPokemon.stats[1].base_stat;
  const userA = myPokemon.stats[1].base_stat;
  const enemyD = enemyPokemon.stats[2].base_stat;
  const userD = myPokemon.stats[2].base_stat;
  let z = (() => {
    let random = Math.floor(Math.random() * 255);
    return random >= 217 ? random : Math.floor(Math.random() * 255);
  })();

  function handleFight() {
    if (userTurn) {
      handleBattle(handleFormula(userA, userD, z), enemyHp); 
      setUserTurn(false);
      enemyHp <= 0 || userHp <= 0 ? setFinished(true) : setFinished(false);
    } else {
      handleBattle(handleFormula(enemyA, enemyD, z), userHp); 
      setUserTurn(true);
      enemyHp <= 0 || userHp <= 0 ? setFinished(true) : setFinished(false);
    }
  }

  function handleBattle(dmg, hp) {
    userTurn ? setEnemyHp(hp - dmg) : setUserHp(hp - dmg);
  }

  const handleBackClick = () => {
    onBackClicked();
    
  };

  function handleFormula(b, d, z) {
    const formula = ((((2 / 5 + 2) * b * 60) / d / 50 + 2) * z) / 255;
    return formula;
  }

  return (
    <div>
      {finished && enemyHp <= 0 ? (
        <div>
          <h2>You WIN!</h2>
          <button onClick={handleBackClick}>Back to locations</button>
        </div>
      ) : finished && userHp <= 0 ? (
        <div>
          <h2>You LOSE!</h2>
          <button onClick={handleBackClick}>Back to locations</button>
        </div>
      ) : (
        <>
          <h2 id="enemy-fighter">{enemyPokemon.name}</h2>
          <h3 id="enemy-hp">HP: {Math.floor(enemyHp)}</h3>
          <img
            id="enemy-fighter-img"
            src={enemyPokemon && enemyPokemon.sprites["front_default"]}
            alt={enemyPokemon && enemyPokemon.name}
          />
          <h2 id="user-fighter">{myPokemon.name}</h2>
          <h3 id="user-hp">HP: {Math.floor(userHp)}</h3>
          <img
            id="user-fighter-img"
            src={myPokemon && myPokemon.sprites["front_default"]}
            alt={myPokemon && myPokemon.name}
          />
          <button onClick={handleFight}>Fight</button>
        </>
      ) }
    </div>
  );
}
export default Fight;
