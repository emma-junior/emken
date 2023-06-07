// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7Pnm3ibxPzBocDNZS_XCjpkZhe0_YTr0",
  authDomain: "emken-backend.firebaseapp.com",
  projectId: "emken-backend",
  storageBucket: "emken-backend.appspot.com",
  messagingSenderId: "238337492864",
  appId: "1:238337492864:web:06cd2b909be7a5399d2365",
  measurementId: "G-4GCF8J8CE7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)
// const analytics = getAnalytics(app);