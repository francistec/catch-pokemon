import _ from 'lodash';

export const getAllPokemons = state => _.get(state, 'pokemons', []);