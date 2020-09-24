import React from 'react';

export const SearchBox = ({ actions, error }) => {

  
    const handleInput = event => { 
        actions.setPokemonSearch({
            name: event.target.value
        });
    } 

    const handleSearch = event => { 
        actions.actionSearchPokemon();
    } 


    return (
        <>
          
            <div className="form-control">
                <label>Name</label>
                <input onKeyUp={handleInput} type="text" placeholder="Catch your pokemon" />
                <button onClick={handleSearch}>catch</button>
            </div>
            {error !== "" ?
                <div class="error-text">{error}</div> : <></>
            }
        </>
    );
}
