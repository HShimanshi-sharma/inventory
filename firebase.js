// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB552KQ-lx57vGY9vj7AwoJsXzNtnXwu-w",
  authDomain: "pantry1-9076a.firebaseapp.com",
  projectId: "pantry1-9076a",
  storageBucket: "pantry1-9076a.appspot.com",
  messagingSenderId: "510782411702",
  appId: "1:510782411702:web:f5fcf3f11ba6abd0042717",
  measurementId: "G-ZGBQ1FK0QB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export{firestore}