import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB0QtXl36JJTHB2VcM3a6TBUPjFEkzEbdU",
  authDomain: "e-commerce-6e81b.firebaseapp.com",
  databaseURL: "https://e-commerce-6e81b.firebaseio.com",
  projectId: "e-commerce-6e81b",
  storageBucket: "e-commerce-6e81b.appspot.com",
  messagingSenderId: "915493959989",
  appId: "1:915493959989:web:091c8669e01df7d631f47c",
  measurementId: "G-DRSFH7P339",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
