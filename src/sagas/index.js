import { take, put, call, fork, select, all, takeEvery } from 'redux-saga/effects';
import * as Test from './saga.test'

export default function* root(){
    yield all([
        Test.watchTest()
    ])
}