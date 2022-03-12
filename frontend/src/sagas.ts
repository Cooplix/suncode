import {all} from 'redux-saga/effects';
/* PlopJS import placeholder. Do not remove */
import userViewSagas from '@screens/UserView/sagas';

export default function* rootSaga() {
  yield all([
    /* PlopJS sagas placeholder. Do not remove */
    userViewSagas()
  ]);
}
