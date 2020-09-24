import produce from 'immer';
import { handleActions } from 'redux-actions';
import * as listConstants from './constants';

const setContent = (state, action) => produce(state, ()=> {
    return action.payload;
} );


export const pokeListReducer = produce(
  handleActions({
    [listConstants.HANDLE_INPUT_ADD_POKEMON_REDUCER]: setContent,
  },
  false
  )
);