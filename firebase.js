// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAivkJNeAcdBbcg-J7mX8NjFEyw_b_g2fU",
  authDomain: "laundary-app-ba80f.firebaseapp.com",
  projectId: "laundary-app-ba80f",
  storageBucket: "laundary-app-ba80f.appspot.com",
  messagingSenderId: "1046376502964",
  appId: "1:1046376502964:web:fb510643e5176447ade9e1",
  measurementId: "G-LC2TRLRLZV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth(app);

const db = getFirestore();

export {auth,db};

