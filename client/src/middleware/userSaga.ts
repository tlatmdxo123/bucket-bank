import {call,takeEvery,put} from 'redux-saga/effects'
import { FETCH_USER, FETCH_USER_ERROR, FETCH_USER_SUCCESS, UserInfoType } from '../types/setUserTypes'
import {getUser} from '../api/database'

export function* watchFetchUser(){
    yield takeEvery(FETCH_USER,fetchUser)
}

function* fetchUser(action:{type:string,payload:string}){
    try {
        const userInfo:UserInfoType = yield call(getUser,action.payload)
        yield put({type:FETCH_USER_SUCCESS,payload:userInfo})
    } catch (error) {
        yield put({type:FETCH_USER_ERROR,payload:error})
    }
}