import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAUSh-ZbbNKb4zm7JgPs5OLSuljVPkAyGc",
    authDomain: "catch-of-the-day-george.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-george.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;