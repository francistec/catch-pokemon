import produce from 'immer';
import { handleActions } from 'redux-actions';
import * as AppConstants from './constants';

const setPokemon = (state, action) => produce(state, ()=> action.payload );

export const pokemonReducer = produce(
  handleActions({
    [AppConstants.APP_LOADING]: setPokemon
  },
  false
  )
);