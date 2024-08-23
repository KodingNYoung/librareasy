// Import the functions you need from the SDKs you need
import {
  APP_ID,
  AUTH_DOMAIN,
  FIREBASE_API_KEY,
  MESSAGING_SENDER_ID,
  PROJECT_ID,
  STORAGE_BUCKET
} from "@/utilities/constants";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID
};

console.log(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

export default app;
