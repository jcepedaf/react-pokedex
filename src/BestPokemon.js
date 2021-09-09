import React from 'react'

const BestPokemon = () => {
    const abilities = ['Anticipation', 'Adaptability', 'Run-Away'];
    return (
      <div>
        <p></p>
          <ul>
            {abilities.map((ability,i) => <li key={i} >{ability}</li>)}
          </ul>
        
      </div>
 
    )
  }

  export default BestPokemon;