import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDFzaoEZoGWkfwxu6Jf_B68L0roRZ54vnQ',
  authDomain: 'vnimedb.firebaseapp.com',
  databaseURL: 'https://vnimedb.firebaseio.com',
  projectId: 'vnimedb',
  storageBucket: 'vnimedb.appspot.com',
  messagingSenderId: '676241315674'
};
firebase.initializeApp(config);

const db = {
  async login(email, password) {
    const { user } = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    return user;
  }
};
export default db;
