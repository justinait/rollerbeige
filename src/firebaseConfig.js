import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDC6o9IF9LZXwjA8uGLmRBfBchBoqaRijQ",
  authDomain: "rollerbeige.firebaseapp.com",
  projectId: "rollerbeige",
  storageBucket: "rollerbeige.appspot.com",
  messagingSenderId: "428936960776",
  appId: "1:428936960776:web:a86341316c0990004beabd",
  measurementId: "G-7XXJQ0K1PR"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app)

export default db;