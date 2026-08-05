// Konfigurasi Firebase SDK v9 Compat untuk Firestore
const firebaseConfig = {
  apiKey: "AIzaSyB78x1-kamlwnsjmVHNJQYW5ADV2assCDA",
  authDomain: "osis-smk-yatpi-6fa18.firebaseapp.com",
  projectId: "osis-smk-yatpi-6fa18",
  storageBucket: "osis-smk-yatpi-6fa18.firebasestorage.app",
  messagingSenderId: "681704259092",
  appId: "1:681704259092:web:4094b521015055008eb101",
  measurementId: "G-PPKLKF4YSW"
};

// Inisialisasi Firebase (Compat Mode)
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Inisialisasi Firestore Database agar dapat dipanggil global
const db = firebase.firestore();
