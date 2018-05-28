import { rest } from './rest';

export const login = (data = {}) => rest.post(
  'public/login',
  data
);
export const checkUser = () => rest.get('public/checkUser');
export const updateUserFetch = (data = {}) => rest.put('user', data);

export const registration = (data = {}) => rest.post('public/user', data);
export const logout = () => rest.get('logout');

