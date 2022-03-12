import {all} from 'redux-saga/effects';
import columnViewPageSagas from '@screens/UserView/containers/sagas';

export default function* userViewSagas() {
  yield all([
    columnViewPageSagas()
  ]);
}
