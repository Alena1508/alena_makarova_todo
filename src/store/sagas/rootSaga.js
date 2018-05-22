import { all } from 'redux-saga/effects';

import { watchUser, watchLoginUser } from './userSaga';

export function* rootSaga() {
  yield all([
    watchUser(),
    watchLoginUser()
  ]);
}