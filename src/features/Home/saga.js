import { call, put, takeEvery } from 'redux-saga/effects'
import { HOME_TEST } from './actions'
import { test } from './slice'
import { fetchHome } from './api';

function* home(action) {
  const response = yield call(fetchHome, action.payload);
  yield put(test(response));
}

function* mySaga() {
  yield takeEvery(HOME_TEST, home);
}

export default mySaga;
