import { USER_LOGGED_IN, USER_SIGNED_UP, USER_LOGGED_OUT } from './types';
import { auth } from '../api/firebase';

export const loginUser = (email, password) => {
  const login = auth.login(email, password);
  return {
    type: USER_LOGGED_IN,
    payload: login
  };
};
export const signupUser = (email, password) => {
  const signup = auth.signup(email, password);
  return {
    type: USER_SIGNED_UP,
    payload: signup
  };
};

export const logoutUser = () => {
  auth.logout();
  return {
    type: USER_LOGGED_OUT
  };
};
