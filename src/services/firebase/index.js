import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore' 

const firebaseConfig = {
  apiKey: "AIzaSyBKs-XiueylCYY5_C3YYR2Luxb0a2R7pIg",
  authDomain: "tiendaproductosmanicuranoah.firebaseapp.com",
  projectId: "tiendaproductosmanicuranoah",
  storageBucket: "tiendaproductosmanicuranoah.appspot.com",
  messagingSenderId: "394272926548",
  appId: "1:394272926548:web:1b6dae0377f31f364776c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)