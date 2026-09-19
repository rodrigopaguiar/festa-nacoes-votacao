// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCld7wBaaSJVRKdF1JIB_3v4y4j2iDVemw",
  authDomain: "festa-das-nacoes-votacao.firebaseapp.com",
  projectId: "festa-das-nacoes-votacao",
  storageBucket: "festa-das-nacoes-votacao.firebasestorage.app",
  messagingSenderId: "104039554097",
  appId: "1:104039554097:web:7b0be3b5bc0c413ca2c910",
  measurementId: "G-E7R39YRN3N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
