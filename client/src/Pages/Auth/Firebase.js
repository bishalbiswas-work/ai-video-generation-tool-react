// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkYp_zpgF-KbfWWCs-DxtGMdAwwij_SqQ",
  authDomain: "autoyt-2417e.firebaseapp.com",
  projectId: "autoyt-2417e",
  storageBucket: "autoyt-2417e.appspot.com",
  messagingSenderId: "518275825769",
  appId: "1:518275825769:web:49a0c586025d0aed1862f8",
  measurementId: "G-CL1LX4J8WR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
export { auth, provider, db };
