import * as searchBoxContants from './constants';



export const setPokemonToList = pokemon => ({
    type: searchBoxContants.SEARCH_POKEMON,
    pokemon
});

export const setPokemonSearch = payload => ({
    type: searchBoxContants.HANDLE_INPUT_SEARCH_SAGA,
    payload
})
  

export const searchboxBindActions = { setPokemonToList, setPokemonSearch };