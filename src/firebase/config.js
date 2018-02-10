
import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyAWQqFydqAw3dW2cNXydEcRzxiS_JolwbA",
    authDomain: "hackathon-sut.firebaseapp.com",
    databaseURL: "https://hackathon-sut.firebaseio.com",
    projectId: "hackathon-sut",
    storageBucket: "hackathon-sut.appspot.com",
    messagingSenderId: "735525587999"
  };
  export const app = firebase.initializeApp(config)
  export const ref = firebase.database().ref();
  export const firebaseAuth = firebase.auth()
  export const facebookProvider = new firebase.auth.FacebookAuthProvider()
