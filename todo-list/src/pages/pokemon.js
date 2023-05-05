import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button} from "@mui/material";

export const Pokemon = () => {
    const [pokemon, setPokemon] = useState({});
    const [id, setId] = useState(1);

    const getPokemon = async (id) => {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const { name, sprites } = response.data;
            setPokemon({ name, image: sprites.front_default });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getPokemon(id);
    }, [id]);

    const handleClickNext = () => {
        setId(id === 151 ? 1 : id + 1);
    };

    const handleClickPrev = () => {
        setId(id === 151 ? 1 : id - 1);
    };

    return (
        <div>
            <>Find your favorite pokemon!</>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.image} alt={pokemon.name} />
                <Button onClick={handleClickPrev}
                variant="contained"
                className="todo-btn"
                color="success"
                >Previous Pokemon
                </Button>
                <Button onClick={handleClickNext}
                variant="contained"
                className="todo-btn"
                color="success"
                >Next Pokemon
                </Button>
        </div>
    );
};
export default Pokemon;