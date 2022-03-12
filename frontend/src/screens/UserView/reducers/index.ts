import {combineReducers} from 'redux';
import {RootState} from '@root/store';
import {reducerCreator} from '@helpers/reducer.helper';
import {testViewReducer} from '@screens/UserView/containers/reducer';
import {getNotUniqRoutine, getUniqRoutine} from '@screens/UserView/routines';
/* PlopJS import placeholder. Do not remove */

const requests = combineReducers({
  /* PlopJS request placeholder. Do not remove */
  getUniqRequest: reducerCreator([getUniqRoutine.TRIGGER]),
  getNotUniqRequest: reducerCreator([getNotUniqRoutine.TRIGGER])
});

export default combineReducers({
  requests,
  data: testViewReducer
});

const reqs = (state: RootState) => state.userViewReducer.requests;
const data = (state: RootState) => state.userViewReducer.data;

/* PlopJS request_extractor placeholder. Do not remove */

export const getUniqLoading = state => reqs(state).getUniqRequest.loading;
export const getNotUniqError = state => reqs(state).getNotUniqRequest.error;
