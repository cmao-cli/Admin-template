import { call, takeLatest } from 'redux-saga/effects';

import { getOrders } from 'src//api/admin';
import { promiseType } from './';

function* testPromise(action:any) {
  const { resolve, reject } = action;
  try {
    const res = yield call(getOrders, '');
    if (res.status !== 200) {
      reject(res);
      return;
    }
    resolve(res);
  } catch (error) {
    reject(error);
  }

}

export function* DemoSaga() {
  // yield call(() => 'success');
  yield takeLatest(promiseType, testPromise);
}