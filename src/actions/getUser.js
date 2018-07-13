import { CREATE_USER, GET_USER, DELETE_USER } from './types';
import { db } from '../api/firebase';

export const createUser = (id, username) => {
  const request = db.createUser(id, username);
  return {
    type: CREATE_USER,
    payload: request
  };
};
export const getUser = id => {
  const request = db.getUser(id);
  return {
    type: GET_USER,
    payload: request
  };
};
