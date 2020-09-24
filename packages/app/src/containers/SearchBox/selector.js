import _ from 'lodash';

// export const getAllPokemons = state => _.get(state, 'pokemons', []);
export const getNameForSearch = state => _.get(state, 'searchBox.name', '');
export const getErrorSearch = state => _.get(state, 'searchBox.error', '');