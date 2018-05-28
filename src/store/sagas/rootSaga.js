import { all } from 'redux-saga/effects';

import { watchUser, watchLoginUser, watchlogoutUser, watchUpdateUserAsync } from './userSaga';
import { watchgetAllTasks } from './tasksSaga';

export function* rootSaga() {
  yield all([
    watchUser(),
    watchLoginUser(),
    watchlogoutUser(),
    watchUpdateUserAsync(),
    watchgetAllTasks()
  ]);
}