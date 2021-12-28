// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from  "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSWmhExysiQWedI94Md6OS80SqXWUqW9w",
  authDomain: "rainbow-490e3.firebaseapp.com",
  projectId: "rainbow-490e3",
  storageBucket: "rainbow-490e3.appspot.com",
  messagingSenderId: "78260067943",
  appId: "1:78260067943:web:1086947575858daf26fec2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
