// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCK802DtEVCbHaymWchLBYM46oauRbYFwc",
  authDomain: "email-password-authentic-bb5f4.firebaseapp.com",
  projectId: "email-password-authentic-bb5f4",
  storageBucket: "email-password-authentic-bb5f4.firebasestorage.app",
  messagingSenderId: "62631432598",
  appId: "1:62631432598:web:3629d40be2e8e9089f4db7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);