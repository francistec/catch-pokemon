import React from 'react';
import './table.css';

export const List = ({pokemonList}) => {
    return (
        <>
            <table className="fl-table" id="pokemon-list">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Picture</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {pokemonList.length ? 
                        pokemonList.map(pokemon=>(
                                <tr key={pokemon.id}>
                                    <td>{pokemon.id}</td>
                                    <td>
                                        <img height="48" src={pokemon.image} alt={pokemon.id}/>
                                    </td>
                                    <td>{pokemon.name}</td>
                                </tr>
                        )): <tr >
                            <td colSpan="3">No Pokemons captured yet</td>
                        </tr>}
                </tbody>
            </table>
            
        </>
    );
}
