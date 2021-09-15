import React from 'react'

const Logo = (props) => {
    
    return (
       <header><h1>{props.appName}</h1>
       <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt="pokedex" onClick={props.logWhenClicked}/>
       </header>);
  };



  export default Logo;