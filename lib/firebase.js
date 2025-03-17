import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoc0-fp53lcv1kv107btrvHNZmhmUSQ3Y",
  authDomain: "moverz-dcb4f.firebaseapp.com",
  projectId: "moverz-dcb4f",
  storageBucket: "moverz-dcb4f.firebasestorage.app",
  messagingSenderId: "900877611678",
  appId: "1:900877611678:web:5eb29f7331d9fd256b818f",
  measurementId: "G-C6LDDRDQEL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//  export const db = getFirestore(app);
if (typeof window !== "undefined") {
  const analytics = getAnalytics(app);
}
