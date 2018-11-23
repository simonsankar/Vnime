import _ from 'lodash';
import {
  GET_USER,
  GET_USER_AVATAR,
  TO_BE_ADDED,
  IS_ALREADY_ADDED
} from './types';
import { usersRef, avatarsRef } from '../api/firebase';

const FAV_LIST = 'favlist';
const USERNAME = 'username';
const RECENTS = 'recents';
const MAX_RECENTS = 10;

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
// Get user avatar
export const getUserAvatar = uid => dispatch => {
  console.log('getting user avatar', uid);
  avatarsRef
    .child(`${uid}/avatar`)
    .getDownloadURL()
    .then(url => {
      dispatch({
        type: GET_USER_AVATAR,
        payload: url
      });
    });
};

// Update user details
export const updateUserDetails = (uid, username) => dispatch => {
  usersRef
    .child(uid)
    .child(USERNAME)
    .set(username);
};
export const updateUserAvatar = (uid, file) => dispatch => {
  avatarsRef
    .child(uid)
    .child('avatar')
    .put(file);
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

export const addAnimeToRecents = (uid, anime) => dispatch => {
  let ani = {
    id: anime.info.id,
    title: anime.info.title,
    poster: anime.poster,
    type: anime.info.type,
    date: Date.now()
  };
  usersRef
    .child(uid)
    .child(RECENTS)
    .once('value', snapshot => {
      let recents = Object.values(snapshot.val());
      if (recents.length < MAX_RECENTS) {
        usersRef
          .child(uid)
          .child(RECENTS)
          .child(ani.id)
          .set(ani);
      } else {
        let sorted = _.orderBy(recents, ['date'], ['desc']);
        if (
          _.findIndex(sorted, el => {
            return el.id === ani.id;
          }) === -1
        ) {
          usersRef
            .child(uid)
            .child(RECENTS)
            .child(sorted[sorted.length - 1].id)
            .remove();
        }

        usersRef
          .child(uid)
          .child(RECENTS)
          .child(ani.id)
          .set(ani);
      }
    });
};
