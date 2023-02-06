import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBqRVzbblkm9KRGVjBhECerKjeAe8bPyTk",
  authDomain: "movie-mania-ff4fa.firebaseapp.com",
  projectId: "movie-mania-ff4fa",
  storageBucket: "movie-mania-ff4fa.appspot.com",
  messagingSenderId: "651838319324",
  appId: "1:651838319324:web:1e972775718f0094e12219"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };