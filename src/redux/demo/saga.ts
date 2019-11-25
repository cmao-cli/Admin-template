import { call } from 'redux-saga/effects';

export function* DemoSaga() {
  console.log('DemoSaga');
  yield call(() => 'success');
}