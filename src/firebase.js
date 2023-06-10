// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
import firebase from 'firebase/compat/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDKY-OaEUy-4MxT_XUhOXIUGxhWJYemOak",
    authDomain: "vieon-1806e.firebaseapp.com",
    projectId: "vieon-1806e",
    storageBucket: "vieon-1806e.appspot.com",
    messagingSenderId: "333899596663",
    appId: "1:333899596663:web:3897de53669b30b4c4d772",
    measurementId: "G-XXFQMMKPZ9"
};

firebase.initializeApp(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;