import React, {useState} from 'react'

const CaughtPokemon = (props) => {
  const [caught, setCaught] = useState([]);
  const catchPokemon = () => { 
    const pokemons = ["Pikachu", "Snorlax", "Bulbasur", "Charizard", "Mew", "Mewtwo", "Pidgey"];
    const random = Math.floor(Math.random() * pokemons.length);
    setCaught(caught.concat(pokemons[random])) 
  };
 
    return (
      <>
      <button onClick={catchPokemon}>Catch!!!</button>
      <p>Caught {caught.length} Pokémon on {props.date}</p>
      <ul>
        {caught.map((pokemon, index) => <li key={index}>{pokemon}</li>)}
      </ul>
      </>
 
    )
  } 

  
  export default CaughtPokemon;