// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAofzH2yHHgxQXz1VvU6YdCBqcsDBstIlo",
  authDomain: "elctroincswarehouse.firebaseapp.com",
  projectId: "elctroincswarehouse",
  storageBucket: "elctroincswarehouse.appspot.com",
  messagingSenderId: "708410166916",
  appId: "1:708410166916:web:d945449b1409e8d946bcd1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
