/**
 * Gets the repositories of the user from Github
 */
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_START } from './constants';
import { getDataDone, getDataError } from './actions';

// Sy - Use request API Lib - GET method
import request from 'utils/request';

/**
 * Github repos request/response handler
 */
export function* getData(actions) {
  console.log('actions', actions);
  const value      = actions.params.nameText;
  const requestURL = 'http://md5.jsontest.com/?text=' + value;

  try {
    // Call our request helper (see 'utils/request')
    const data = yield call(request, requestURL);
    console.log('in Saga', data);
    yield put(getDataDone(data));
  } catch (err) {
    yield put(getDataError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* watchGetData() {

  // Watches for LOAD_START actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_START, getData);
}
