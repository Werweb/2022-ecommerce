 import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import{getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage' 



const firebaseConfig = {

  apiKey: "AIzaSyCZWqAdm4gMEo7qQRVGCCMkg59n-vYuA7U",

  authDomain: "ecommerce-1e9d9.firebaseapp.com",

  projectId: "ecommerce-1e9d9",

  storageBucket: "ecommerce-1e9d9.appspot.com",

  messagingSenderId: "579905926942",

  appId: "1:579905926942:web:09788b723a7a1a39b7bb0f",

  measurementId: "G-K6VW6WQL5T"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export default app;
