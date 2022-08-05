import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBLCWqsUOFR1B2uE_ivZgZ7uerI7SVkdYE",
    authDomain: "crud-operation-3e010.firebaseapp.com",
    projectId: "crud-operation-3e010",
    storageBucket: "crud-operation-3e010.appspot.com",
    messagingSenderId: "734259015439",
    appId: "1:734259015439:web:5141742b4386ccf82ad87a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);