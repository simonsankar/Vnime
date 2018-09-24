import { GET_USER, TO_BE_ADDED, IS_ALREADY_ADDED } from './types';
import { usersRef } from '../api/firebase';

const FAV_LIST = 'favlist';

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
// Anime already added
export const isAlreadyAdded = (uid, anime) => dispatch => {
  usersRef
    .child(uid)
    .child(FAV_LIST)
    .child(anime.info.id)
    .once('value', snapshot => {
      dispatch({
        type: IS_ALREADY_ADDED,
        payload: snapshot.val()
      });
    });
};
// Add anime to user
export const addAnimeToUser = (uid, anime) => dispatch => {
  usersRef
    .child(uid)
    .child(FAV_LIST)
    .child(anime.info.id)
    .set(anime);
};
// Remove anime from user
export const removeAnimeFromUser = (uid, anime) => dispatch => {
  usersRef
    .child(uid)
    .child(FAV_LIST)
    .child(anime.info.id)
    .remove();
};
