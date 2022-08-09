// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNOdfkizcJAbaVR7KlL1D2EcNB8iz880o",
  authDomain: "cx-opr.firebaseapp.com",
  projectId: "cx-opr",
  storageBucket: "cx-opr.appspot.com",
  messagingSenderId: "280576577002",
  appId: "1:280576577002:web:5de4f7b30be0feac92b693",
  measurementId: "G-E70SKFFCCH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

