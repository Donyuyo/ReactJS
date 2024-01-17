// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIyWXsrP6D8sfXbi3fLqoL9bIkXYDTRjQ",
  authDomain: "poleras-sisi.firebaseapp.com",
  projectId: "poleras-sisi",
  storageBucket: "poleras-sisi.appspot.com",
  messagingSenderId: "1095313331987",
  appId: "1:1095313331987:web:3a23bcbbf685fa88982ce6",
  measurementId: "G-CYWBQSH2EW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);