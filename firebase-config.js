// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB78x1-kamlwnsjmVHNJQYW5ADV2assCDA",
  authDomain: "osis-smk-yatpi-6fa18.firebaseapp.com",
  projectId: "osis-smk-yatpi-6fa18",
  storageBucket: "osis-smk-yatpi-6fa18.firebasestorage.app",
  messagingSenderId: "681704259092",
  appId: "1:681704259092:web:4094b521015055008eb101",
  measurementId: "G-PPKLKF4YSW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
