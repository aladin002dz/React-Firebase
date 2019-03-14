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

const response = await fetch('/.netlify/functions/return-env')
const resObj = await response.json()
const fbconfig = await resObj.fbconfig;
console.log("firebase33");
console.log(fbconfig);
/*
var data1;
const fbconfig = fetch('/.netlify/functions/fbconfig')
  .then(response => response.json())
  .then(json => 
    {
      data1 = json;
      return Promise.resolve(json.fbconfig);
    });

console.log("firebase32");
console.log("fbConfig="+fbconfig+", data="+data1);

console.log(fbconfig);
console.log("fbconfig.__proto__");
console.log(fbconfig.toString());
console.log("--------------------");
console.log(fbconfig.valueOf());
console.log("--------------------");
console.log(fbconfig.PromiseValue);
*/
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;