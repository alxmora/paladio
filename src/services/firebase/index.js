import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDaXeLSHqcWDn_0dDzIxZSi0oe7XWo3L20",
  authDomain: "backendpaladio.firebaseapp.com",
  projectId: "backendpaladio",
  storageBucket: "backendpaladio.appspot.com",
  messagingSenderId: "1061855277109",
  appId: "1:1061855277109:web:dbd929b17e5c817ecf817c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)