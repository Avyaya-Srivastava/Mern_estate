// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-4c628.firebaseapp.com",
  projectId: "mern-estate-4c628",
  storageBucket: "mern-estate-4c628.appspot.com",
  messagingSenderId: "221337966321",
  appId: "1:221337966321:web:fb153d2a8fa9b00c46bb50"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);