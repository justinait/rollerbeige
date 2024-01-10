import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import {
  signInWithEmailAndPassword, 
  getAuth, 
  signOut, 
  sendPasswordResetEmail
} from "firebase/auth"

import {getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage"
import {v4} from "uuid"

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

const storage = getStorage(app);
const auth = getAuth(app);

export const db = getFirestore(app);

export const onSignIn = async ({email, password}) => {
    
  try {
    const res = await signInWithEmailAndPassword(auth, email, password)
    return res;
  } catch (error) {
    console.log(error);
  }
  
}

export const onLogOut = () => {
  signOut(auth);
  console.log('cerro');
}

export const forgotPassword = async ({email}) => {
  try {
    let res = await sendPasswordResetEmail(auth, email)
    return res;
  } catch (error) {
    console.log(error);
  }
}

export const uploadFile = async (file) =>{
  const storageRef = ref(storage, v4() )
  await uploadBytes(storageRef, file);
  let url = await getDownloadURL(storageRef)
  return url;
}

// export default db;