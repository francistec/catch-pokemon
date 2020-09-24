import {  put,  takeLatest } from 'redux-saga/effects';
import {  HANDLE_INPUT_SEARCH_SAGA, HANDLE_INPUT_SEARCH_REDUCER } from './constants';

function* handleSearch(payload) {
    yield put({
        type: HANDLE_INPUT_SEARCH_REDUCER,
        payload: payload.payload
    })
}

export default function* searchBoxSaga(){
    yield takeLatest(HANDLE_INPUT_SEARCH_SAGA, handleSearch);
}