import firebase from 'firebase';
import { config } from './firebase.config';

firebase.initializeApp(config);

export const auth = {
  async login(email, password) {
    const { user } = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    return user;
  },
  async logout() {
    firebase.auth().signOut();
  }
};
