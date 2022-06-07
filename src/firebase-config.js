// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5SNdTMC-0mKi7PhouNg9CrgjhRLg_30c",
  authDomain: "fir-app-d2ebe.firebaseapp.com",
  projectId: "fir-app-d2ebe",
  storageBucket: "fir-app-d2ebe.appspot.com",
  messagingSenderId: "649903217814",
  appId: "1:649903217814:web:91060a6cf2c17cb8f436b7",
  measurementId: "G-X4VYK55PNR"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 



// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDUUlqlUMn-xonix0a-E79AAWhWSoBrTj0",
//   authDomain: "rmad-02-59a2e.firebaseapp.com",
//   projectId: "rmad-02-59a2e",
//   storageBucket: "rmad-02-59a2e.appspot.com",
//   messagingSenderId: "316400037505",
//   appId: "1:316400037505:web:2e058cc3eb260712342780",
//   measurementId: "G-82947WS1LX"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const db=getFirestore(app);
