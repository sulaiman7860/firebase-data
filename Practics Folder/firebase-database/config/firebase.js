
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8rNQQOD8uMad1Vpqkq1ggi5P2o0OdXiY",
  authDomain: "students-data-b401e.firebaseapp.com",
  projectId: "students-data-b401e",
  storageBucket: "students-data-b401e.appspot.com",
  messagingSenderId: "836505401207",
  appId: "1:836505401207:web:0089357f54019e6b3b9372"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);