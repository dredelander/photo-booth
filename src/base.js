
import { initializeApp } from "firebase/app";
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBazIz2006WIfyntQcRCQqFAowrX1645IU",
  authDomain: "photo-booth-f6d2a.firebaseapp.com",
  databaseURL: "https://photo-booth-f6d2a-default-rtdb.firebaseio.com",
  projectId: "photo-booth-f6d2a",
  storageBucket: "photo-booth-f6d2a.appspot.com",
  messagingSenderId: "90049939335",
  appId: "1:90049939335:web:6a18b05d43bb5262b83522"
};


export const firebaseApp = initializeApp(firebaseConfig);