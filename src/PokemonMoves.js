import React from "react";
import { useState }  from "react";
import { useEffect }  from "react";


function PokemonMoves({pokemonId}) {
  const [pokemonData, setPokemonData] = useState(null);
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((res) => res.json())
      .then((pokemonData) => {
        setPokemonData(pokemonData);
      });
  }, [pokemonId]);
  if (pokemonData) {
    return (
      <div>
        <p>{pokemonData.name}'s moves:</p>
        <ul>
          {pokemonData.moves ? pokemonData.moves.map((move, index) => {
            return <li key={index}>{move.move.name}</li>;
          }): null }
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
export default PokemonMoves;
