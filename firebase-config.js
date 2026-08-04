// Konfigurasi Firebase SDK v9 Compat
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
firebase.initializeApp(firebaseConfig);

// Inisialisasi Database agar dapat dipanggil secara global di index.html & admin.html
const database = firebase.database();
