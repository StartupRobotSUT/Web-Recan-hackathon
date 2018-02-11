
import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyCleFQEUA9ONrep1f8nsxv2GofSh9ribxA",
    authDomain: "hackathon-8f517.firebaseapp.com",
    databaseURL: "https://hackathon-8f517.firebaseio.com",
    projectId: "hackathon-8f517",
    storageBucket: "hackathon-8f517.appspot.com",
    messagingSenderId: "374588479521"

  };
  export const app = firebase.initializeApp(config)
  export const ref = firebase.database().ref();
  export const firebaseAuth = firebase.auth()
  export const facebookProvider = new firebase.auth.FacebookAuthProvider()
// <script src="https://www.gstatic.com/firebasejs/4.9.1/firebase.js"></script>
