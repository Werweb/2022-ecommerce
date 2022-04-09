import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import{getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage'


const firebaseConfig = {

  apiKey: "AIzaSyCW8WKYFn2ZzGGRUVgG6uUxGUhQY0i61aA",

  authDomain: "firestore-stripe-51ef5.firebaseapp.com",

  projectId: "firestore-stripe-51ef5",

  storageBucket: "firestore-stripe-51ef5.appspot.com",

  messagingSenderId: "1075435603004",

  appId: "1:1075435603004:web:ef0984c59c5a50784def39"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export default app;