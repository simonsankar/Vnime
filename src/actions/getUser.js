import { CREATE_USER, GET_USER, DELETE_USER } from './types';
import { usersRef } from '../api/firebase';

// Create new user
export const createUser = (id, username) => dispatch => {
  usersRef.child(id).set({ username });
};
// Get user
export const getUser = id => dispatch => {
  usersRef.child(id).on('value', snapshot => {
    dispatch({
      type: GET_USER,
      payload: snapshot.val()
    });
  });
};

// Add anime to user
export const addAnimeToUser = (id, anime) => dispatch => {
  usersRef
    .child(id)
    .child('favlist')
    .child(anime.info.id)
    .set(anime);
};

// Check if anime exists
export const isAnimeAdded = (id, anime) => dispatch => {
  const anime = usersRef
    .child(id)
    .child('favlist')
    .child(id);
  if (anime !== null) return true;
  return false;
};
