import React from 'react';

export const SearchBox = ( {addPokemon }) => {
    console.log(addPokemon);
    return (
        <>
            <div className="form-control">
                <label>Name</label>
                <input type="text" placeholder="Search your pokemon" />
                <button onClick={() => addPokemon(2)}>Catch NOW!</button>
            </div>
        </>
    );
}
