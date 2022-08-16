import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCiSp2DaJ68CP99tM0NULbXYByiu_ORTlY",
  authDomain: "orange-backend.firebaseapp.com",
  projectId: "orange-backend",
  storageBucket: "orange-backend.appspot.com",
  messagingSenderId: "861974590495",
  appId: "1:861974590495:web:4ec54c6bf462446da3d12a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
