import * as searchBoxContants from './constants';

export const setPokemonToList = pokemon => ({
    type: searchBoxContants.SEARCH_POKEMON,
    pokemon
});

export const setPokemonSearch = payload => ({
    type: searchBoxContants.HANDLE_INPUT_SEARCH_SAGA,
    payload
});

export const actionSearchPokemon = payload => ({
    type: searchBoxContants.HANDLE_SEARCH_SAGA
});

export const actionSearchError = payload => ({
    type: searchBoxContants.HANDLE_INPUT_ERROR_REDUCER,
    payload
});
  

export const searchboxBindActions = { 
    actionSearchPokemon,
    setPokemonToList, 
    setPokemonSearch,
    actionSearchError
};