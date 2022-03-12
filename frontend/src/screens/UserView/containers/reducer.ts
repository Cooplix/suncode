import {createReducer, PayloadAction} from '@reduxjs/toolkit';
import {getNotUniqRoutine, getUniqRoutine} from '@screens/UserView/routines';
import {IColumn} from '@screens/UserView/models/IColumn';
import {IColumns} from '@screens/UserView/models/IColumns';

export interface ITestViewReducerState {
  column: IColumn[];
  endSendingUser: boolean;
}

const initialState: ITestViewReducerState = {
  column: [],
  endSendingUser: true
};

export const testViewReducer = createReducer(initialState, {
  [getUniqRoutine.SUCCESS]: (state, {payload}: PayloadAction<IColumns>) => {
    state.column = payload.columns;
  },
  [getUniqRoutine.FULFILL]: state => {
    state.endSendingUser = false;
  },
  [getNotUniqRoutine.SUCCESS]: (state, {payload}: PayloadAction<IColumns>) => {
    state.column = payload.columns;
  }

});
