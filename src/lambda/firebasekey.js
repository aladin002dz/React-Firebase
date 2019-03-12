import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const ApiKey = process.env.API_KEY;
console.log("---");
console.log("version4");
console.log("---");
console.log(process.env.API_KEY);

const {  AuthDomain, DatabaseURL, ProjectId, StorageBucket, MessagingSenderId } = process.env;

const config = {
    apiKey: ApiKey,
    authDomain: AuthDomain,
    databaseURL: DatabaseURL,
    projectId: ProjectId,
    storageBucket: StorageBucket,
    messagingSenderId: MessagingSenderId
};

console.log("---");
console.log(process.env.AuthDomain);
console.log(process.env.DatabaseURL);
console.log(process.env.ProjectId);
console.log(process.env.StorageBucket);
console.log(process.env.MessagingSenderId);
console.log("---");
console.log("config="+JSON.stringify(config));
console.log("---");
console.log(process.env);
console.log("---");
firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;