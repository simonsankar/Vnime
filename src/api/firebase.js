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

export const db = {
  async createUser(id, username = 'Bob') {
    const user = await firebase
      .database()
      .ref(`users/${id}`)
      .set({ username, favlist: [] })
      .on('value', snapshot => snapshot.val);
  },
  async getUser(id) {
    const user = await firebase
      .database()
      .ref(`users/${id}`)
      .on('value', snapshot => snapshot.val);
    return user;
  }
};
