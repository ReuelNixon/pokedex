import { useState, useEffect } from 'react';
import './App.css';
import CardList from './components/cardList';
import SearchBox from './components/search';

function App() {
  const [pokemons, setPokemons] = useState([])
  const [filteredPokemons, setFilteredPokemons] = useState(pokemons)

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0')
      .then(response => response.json())
      .then(response => {
        for (let i = 0; i < response.results.length; i++) {
          response.results[i].id = response.results[i].url.split('/')[6]
          // response.results[i].image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${response.results[i].id}.png`
          response.results[i].image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${response.results[i].id.padStart(3, '0')}.png`
        }
        setPokemons(response.results)
        setFilteredPokemons(response.results)
      })
  }, []);

  return (
    <div className="App">
      <h1>Pokédex</h1>
      <SearchBox pokemons={pokemons} setFilteredPokemons={setFilteredPokemons} />
      <CardList pokemons={filteredPokemons} />
    </div>
  );
}

export default App;
