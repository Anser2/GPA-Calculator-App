// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, setDefaultEventParameters } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAAofE-4slLuEs99Dd8q9BzjOSd_coE_sU",
  authDomain: "qalamcalculator.firebaseapp.com",
  projectId: "qalamcalculator",
  storageBucket: "qalamcalculator.appspot.com",
  messagingSenderId: "808721373010",
  appId: "1:808721373010:web:0d281080f3235e4aec8c8b",
  measurementId: "G-GTJVK28CWG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const app_auth = getAuth(app);
const analytics = getAnalytics(app);




