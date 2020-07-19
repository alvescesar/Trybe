import React from 'react';
import ReactDOM from 'react-dom';

import pokemons from './data';
import './index.css'

function Header() {
  return (
    <h1>Pokedex</h1>
  );
}

function Pokemon(props) {
  const {name, type, averageWeight, image} = props.pokemon;

  return (
    <div className="pokemon">
      <div>
        <p><strong>{name}</strong></p>
        <p>{type}</p>
        <p>{`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
      </div>
      <img src={image} alt={name} />
    </div>
  );
}

function Pokedex() {
  const pokeMap = pokemons.map((pokemon) => {
    return (
      <Pokemon pokemon={pokemon} />
    );
  })

  return (
    <div className={"pokedex"}>
      {pokeMap}
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Pokedex />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
