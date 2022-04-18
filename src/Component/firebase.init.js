
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_PbclKGs0sxDRY1I16ebdOlqjFv-LH1I",
  authDomain: "be-dentist.firebaseapp.com",
  projectId: "be-dentist",
  storageBucket: "be-dentist.appspot.com",
  messagingSenderId: "703795281684",
  appId: "1:703795281684:web:f6cc2a22936a7da71a8c01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export default auth;