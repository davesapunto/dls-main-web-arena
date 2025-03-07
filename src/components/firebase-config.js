import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLUcaU0TXNEnwk4tC9fkeSyNP6WV5rz3Q",
  authDomain: "dark-league-arena.firebaseapp.com",
  projectId: "dark-league-arena",
  storageBucket: "dark-league-arena.firebasestorage.app",
  messagingSenderId: "91275452067",
  appId: "1:91275452067:web:16c0fe835382d0775b2916",
  measurementId: "G-LV4NGQ07X8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const DB = getFirestore(app);

export { auth, googleProvider, facebookProvider, DB };