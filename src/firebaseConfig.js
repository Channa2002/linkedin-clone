// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5CGNpiH6CknOxvVrQ_zQx3U3IaE5Wkj8",
  authDomain: "linkedin-clone-pro-e6826.firebaseapp.com",
  projectId: "linkedin-clone-pro-e6826",
  storageBucket: "linkedin-clone-pro-e6826.appspot.com",
  messagingSenderId: "584691425204",
  appId: "1:584691425204:web:82a44815f25f46adc61ce1",
  measurementId: "G-MFQRRY9W02"
};

// Initialize Firebase
  const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 const firestore = getFirestore(app);
 export { auth, app, firestore};
