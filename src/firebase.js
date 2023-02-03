
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAtpyDb60mVB_lgNf9e6Q3C4lgKPXrf7TE",
  authDomain: "chatapp-92430.firebaseapp.com",
  projectId: "chatapp-92430",
  storageBucket: "chatapp-92430.appspot.com",
  messagingSenderId: "476971319088",
  appId: "1:476971319088:web:9bda664b2a060b922bd2f5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();