import { initializeApp } from "@react-native-firebase/app";
import { getFirestore } from "@react-native-firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDBfh0dclEFpz8sxh7I1tk71i68D1JMkP0",
    authDomain: "to-do-list-new-9eeaa.firebaseapp.com",
    projectId: "to-do-list-new-9eeaa",
    storageBucket: "to-do-list-new-9eeaa.firebasestorage.app",
    messagingSenderId: "702371849796",
    appId: "1:702371849796:web:85af2dd5288bb70fa6fe11",
    measurementId: "G-27DFRBFNFS"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);