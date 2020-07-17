import firebase from 'firebase';

//initialized firbaseapp
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDFv5cfxtbDu3q7IsFOXCX3myghgK01WKc",
    authDomain: "todoapp-2aeab.firebaseapp.com",
    databaseURL: "https://todoapp-2aeab.firebaseio.com",
    projectId: "todoapp-2aeab",
    storageBucket: "todoapp-2aeab.appspot.com",
    messagingSenderId: "523839736017",
    appId: "1:523839736017:web:1424f9bca1fd26a0189df0",
    measurementId: "G-X90BTKNT55"
});

//Using the initialized firebase app -> connect to firestore -> store it in db variable
const db = firebaseApp.firestore();

export default db;