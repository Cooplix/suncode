/* eslint-disable max-len */
import {createRoutine} from 'redux-saga-routines';

const createTestViewRoutine = <T extends unknown>(actionName: string) => createRoutine<T>(`USER_VIEW:${actionName}`);

/* PlopJS routine placeholder. Do not remove */

export const getNotUniqRoutine = createTestViewRoutine('GET_MOT_UNIQ');
export const getUniqRoutine = createTestViewRoutine('GET_UNIQ');
