import { initializeApp } from "firebase/app"; //Firebase SDK for initializeApp
import { getFirestore } from "firebase/firestore"; //Firebase SDK for getFirestore
import { getAuth } from "firebase/auth"; //Firebase SDK for getAuth
import { getStorage } from "firebase/storage"; //Firebase SDK for getStorage
import { getFunctions } from "firebase/functions"; //Firebase SDK for getFunctions

const FirebaseConfig = { //Initialize configuration variables
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  };

const Firebase = initializeApp(FirebaseConfig); //Constant implementation to be exported as resource for firebase
const FbDB = getFirestore(Firebase); //Constant implementation to be exported as resource for firestore
const FbAuth = getAuth(Firebase); //Constant implementation to be exported as resource for authentication
const FbStorage = getStorage(Firebase); //Constant implementation to be exported as resource for storage
const FbFunct = getFunctions(Firebase); //Constant implementation to be exported as resource for functions

export { Firebase, FbStorage, FbAuth, FbDB, FbFunct }; //Exports