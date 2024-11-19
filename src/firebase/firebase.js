
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpItlIUCJ6ezVCBShPBMbF5VOhojcRe8o",
  authDomain: "clase-14-cd450.firebaseapp.com",
  projectId: "clase-14-cd450",
  storageBucket: "clase-14-cd450.firebasestorage.app",
  messagingSenderId: "624620310899",
  appId: "1:624620310899:web:5d250a20c98092852fb506"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };