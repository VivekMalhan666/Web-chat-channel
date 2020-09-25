import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEY0Q81TKJVbwhm73ENV3LcAjn69XClpc",
  authDomain: "chatroom-b8147.firebaseapp.com",
  databaseURL: "https://chatroom-b8147.firebaseio.com",
  projectId: "chatroom-b8147",
  storageBucket: "chatroom-b8147.appspot.com",
  messagingSenderId: "1033916213376",
  appId: "1:1033916213376:web:49611fd24d76716470de65",
  measurementId: "G-P788DCRSL8",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore;
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
