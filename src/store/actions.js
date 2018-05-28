// actions
export const SET_USER = 'Set new user';
export const UPDATE_USER = 'Update existing user';
export const REMOVE_USER = 'Remove existing user';
export const GET_USER_ASYNC = 'Get user';
export const UPDATE_USER_ASYNC = 'Update user';

// action creators
export const setUser = data => ({ type: SET_USER, data });
export const updateUser = data => ({ type: UPDATE_USER, data });
export const removeUser = () => ({ type: REMOVE_USER }); // or data -> data:null
export const getUser = () => ({ type: GET_USER_ASYNC });
export const updateUserAsync = data => ({ type: UPDATE_USER_ASYNC, data });

// actions
export const LOGIN_USER_ASYNC = 'Login user';
export const LOGOUT_USER_ASYNC = 'Logout user';

// actions creators
export const setLogin = data => ({ type: LOGIN_USER_ASYNC, data });
export const setLogout = () => ({ type: LOGOUT_USER_ASYNC });



export const SET_ERROR = 'Set app error';

export const GET_INFO = 'Get info user';

export const GET_TASKS = 'Get all tasks';
export const REMOVE_TASK = 'Remove task';



export const getInfoUser = data => ({ type: GET_INFO, data });


export const getTasks = data => ({ type: GET_TASKS, data });
export const removeTask = data => ({ type: REMOVE_TASK, data });

export const setError = data => ({ type: SET_ERROR, data });
