import { takeEvery, put } from 'redux-saga/effects';
import { GET_TASKS_ASYNC, getTasks, UPDATE_TASKS_ASYNC, updateTasks, DELETE_TASK_ASYNC, removeTask } from '../actions';
import { getTasksFetch, updateTaskFetch, deleteTaskFetch } from '../../services';

export function* getAllTasks() {
  try {
    const taskList = yield getTasksFetch();
    yield put(getTasks(taskList));
  } catch (err) {}
}


export function* watchGetAllTasks() {
  yield takeEvery(GET_TASKS_ASYNC, getAllTasks);
}

export function* updateAllTasks({ data }) {
  try {
    const task = yield updateTaskFetch(data);
    yield put(updateTasks(task));
  } catch (err) {}
}


export function* watchupdateAllTasks() {
  yield takeEvery(UPDATE_TASKS_ASYNC, updateAllTasks);
}

export function* deleteCurrentTask({ id }) {
  try {
    const task = yield deleteTaskFetch(id);
    yield put(removeTask(task)); // dispatch store
  } catch (err) {}
}


export function* watchdeleteCurrentTask() {
  yield takeEvery(DELETE_TASK_ASYNC, deleteCurrentTask);
}

