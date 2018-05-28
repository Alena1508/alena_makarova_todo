// actions
export const GET_TASKS_ASYNC = 'Get all tasks async';
export const UPDATE_TASKS_ASYNC = 'Get all tasks async';
export const DELETE_TASK_ASYNC = 'Delete task async';
export const GET_TASKS = 'Get all tasks';
export const UPDATE_TASKS = 'Update all tasks';
export const REMOVE_TASK = 'Remove task';


export const getTasksAsync = () => ({ type: GET_TASKS_ASYNC });
export const updateTasksAsync = data => ({ type: UPDATE_TASKS_ASYNC, data });
export const deleteTaskAsync = id => ({ type: DELETE_TASK_ASYNC, id });
export const getTasks = data => ({ type: GET_TASKS, data });
export const updateTasks = data => ({ type: UPDATE_TASKS, data });
export const removeTask = data => ({ type: REMOVE_TASK, data });

