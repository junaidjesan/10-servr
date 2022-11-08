// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyDXk-Tu74jEWwoJc0TrfsAQ-h_Nqt-fIgw",
  // authDomain: "junaid-diary.firebaseapp.com",
  // projectId: "junaid-diary",
  // storageBucket: "junaid-diary.appspot.com",
  // messagingSenderId: "98540584825",
  // appId: "1:98540584825:web:1316b2a802db1977a539a8"

  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;