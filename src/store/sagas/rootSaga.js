import { all } from 'redux-saga/effects';

import { watchUser, watchLoginUser, watchlogoutUser, watchupdateUserAsync } from './userSaga';

export function* rootSaga() {
  yield all([
    watchUser(),
    watchLoginUser(),
    watchlogoutUser(),
    watchupdateUserAsync()
  ]);
}