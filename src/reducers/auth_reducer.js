import {
  USER_LOGGED_IN,
  USER_SIGNED_UP,
  USER_LOGGED_OUT
} from '../actions/types';

const auth = (state = null, action) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      if (action.error === true) {
        console.log('Login Error', action.payload);
        return {
          loggedIn: false,
          message: action.payload.message
        };
      } else {
        console.log('Login Success', action.payload);
        return {
          loggedIn: true,
          response: action.payload
        };
      }
    case USER_SIGNED_UP:
      if (action.error === true) {
        console.log('Signup Error', action.payload);
        return {
          loggedIn: false,
          message: action.payload.message
        };
      } else {
        console.log('Signup Success', action.payload);
        return {
          loggedIn: true,
          response: action.payload
        };
      }
    case USER_LOGGED_OUT:
      return {
        loggedIn: false
      };
    default:
      return state;
  }
};

export default auth;
