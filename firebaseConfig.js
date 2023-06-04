import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDgp5LkCnEAJhL_cdmvdMBrH4zpY9mh6yc",
    authDomain: "quizadenim-coderhouse.firebaseapp.com",
    projectId: "quizadenim-coderhouse",
    storageBucket: "quizadenim-coderhouse.appspot.com",
    messagingSenderId: "1071751769743",
    appId: "1:1071751769743:web:26079d3da9e7279fc18afa"
  };
  
  initializeApp(firebaseConfig);

  const app = initializeApp(firebaseConfig)
  export const db = getFirestore(app)
  