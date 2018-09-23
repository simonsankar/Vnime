import { USER_LOGGED_IN, USER_SIGNED_UP, USER_LOGGED_OUT } from './types';
import { authRef } from '../api/firebase';

export const loginUser = (email, password) => {
  const login = authRef.login(email, password);
  return {
    type: USER_LOGGED_IN,
    payload: login
  };
};
export const signupUser = (email, password) => {
  const signup = authRef.signup(email, password);
  return {
    type: USER_SIGNED_UP,
    payload: signup
  };
};

export const logoutUser = () => {
  authRef.logout();
  return {
    type: USER_LOGGED_OUT
  };
};
