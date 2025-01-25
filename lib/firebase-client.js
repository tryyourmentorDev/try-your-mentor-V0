// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage'; // <-- Import Storage

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWwwnc5Jipcm6S9aE90apnS7seuJ1h5Oc",
  authDomain: "try-your-mentor.firebaseapp.com",
  projectId: "try-your-mentor",
  storageBucket: "try-your-mentor.firebasestorage.app",
  messagingSenderId: "352519959839",
  appId: "1:352519959839:web:f70a241e6a47b11fc2ac2a",
  measurementId: "G-7KH544PBC3"
};

// Initialize Firebase
let firebaseApp;
if (!getApps().length) {
  firebaseApp = initializeApp(firebaseConfig);
} else {
  firebaseApp = getApp();
}
export const storage = getStorage(firebaseApp);
