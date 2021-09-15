import {all} from 'redux-saga/effects'
import { watchFetchBucketData } from './bucketSaga';
import { watchFetchPayData } from './paySaga';
import { watchFetchUser } from './userSaga';

export default function* rootSaga(){
    yield all([watchFetchPayData(),watchFetchBucketData(),watchFetchUser()]);
}
