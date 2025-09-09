// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBC_1eujh82IvdYQ1XYPkTY3ngCb6hLMQ",
  authDomain: "falco-solutions.firebaseapp.com",
  projectId: "falco-solutions",
  storageBucket: "falco-solutions.firebasestorage.app",
  messagingSenderId: "76566213203",
  appId: "1:76566213203:web:9b5b8648130e407a3f4ca6",
  measurementId: "G-7PEY4PNF6Z"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);