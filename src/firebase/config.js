// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-hg489ot_L6XbmEkUimwF2xvNeFx3L9Q",
  authDomain: "react-app-curso-79927.firebaseapp.com",
  projectId: "react-app-curso-79927",
  storageBucket: "react-app-curso-79927.appspot.com",
  messagingSenderId: "130046163191",
  appId: "1:130046163191:web:89ddac466586f29a68bbf2",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
