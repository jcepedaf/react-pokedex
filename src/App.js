import React from 'react';

export function App() {
  return (
    <div>
      <Logo/>
      </div>
  )
}

export function Logo() {

  return (
      <header><h1>Welcome to the Pokedex</h1>
      <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt="pokedex" />
      </header>
  )
}



export default App;
