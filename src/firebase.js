import firebase from 'firebase/app';
import 'firebase/database';  // Import the database module

// Firebase configuration (use your actual Firebase credentials here)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL", // Typically your Firebase Realtime Database URL
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }
  
  // Use local emulators for authentication and database
  if (window.location.hostname === "localhost") {
    firebase.auth().useEmulator('http://localhost:9099/');
    firebase.database().useEmulator('localhost', 9000);
  }
  
  const db = firebase.database();
  const auth = firebase.auth();
