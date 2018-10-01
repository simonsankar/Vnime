import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import { config } from './firebase.config';

firebase.initializeApp(config);

// Authentication helpers
export const authRef = {
  async login(email, password) {
    const { user } = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    return user;
  },
  async signup(email, password) {
    const { user } = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    return user;
  },
  async logout() {
    firebase.auth().signOut();
  }
};

// Database
const databaseRef = firebase.database().ref();
export const usersRef = databaseRef.child('users');

const storageRef = firebase.storage().ref();
export const avatarsRef = storageRef.child('avatars');
