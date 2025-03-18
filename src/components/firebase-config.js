import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBVqxR6mbSzwz0hRMpuYvg3bTJ85IGcYw",
  authDomain: "cloud-pastries-98df5.firebaseapp.com",
  projectId: "cloud-pastries-98df5",
  storageBucket: "cloud-pastries-98df5.appspot.com",
  messagingSenderId: "291294796685",
  appId: "1:291294796685:web:7539731e2706dd43267bc4",
  measurementId: "G-DXGRKKSWYZ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const DB = getFirestore(app);

export { app, auth, googleProvider, facebookProvider, DB };