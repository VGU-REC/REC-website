import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase config (These are public keys so they're fine to be exposed)
const firebaseConfig = {
  apiKey: "AIzaSyCqpDcGNRnQvy_RzSjGMSTeEi7CN1v7My4",
  authDomain: "rec-website-43135.firebaseapp.com",
  projectId: "rec-website-43135",
  storageBucket: "rec-website-43135.appspot.com",
  messagingSenderId: "291556748153",
  appId: "1:291556748153:web:ddecc4d8dc3e3e9a6a1da8",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
