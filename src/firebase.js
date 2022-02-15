import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDH5lXDSiGoFdXZMJ_OPtPlxOYZhSjK7Kg",
  authDomain: "eshoppers-3ca3e.firebaseapp.com",
  projectId: "eshoppers-3ca3e",
  storageBucket: "eshoppers-3ca3e.appspot.com",
  messagingSenderId: "942432107546",
  appId: "1:942432107546:web:3b29168b3e33f503a025a3",
  measurementId: "G-6J25TSQWK2",
};

let firebaseApp = initializeApp(firebaseConfig);
let db = getFirestore(firebaseApp);
let auth = getAuth(firebaseApp);

export { db, auth };
