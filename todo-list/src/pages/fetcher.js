import React, { useState, useEffect } from "react";
import axios from "axios";

const FetchAllData = () => {
  const [data, setData] = useState({});
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pokemonList, setPokemonList] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`);
        setPokemonList(response.data.results);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    };

    fetchPokemon();
  }, [offset]);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${input.toLowerCase()}`);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const loadMorePokemon = () => {
    setOffset(offset + 20);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Search for a Pokemon by name:
          <input type="text" value={input} onChange={handleInputChange} />
        </label>
        <button type="submit">Search</button>
      </form>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : data.name ? (
        <div className="pokemon-container">
          <div className="pokemon-info">
            <img src={data.sprites.front_default} alt={`${data.name}`} />
            <div className="details">
              <h2>{data.name}</h2>
              <p>Height: {data.height / 10}m</p>
              <p>Weight: {data.weight / 10}kg</p>
            </div>
          </div>
          <div className="pokemon-moves">
            <h3>Moves:</h3>
            <ul>
              {data.moves.slice(0, 5).map((move) => (
                <div key={move.move.name}>{move.move.name}</div>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <>
          <p>Search for a Pokemon above to see its details</p>
          <ul>
            {pokemonList.map((pokemon) => (
              <div key={pokemon.name}>
                <button>{pokemon.name}</button>
              </div>
            ))}
          </ul>
          {pokemonList.length === 0 && <p>No results found.</p>}
          <button onClick={loadMorePokemon}>Load More Pokemon</button>
        </>
      )}
    </div>
  );
};

export default FetchAllData;