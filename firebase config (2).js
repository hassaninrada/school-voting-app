
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUckSguk71lkv4BM16cIajR3w_D2oorIo",
  authDomain: "school-voting-system-c4d4a.firebaseapp.com",
  projectId: "school-voting-system-c4d4a",
  storageBucket: "school-voting-system-c4d4a.firebasestorage.app",
  messagingSenderId: "620176532680",
  appId: "1:620176532680:web:c90ff449746980e09bf1fd",
  measurementId: "G-XJLB4CR0Z6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);