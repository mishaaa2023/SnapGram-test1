// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'



const firebaseConfig = {
  apiKey: "AIzaSyC6S5anGKT6DRJST-jFrTB90PIbpCr4SMo",
  authDomain: "snapgram-e07fb.firebaseapp.com",
  projectId: "snapgram-e07fb",
  storageBucket: "snapgram-e07fb.appspot.com",
  messagingSenderId: "1045099347810",
  appId: "1:1045099347810:web:7c587c65e6c8c7b663b63b",
  measurementId: "G-86YTEKYGNR"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const firestore=getFirestore(app);
const storage=getStorage(app);

export { app,auth, firestore, storage };