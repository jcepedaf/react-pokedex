import React from 'react'

const CaughtPokemon = () => {
    const date = new Date().toLocaleDateString();
 
    return (
      <p>Caught 0 Pokémon on {date}</p>
 
    )
  } 

  
  export default CaughtPokemon;