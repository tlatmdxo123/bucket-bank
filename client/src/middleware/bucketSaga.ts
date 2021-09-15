import {call,put} from 'redux-saga/effects'
import { takeEvery } from "@redux-saga/core/effects";
import { bucketActionType, GET_BUCKETS, GET_BUCKETS_ERROR, GET_BUCKETS_SUCCESS } from "../actions/BucketActions";
import { getBuckets } from "../api/database";
import { bucketListType } from "../types/bucketType";

export function* watchFetchBucketData(){
    yield takeEvery(GET_BUCKETS,getBucketDataSaga)
}

function* getBucketDataSaga(action:bucketActionType){
    const id = action.payload
    try {
        const data:bucketListType[] = yield call(getBuckets,id as string)
        yield put({
            type:GET_BUCKETS_SUCCESS,
            payload:data
        })
    } catch (error) {
        yield put({
            type:GET_BUCKETS_ERROR,
            payload:error.message
        })
    }
}