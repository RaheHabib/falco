// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA10TScrcdo2nMe6w_OwDHLYaapE5FLSEI",
  authDomain: "falco-71008.firebaseapp.com",
  projectId: "falco-71008",
  storageBucket: "falco-71008.firebasestorage.app",
  messagingSenderId: "204128471051",
  appId: "1:204128471051:web:d135390acf492aa1b91f0e"
};

console.log('Initializing Firebase with config:', firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Add debugging
console.log('Firebase app initialized:', app);
console.log('Firestore db initialized:', db);
console.log('Project ID:', firebaseConfig.projectId);

// Test connection
db._delegate?._databaseId && console.log('Database ID:', db._delegate._databaseId);

export { db };