import Rebase from 're-base';
import firebase from 'firebase';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBwEVwP9Jh1I7RKf2x0ltER5PX0prJQ5Js",
    authDomain: "zapa-catchoftheday.firebaseapp.com",
    databaseURL: "https://zapa-catchoftheday-default-rtdb.firebaseio.com",
    projectId: "zapa-catchoftheday",
    storageBucket: "zapa-catchoftheday.appspot.com",
    messagingSenderId: "493472641350",
    appId: "1:493472641350:web:638b834f6fc2d3f53f7547",
    measurementId: "G-RTEPB8WBX8"
  };
  
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
  
const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;

