import React, { useEffect, useState } from 'react';
import './App.css';
import Axios from 'axios';
import Cards from './Card';

function App() {
  const [pokemon, setPokemon] = useState({});
  const [pokemonName, setPokemonName] =
    useState('charizard');
  const [revealOnClick, setRevealOnClick] = useState(false);

  const searchPokemon = () => {
    Axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    )
      .then((response) => {
        setRevealOnClick(true);
        console.log('response', response);
        setPokemon({
          name: response.data.name,
          species: response.data.species.name,
          imageFront: response.data.sprites.front_default,
          imageBack: response.data.sprites.back_default,
          hp: response.data.stats[0].base_stat,
          attack: response.data.stats[1].base_stat,
          defence: response.data.stats[2].base_stat,
          height: response.data.height + ' ft',
          weight: response.data.weight + ' lbs',
          types: response.data.types.map((type, idx) => {
            if (response.data.types.length > 1) {
              return type.type.name + ', ';
            } else {
              return type.type.name;
            }
          })
        });
      })
      .catch((error) => {
        console.log(error);
      });
    setPokemonName('');
  };
  return (
    <div className='App'>
      <h1>Pokedex</h1>
      <div>
        <input
          type='text'
          value={pokemonName}
          onChange={(event) =>
            setPokemonName(event.target.value)
          }></input>
        <button onClick={searchPokemon}>Search</button>
        {revealOnClick && (
          <React.Fragment>
            <h2>{pokemon.name}</h2>

            <div className='App-Row'>
              <div className='App-ColLeft'>
                <Cards
                  height={pokemon.height}
                  hp={pokemon.hp}
                  weight={pokemon.weight}
                />

                <div>
                  <p>Species: {pokemon.species}</p>
                  <p>Type: {pokemon.types}</p>
                </div>
                <div>Stats:</div>
              </div>
              <div className='App-ColRight'>
                <img src={pokemon.imageFront} />
                <img src={pokemon.imageBack} />
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

export default App;
