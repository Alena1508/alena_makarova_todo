// actions
export const SET_USER = 'Set new user';
export const UPDATE_USER = 'Update existing user';
export const REMOVE_USER = 'Remove existing user';
export const GET_USER_ASYNC = 'Get user';
export const UPDATE_USER_ASYNC = 'Update user';
export const GET_INFO = 'Get info user';

export const LOGIN_USER_ASYNC = 'Login user';
export const LOGOUT_USER_ASYNC = 'Logout user';

// action creators
export const setUser = data => ({ type: SET_USER, data });
export const updateUser = data => ({ type: UPDATE_USER, data });
export const removeUser = () => ({ type: REMOVE_USER }); // or data -> data:null
export const getUser = () => ({ type: GET_USER_ASYNC });
export const updateUserAsync = data => ({ type: UPDATE_USER_ASYNC, data });
export const getInfoUser = data => ({ type: GET_INFO, data });

export const setLogin = data => ({ type: LOGIN_USER_ASYNC, data });
export const setLogout = () => ({ type: LOGOUT_USER_ASYNC });
