import * as listContants from './constants';

export const addPokemon = payload => ({
    type: listContants.HANDLE_INPUT_ADD_POKEMON_REDUCER,
    payload
});



export const listBindActions = { 
    addPokemon
};