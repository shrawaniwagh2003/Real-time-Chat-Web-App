
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAUf8UHvueEYHH-xmGQlFq6ZMh7LRMjRCk",
    authDomain: "chat-a50b8.firebaseapp.com",
    projectId: "chat-a50b8",
    storageBucket: "chat-a50b8.appspot.com",
    messagingSenderId: "596453651568",
    appId: "1:596453651568:web:6595e3af7d2fddecdcb0b5"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()