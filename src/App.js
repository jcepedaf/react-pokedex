import React from 'react';

export function App() {
  return (
    <div>
      <Logo/>
      <CaughtPokemon/>
      <BestPokemon/>
      </div>
  )
}

// export function Logo() {

//   return (
//       <header><h1>Welcome to the Pokedex</h1>
//       <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt="pokedex" />
//       </header>
//   )
// }

 const Logo = () => {
   const appName = "Pokedex";
   return (
      <header><h1>{appName}</h1>
      <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt="pokedex" />
      </header>);
 }

 const CaughtPokemon = () => {
   const date = new Date().toLocaleDateString();

   return (
     <p>Caught 0 Pokémon on {date}</p>

   )
 } 

 const BestPokemon = () => {
   const abilities = ['Anticipation', 'Adaptability', 'Run-Away'];
   return (
     <div>
       <p>
         <ul>
           {abilities.map(ability => <li>{ability}</li>)}
         </ul>
       </p>
     </div>

   )
 }

export default App;
