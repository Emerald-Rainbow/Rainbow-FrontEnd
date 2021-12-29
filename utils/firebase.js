
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from  "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDUS0f4hgMymr9boSYiuJQL9UKwkIVVU_o",
  authDomain: "rainbow-temp.firebaseapp.com",
  projectId: "rainbow-temp",
  storageBucket: "rainbow-temp.appspot.com",
  messagingSenderId: "911580734101",
  appId: "1:911580734101:web:d81f7a62f256df24c8319c",
  measurementId: "G-GDT2XS4VZS"
};

  const app = initializeApp(firebaseConfig);



export const auth = getAuth(app);
export const db = getFirestore(app);
 