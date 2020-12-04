import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAgFzTq9oDCPl4J9795mOkLv2mb-eTf5u0",
    authDomain: "tinder-clone-2dbf2.firebaseapp.com",
    databaseURL: "https://tinder-clone-2dbf2.firebaseio.com",
    projectId: "tinder-clone-2dbf2",
    storageBucket: "tinder-clone-2dbf2.appspot.com",
    messagingSenderId: "1091622029323",
    appId: "1:1091622029323:web:86fb5586b0b261e7281f0e",
    measurementId: "G-X2JKXRD47X"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();


  export default database;