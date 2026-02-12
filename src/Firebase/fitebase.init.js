// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBo8_XvcKA_zC1VTxdjg8wYZQFbrKBcuQw",
  authDomain: "carear-code-40fe1.firebaseapp.com", // 👈 সঠিক domain
  projectId: "carear-code-40fe1",
  storageBucket: "carear-code-40fe1.firebasestorage.app",
  messagingSenderId: "479549573087",
  appId: "1:479549573087:web:ce2525f1886c747079e66a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);