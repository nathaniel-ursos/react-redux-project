import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBYWQ2HPjVI92AFyWepPDv0RPA-ylgfULM",
    authDomain: "my-inventory-45cc2.firebaseapp.com",
    databaseURL: "https://my-inventory-45cc2.firebaseio.com",
    projectId: "my-inventory-45cc2",
    storageBucket: "my-inventory-45cc2.appspot.com",
    messagingSenderId: "610353822081"
  };

  firebase.initializeApp(config);
  firebase.firestore() ;

  export default firebase;