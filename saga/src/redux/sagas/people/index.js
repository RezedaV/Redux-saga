import {call, apply, put, takeLatest} from 'redux-saga/effects'
import { getPeoplesSuccess, loadPeoples} from "../../peoples";

export function* loadPeopleList({payload}){
    const {page, search} = payload;
    const request = yield call(fetch, `https://swapi.dev/api/people?page=${page}&search=${search ? search : ''}`)

    const data = yield apply(request, request.json)
    yield put(getPeoplesSuccess(data))
}

export default function* peopleSaga(){
    yield takeLatest(loadPeoples, loadPeopleList)
}
