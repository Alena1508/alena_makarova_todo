export const SET_USER = 'Set new user';
export const UPDATE_USER = 'Update existing user';
export const REMOVE_USER = 'Remove existing user';
export const setUser = data => ({ type: SET_USER, data });
export const updateUser = data => ({ type: UPDATE_USER, data });
export const removeUser = () => ({ type: REMOVE_USER }); // or data -> data:null


export const GET_INFO = 'Get info user';
export const getInfoUser = data => ({ type: GET_INFO, data });


export const GET_TASKS = 'Get all tasks';
export const REMOVE_TASK = 'Remove task';
export const getTasks = data => ({ type: GET_TASKS, data });
export const removeTask = data => ({ type: REMOVE_TASK, data });
