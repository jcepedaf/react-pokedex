import React from 'react';
import Logo from './Logo';
import BestPokemon from './BestPokemon';
import CaughtPokemon from './CaughtPokemon';
import PokemonMovesSelector from './PokemonMovesSelector'

export function App() {
  const abilities = ['Anticipation', 'Adaptability', 'Run-Away'];
  const date = new Date().toLocaleDateString();
  
  const logWhenClicked = () => {
    console.log("it doesn't matter what the message is")
  };
  return (
    <div>
      <Logo appName="Pokedex" logWhenClicked={logWhenClicked}/>
      <CaughtPokemon date={date}/>
      <PokemonMovesSelector/>
      <BestPokemon abilities={abilities} />
      </div>
  )
}




export default App;
