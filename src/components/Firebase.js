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

let data ;
async function getconfig() {
   await fetch('/.netlify/functions/fbconfig')
  .then(response => response.json())
  .then(json => {
        //fbConfig = json.fbconfig;
        data = json.fbconfig ;
        console.log("insider fbConfig="+data);
      });
    }

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}


getconfig();
console.log("waiting...");
sleep(5000);

console.log("firebase24");
console.log("final fbConfig="+data);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;