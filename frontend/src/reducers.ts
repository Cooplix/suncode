import {combineReducers} from 'redux';
import {reducer as toastr} from 'react-redux-toastr';
/* PlopJS import placeholder. Do not remove */
import userViewReducer from '@screens/UserView/reducers';

export default combineReducers({
  toastr,
  /* PlopJS reducer placeholder. Do not remove */
  userViewReducer
});
