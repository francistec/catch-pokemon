import React from 'react';

export const SearchBox = ({ actions, pokemons }) => {


    const handleInput = event => { 
        actions.setPokemonSearch({
            name: event.target.value
        });
    } 

    return (
        <>
            <div className="form-control">
                <label>Name</label>
                <input onKeyUp={handleInput} type="text" placeholder="Search your pokemon" />
                <button onClick={() => actions.setPokemonToList(2)}>Catch NOW!</button>
            </div>
        </>
    );
}
