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

const { API_KEY, AUTH_DOMAIN, DATABASE_URL, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID} = process.env;
  

const fbConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID
};

/*
const json = fetch('/.netlify/functions/fbconfig')
.then(response => response.json())
.then(json => {
      fbConfig = json.fbconfig
      console.log("insider fbConfig="+fbConfig);
    });


const request = async () => {
  fetch('/.netlify/functions/fbconfig')
  .then(response => response.json())
  .then(json => {
        fbConfig = json.fbconfig
        console.log("insider fbConfig="+fbConfig);
      });
}
  
request();*/

console.log("firebase13");
console.log("final fbConfig="+fbConfig);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;