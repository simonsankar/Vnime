import { GET_USER, TO_BE_ADDED } from './types';
import { usersRef } from '../api/firebase';

// Create new user
export const createUser = (uid, username) => dispatch => {
  usersRef.child(uid).set({ username });
};

// Get user
export const getUser = uid => dispatch => {
  usersRef.child(uid).on('value', snapshot => {
    dispatch({
      type: GET_USER,
      payload: snapshot.val()
    });
  });
};

// Favlist functions
export const toggleToBeAdded = toBeAdded => ({
  type: TO_BE_ADDED,
  payload: toBeAdded
});
// Add anime to user
export const addAnimeToUser = (uid, anime) => dispatch => {
  usersRef
    .child(uid)
    .child('favlist')
    .child(anime.info.id)
    .set(anime);
};
// Remove anime from user
export const removeAnimeFromUser = (uid, anime) => dispatch => {
  usersRef
    .child(uid)
    .child('favlist')
    .child(anime.info.id)
    .remove();
};
