// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; //Firebase SDK for initializeApp
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getStorage } from "firebase/storage"; //Firebase SDK for getStorage
import { getAuth } from "firebase/auth"; //Firebase SDK for getAuth
import { getFirestore } from "firebase/firestore"; //Firebase SDK for getFirestore
import { getFunctions } from "firebase/functions"; //Firebase SDK for getFunctions
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const FirebaseConfig = { //Initialize configuration variables
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  };

// Initialize Firebase
const Firebase = initializeApp(FirebaseConfig); //Constant implementation to be exported as resource for firebase
const FbStorage = getStorage(Firebase); //Constant implementation to be exported as resource for storage
const FbAuth = getAuth(Firebase); //Constant implementation to be exported as resource for authentication
const FbDB = getFirestore(Firebase); //Constant implementation to be exported as resource for firestore
const FbFunct = getFunctions(Firebase); //Constant implementation to be exported as resource for functions
// const analytics = getAnalytics(Firebase);

export { Firebase, FbStorage, FbAuth, FbDB, FbFunct }; //Exports