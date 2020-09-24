import produce from 'immer';
import { handleActions } from 'redux-actions';
import * as searchConstants from './constants';

const setContent = (state, action) => produce(state, ()=> action.payload );


export const pokemonReducer = produce(
  handleActions({
    [searchConstants.HANDLE_INPUT_SEARCH_REDUCER]: setContent,
  },
  false
  )
);