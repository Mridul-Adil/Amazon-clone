// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAqg-h_ZEOdAFDrKykg6JUAVxFQhGFHorA",
    authDomain: "clone-eca3f.firebaseapp.com",
    projectId: "clone-eca3f",
    storageBucket: "clone-eca3f.appspot.com",
    messagingSenderId: "15397695243",
    appId: "1:15397695243:web:cbad2c4990ef42d9ae7c0e",
    measurementId: "G-TEF71PM982"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();

  export {db, auth};