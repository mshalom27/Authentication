import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAwnl7RfQluUunr6-E_uUlYeUBGSUz8i10",
  authDomain: "trial-476f3.firebaseapp.com",
  projectId: "trial-476f3",
  storageBucket: "trial-476f3.firebasestorage.app",
  messagingSenderId: "276091935206",
  appId: "1:276091935206:web:bd760419de12f02b749e27",
  measurementId: "G-4ZTQPZQN6M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export {app,auth};