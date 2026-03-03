import { initializeApp } from "firebase/app";
import { getAuth, getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDic0KfymSY1uyPJO7FRgNr0oEyVtKOqbw",
  authDomain: "smart-assistance-3fdd0.firebaseapp.com",
  projectId: "smart-assistance-3fdd0",
  storageBucket: "smart-assistance-3fdd0.firebasestorage.app",
  messagingSenderId: "240777125702",
  appId: "1:240777125702:web:216714179cdaa173b10f47",
  measurementId: "G-Q15M3GY7E8",
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
