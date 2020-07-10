 import firebase from "firebase/app"
 import "firebase/firestore"
 import "firebase/auth"


 const  firebaseConfig = {
    apiKey: "AIzaSyCI5kL76n3RJE3-kFrahrD0-CVvukz7mm0",
    authDomain: "authentication-react-c8781.firebaseapp.com",
    databaseURL: "https://authentication-react-c8781.firebaseio.com",
    projectId: "authentication-react-c8781",
    storageBucket: "authentication-react-c8781.appspot.com",
    messagingSenderId: "791650678995",
    appId: "1:791650678995:web:d176c9b713203b4a967c26"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}