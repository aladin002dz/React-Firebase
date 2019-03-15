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

async function getconfig(){
  const response = await fetch('/.netlify/functions/fbconfig')
  const resObj = await response.json()
  const fbconfig = await resObj.fbconfig;
  return fbconfig;
}

const fbConfig = getconfig();

console.log("firebase37");
console.log(fbConfig);

const { REACT_APP_API_KEY, REACT_APP_AUTH_DOMAIN, REACT_APP_DATABASE_URL, REACT_APP_PROJECT_ID, REACT_APP_STORAGE_BUCKET, REACT_APP_MESSAGING_SENDER_ID} = process.env;
const config2 = {
  apiKey: REACT_APP_API_KEY,
  authDomain: REACT_APP_AUTH_DOMAIN,
  databaseURL: REACT_APP_DATABASE_URL,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: REACT_APP_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_MESSAGING_SENDER_ID
};
  console.log("-----------------------------");
  console.log(config2);

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