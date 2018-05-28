import { takeEvery, put } from 'redux-saga/effects';
import { GET_TASKS_ASYNC, getTasksAsync } from '../actions';
import { getTasks } from '../../services';

export function* getAllTasks({ data }) {
  try {
    yield getTasks(data);
    yield put(getTasksAsync());
  } catch (err) {}
}


export function* watchgetAllTasks() {
  yield takeEvery(GET_TASKS_ASYNC, getAllTasks);
}
