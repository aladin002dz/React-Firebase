import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const apiKey = process.env.apiKey;

const {  authDomain, databaseURL, projectId, storageBucket, messagingSenderId } = process.env;

const config = {
    apiKey: apiKey,
    authDomain: authDomain,
    databaseURL: databaseURL,
    projectId: projectId,
    storageBucket: storageBucket,
    messagingSenderId: messagingSenderId
};

console.log("---");
console.log(process.env.apiKey);
console.log(process.env.authDomain);
console.log(process.env.databaseURL);
console.log(process.env.projectId);
console.log(process.env.storageBucket);
console.log(process.env.messagingSenderId);
console.log("---");
console.log("config="+JSON.stringify(config));
console.log("---");
console.log(process.env);
console.log("---");
firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;