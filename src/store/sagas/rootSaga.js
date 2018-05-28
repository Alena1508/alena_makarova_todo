import { all } from 'redux-saga/effects';

import { watchUser, watchLoginUser, watchlogoutUser, watchUpdateUserAsync } from './userSaga';
import { watchGetAllTasks, watchupdateAllTasks, watchdeleteCurrentTask } from './tasksSaga';

export function* rootSaga() {
  yield all([
    watchUser(),
    watchLoginUser(),
    watchlogoutUser(),
    watchUpdateUserAsync(),
    watchGetAllTasks(),
    watchupdateAllTasks(),
    watchdeleteCurrentTask()
  ]);
}
