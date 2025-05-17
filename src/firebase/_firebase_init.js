// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCVdqO1elSTiF8PHvN0DZMPxx_GoTT3cHo",
  authDomain: "car-servicing-center-9d5fa.firebaseapp.com",
  projectId: "car-servicing-center-9d5fa",
  storageBucket: "car-servicing-center-9d5fa.firebasestorage.app",
  messagingSenderId: "656881676272",
  appId: "1:656881676272:web:badbf279eecb76d2c83735",
  measurementId: "G-L7E8Y0VKN3",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

