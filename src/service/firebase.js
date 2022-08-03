// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC22yyk5qFCgh9d3vSmKbi3bLhvAUFr5L8",
    authDomain: "phoenix-forge-e-shop.firebaseapp.com",
    projectId: "phoenix-forge-e-shop",
    storageBucket: "phoenix-forge-e-shop.appspot.com",
    messagingSenderId: "411668852318",
    appId: "1:411668852318:web:52947b1aca7df203cf8ecf"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

export default firestore;
