// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCza5m4Kh7acdP8S29k1vqcEiLlMdK6Zc",
  authDomain: "fir-proyect-login.firebaseapp.com",
  projectId: "fir-proyect-login",
  storageBucket: "fir-proyect-login.appspot.com",
  messagingSenderId: "725619197406",
  appId: "1:725619197406:web:50a27fbaaed849d768894f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
