import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const API_KEY = process.env.API_KEY;
console.log("---");
console.log("version6");
console.log("---");
console.log(API_KEY);

const {  AUTH_DOMAIN, DATABASE_URL, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID } = process.env;

const config = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    databaseURL: DATABASE_URL,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID
};

console.log("---");
console.log(process.env.AUTH_DOMAIN);
console.log(process.env.DATABASE_URL);
console.log(process.env.PROJECT_ID);
console.log(process.env.STORAGE_BUCKET);
console.log(process.env.MESSAGING_SENDER_ID);
console.log("---");
console.log("config="+JSON.stringify(config));
console.log("---");
console.log(process.env);
console.log("---");
firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;