import React from 'react';
import Logo from './Logo';
import BestPokemon from './BestPokemon';
import CaughtPokemon from './CaughtPokemon';

export function App() {
  const abilities = ['Anticipation', 'Adaptability', 'Run-Away'];
  const date = new Date().toLocaleDateString();
  return (
    <div>
      <Logo appName="Pokedex"/>
      <CaughtPokemon date={date}/>
      <BestPokemon abilities={abilities} />
      </div>
  )
}


export default App;
