import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjJg5XFfC19vErnxND7m5_LlQtWogq28k",
  authDomain: "itshare-f72c1.firebaseapp.com",
  projectId: "itshare-f72c1",
  storageBucket: "itshare-f72c1.appspot.com",
  messagingSenderId: "810245301309",
  appId: "1:810245301309:web:202d827205c71abb8cf654",
  measurementId: "G-X6D0K5R0F8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app }; // Export the 'app' variable outside of the conditional block



