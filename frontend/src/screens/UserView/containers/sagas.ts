import {all, call, put, takeEvery} from 'redux-saga/effects';
import userServices from '@screens/UserView/services/userServices';
import {getNotUniqRoutine, getUniqRoutine} from '@screens/UserView/routines';
import {toastr} from 'react-redux-toastr';

export default function* userViewPageSagas() {
  function* getUniq(action) {
    try {
      const res = yield call(userServices.getUniq, action.payload);
      const columns = {
        columns: res
      };
      yield put(getUniqRoutine.success(columns));
      toastr.success('Success', 'Fetch column success');
    } catch (error) {
      yield put(getUniqRoutine.failure(error?.message));
    } finally {
      yield put(getUniqRoutine.fulfill());
    }
  }

  function* getNotUniq(action) {
    try {
      const res = yield call(userServices.getNotUniq, action.payload);
      const columns = {
        columns: res
      };
      yield put(getNotUniqRoutine.success(columns));
    } catch (error) {
      yield put(getNotUniqRoutine.failure(error?.message));
    } finally {
      yield put(getNotUniqRoutine.fulfill());
    }
  }

  function* watchGetNotUniq() {
    yield takeEvery(getNotUniqRoutine.TRIGGER, getNotUniq);
  }

  function* watchGetUniq() {
    yield takeEvery(getUniqRoutine.TRIGGER, getUniq);
  }

  yield all([
    watchGetNotUniq(),
    watchGetUniq()
  ]);
}
