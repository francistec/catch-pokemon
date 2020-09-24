import { Pokemon } from '@catch-pokemon/services';
import {  put,  takeLatest, select, call } from 'redux-saga/effects';
import {  
    HANDLE_INPUT_SEARCH_SAGA, 
    HANDLE_INPUT_SEARCH_REDUCER,
    HANDLE_SEARCH_SAGA,
    HANDLE_INPUT_ERROR_REDUCER
} from './constants';

import {
    HANDLE_INPUT_ADD_POKEMON_REDUCER

 } from '../List/constants';

 import  {
    getNameForSearch
 } from './selector';

import {
    getAllPokemons
} from '../List/selector';

 const searchPokemonInAPI = async(name) => {
    try {
        let response = await Pokemon.get(name).catch(err=>{
            return false;
        });
        return response;
    } catch(ex){
       return false;
    }
 };

function* handleInputSearch(payload) {

    yield put({
        type: HANDLE_INPUT_SEARCH_REDUCER,
        payload: payload.payload
    })
}

function* handleSearch(){
    const nameToSearch = yield select(getNameForSearch);
    let allPokemons = yield select(getAllPokemons);   
    if(!allPokemons){
        allPokemons = []
    } 


    let duplicated = false;
    for(var iterator = 0; iterator < allPokemons.length; iterator++){
        if(allPokemons[iterator].name === nameToSearch){
            duplicated = true;
        }
    }


    if(!duplicated){
        const response = yield call(searchPokemonInAPI, nameToSearch);
        if(!response){
            yield put({
                type: HANDLE_INPUT_ERROR_REDUCER,
                payload: { 
                    error: 'Pokemon not found',
                    name: nameToSearch
                }
            }); 
        } else {
            const newPokemons = [...allPokemons];
            newPokemons.push({
                id: response.id,
                name: response.name,
                image: response.sprites.other['official-artwork'].front_default
            });
            yield put({
                type: HANDLE_INPUT_ADD_POKEMON_REDUCER,
                payload: newPokemons
            });
        }
    } else {
        yield put({
            type: HANDLE_INPUT_ERROR_REDUCER,
            payload: { 
                error: 'Pokemon is already in list',
                name: nameToSearch
            }
        })

    }
}

export default function* searchBoxSaga(){
    yield takeLatest(HANDLE_INPUT_SEARCH_SAGA, handleInputSearch);
    yield takeLatest(HANDLE_SEARCH_SAGA, handleSearch);
}