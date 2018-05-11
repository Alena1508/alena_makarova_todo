export const SET_USER = 'Set new user';
export const UPDATE_USER = 'Update existing user';
export const REMOVE_USER = 'Remove existing user';
export const setUser = (data) => ({ type: SET_USER, data });
export const updateUser = (data) => ({ type: UPDATE_USER, data });
export const removeUser = () => ({ type: REMOVE_USER }); // or data -> data:null

export const ADD_TASK = 'Add new task';
export const GET_TASKS = 'Get all tasks';
export const addTodo = data => ({ type: ADD_TASK, data });
export const getTasks = data => ({ type: GET_TASKS, data});