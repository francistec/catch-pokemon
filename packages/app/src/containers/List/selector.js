import _ from 'lodash';

export const getAllPokemons = state => {
    return _.get(state, 'listBox', []);
};
