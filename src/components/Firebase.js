import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB4qz-N1SmGnnXePH-p9YE6Z8DCg-P-sI8",
    authDomain: "fir-3-38956.firebaseapp.com",
    databaseURL: "https://fir-3-38956.firebaseio.com",
    projectId: "fir-3-38956",
    storageBucket: "fir-3-38956.appspot.com",
    messagingSenderId: "636417239392"
};

firebase.initializeApp(config);
let fbconfig=null;
fetch('/.netlify/functions/fbconfig')
      .then(response => response.json())
      .then(json => {
            fbconfig = json.fbconfig
          });
console.log("firebase1");
console.log(fbconfig);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;