import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


const { apiKey, authDomain, databaseURL, projectId, storageBucket, messagingSenderId } = process.env;

const config = {
    apiKey: apiKey,
    authDomain: authDomain,
    databaseURL: databaseURL,
    projectId: projectId,
    storageBucket: storageBucket,
    messagingSenderId: messagingSenderId
};

console.log("config="+JSON.stringify(config));
console.log(process.env);
firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;