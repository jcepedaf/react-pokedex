import React, {useState} from 'react'

const CaughtPokemon = (props) => {
  const [caught, setCaught] = useState([]);
  const [error, setError] = useState([]);
  const [pokemonNameInput, setPokemonNameInput] = useState("");

  const catchPokemon = () => { 
    if(pokemonNameInput === "") {
      setError(true);
    } else {
      setError(false);
      setCaught(caught.concat(pokemonNameInput));
      setPokemonNameInput("");
    }
     
  };
 
    return (
      <>
      <input type="text" value={pokemonNameInput} onChange={(e)=>setPokemonNameInput(e.target.value)}/>
      <button onClick={catchPokemon}>Catch!!!</button>
      {error ? <p>hubo un error</p> : null}
      <p>Caught {caught.length} Pokémon on {props.date}</p>
      <ul>
        {caught.map((pokemon, index) => <li key={index}>{pokemon}</li>)}
      </ul>
      </>
 
    )
  } 

  
  export default CaughtPokemon;