import { takeEvery, put } from 'redux-saga/effects';

import { GET_USER_ASYNC, setUser, LOGIN_USER_ASYNC, setLogin } from '../actions';
import { checkUser, login } from '../../services';

export function* getUser() {
  try {
    const user = yield checkUser();
    yield put(setUser(user));
  } catch (err) {
    yield put(setUser(null));
  }
}

export function* watchUser() {
  yield takeEvery(GET_USER_ASYNC, getUser);
}

export function* loginUser({ data }) {
  try {
    const login = yield login(data);
    yield put(setLogin(login));
  } catch (err) {}
}


export function* watchLoginUser() {
  yield takeEvery(LOGIN_USER_ASYNC, loginUser);
}