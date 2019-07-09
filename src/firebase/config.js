
import firebase from 'firebase'
var config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""

  };
  export const app = firebase.initializeApp(config)
  export const ref = firebase.database().ref();
  export const firebaseAuth = firebase.auth()
  export const facebookProvider = new firebase.auth.FacebookAuthProvider()
// <script src="https://www.gstatic.com/firebasejs/4.9.1/firebase.js"></script>
