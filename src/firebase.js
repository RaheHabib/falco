// firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAan1JkD10OLfw6168BGeb6fJOVmhEozO0",
  authDomain: "falco-solution-66833.firebaseapp.com",
  projectId: "falco-solution-66833",
  storageBucket: "falco-solution-66833.firebasestorage.app",
  messagingSenderId: "485073891172",
  appId: "1:485073891172:web:54b37f9760a26545ba9471",
  measurementId: "G-T32K9QWX2F"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
