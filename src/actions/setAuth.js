import { USER_LOGGED_IN, USER_SIGNED_UP, USER_LOGGED_OUT } from './types';
import { auth } from '../api/firebase';

export const loginUser = (email, password) => {
  const login = auth.login(email, password);
  return {
    type: USER_LOGGED_IN,
    payload: login
  };
};

export const logoutUser = () => {
  auth.logout();
  return {
    type: USER_LOGGED_OUT
  };
};
