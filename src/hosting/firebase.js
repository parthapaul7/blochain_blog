// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2YmRaGwSHGkTB9ttBEI5n8P51LSnlmNQ",
  authDomain: "blockchain-blog7.firebaseapp.com",
  projectId: "blockchain-blog7",
  storageBucket: "blockchain-blog7.appspot.com",
  messagingSenderId: "1020775130442",
  appId: "1:1020775130442:web:3952695da120c808294db3",
  measurementId: "G-WEQS2WPHT3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);