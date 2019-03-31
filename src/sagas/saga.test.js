 import {takeEvery} from 'redux-saga/effects'
import * as TYPE from './../constants/index'
 function * startTest(){
     console.log('anh lam')
 }

 function *watchTest(){
     yield takeEvery(TYPE.DEMO,startTest);
 };

 export {
     watchTest
 }