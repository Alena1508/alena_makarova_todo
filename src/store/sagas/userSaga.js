import { takeEvery, put } from 'redux-saga/effects';

import { GET_USER_ASYNC, setUser, LOGIN_USER_ASYNC, LOGOUT_USER_ASYNC, removeUser, UPDATE_USER_ASYNC, updateUser } from '../actionsUser';
import { checkUser, login, logout, updateUserFetch } from '../../services';

export function* getUser() {
  try {
    const user = yield checkUser();
    yield put(setUser(user));
  } catch (err) {
    yield put(removeUser());
  }
}

export function* watchUser() {
  yield takeEvery(GET_USER_ASYNC, getUser);
}

export function* loginUser({ data }) {
  try {
    const user = yield login(data);
    yield put(setUser(user));
  } catch (err) {}
}


export function* watchLoginUser() {
  yield takeEvery(LOGIN_USER_ASYNC, loginUser);
}

export function* logoutUser() {
  try {
    yield logout();
    yield put(removeUser());
  } catch (err) {}
}


export function* watchlogoutUser() {
  yield takeEvery(LOGOUT_USER_ASYNC, logoutUser);
}

export function* update({ data }) {
  try {
    const user = yield updateUserFetch(data);
    yield put(updateUser(user));
  } catch (err) {}
}

export function* watchUpdateUserAsync() {
  yield takeEvery(UPDATE_USER_ASYNC, update);
}
