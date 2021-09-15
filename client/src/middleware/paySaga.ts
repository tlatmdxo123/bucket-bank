import {call,put, takeEvery} from 'redux-saga/effects'
import {addPayment, deletePayment, getPaymentList, updatePayment} from '../api/database'
import { AddPaymentType, ADD_PAY_DATA, ADD_PAY_DATA_ERROR, ADD_PAY_DATA_SUCCESS, DELETE_PAY_DATA, DELETE_PAY_DATA_ERROR, DELETE_PAY_DATA_SUCCESS, FETCH_PAY_DATA, FETCH_PAY_DATA_ERROR, FETCH_PAY_DATA_SUCCESS,PayActionType, PayListTypes, UpdatePaymentType, UPDATE_PAY_DATA, UPDATE_PAY_DATA_ERROR, UPDATE_PAY_DATA_SUCCESS } from '../types/payTypes';

function* fetchPayDataSaga(action:PayActionType){
    const userId = action.payload;
    try {
        const payData:PayListTypes[] = yield call(getPaymentList,userId as string)
        yield put({
            type:FETCH_PAY_DATA_SUCCESS,
            payload:payData
        })
    } catch (error) {
        yield put({
            type:FETCH_PAY_DATA_ERROR,
            payload:error
        })
    }

}

function* addPayDataSaga(action:PayActionType){
    const payload = action.payload as AddPaymentType;
    try {
        const {data}:{data:PayListTypes} = yield call(addPayment,payload)
        yield put({
            type:ADD_PAY_DATA_SUCCESS,
            payload:data
        })
    } catch (error) {
        yield put({
            type:ADD_PAY_DATA_ERROR,
            payload:error
        })
    }
}

function* updatePayDataSaga(action:PayActionType){
    const data = action.payload as UpdatePaymentType;
    try {
        yield call(updatePayment,data)
        yield put({
            type:UPDATE_PAY_DATA_SUCCESS,
            payload:data
        })
    } catch (error) {
        yield put({
            type:UPDATE_PAY_DATA_ERROR,
            payload:error
        })
    }
}

function* deletePayDataSaga(action:PayActionType){
    const id = action.payload as string;
    try {
        yield call(deletePayment,id)
        yield put({
            type:DELETE_PAY_DATA_SUCCESS,
            payload:id
        })
    } catch (error) {
        yield put({
            type:DELETE_PAY_DATA_ERROR,
            payload:error
        })
    }
}

export function* watchFetchPayData(){
    yield takeEvery(FETCH_PAY_DATA,fetchPayDataSaga)
    yield takeEvery(ADD_PAY_DATA,addPayDataSaga)
    yield takeEvery(UPDATE_PAY_DATA,updatePayDataSaga)
    yield takeEvery(DELETE_PAY_DATA,deletePayDataSaga)
}