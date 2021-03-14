import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDo6GezLsMO2PtI5FSHB2SoeJEe_c1U-80",
    authDomain: "booksanta-2d634.firebaseapp.com",
    projectId: "booksanta-2d634",
    storageBucket: "booksanta-2d634.appspot.com",
    messagingSenderId: "569770678522",
    appId: "1:569770678522:web:6570c2e9dbf68606349143"
  };
  // Initialize Firebase
  if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
  }

  export default firebase.firestore();