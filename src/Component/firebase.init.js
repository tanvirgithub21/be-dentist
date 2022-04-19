
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjbyDgpJwVdE3rhyjZ1KE3UjHaTlwEMgc",
  authDomain: "reviews-webste.firebaseapp.com",
  projectId: "reviews-webste",
  storageBucket: "reviews-webste.appspot.com",
  messagingSenderId: "418851822053",
  appId: "1:418851822053:web:9580e110a455d6f6b4f70c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export default auth;