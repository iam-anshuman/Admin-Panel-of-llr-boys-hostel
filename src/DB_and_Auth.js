import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider,FacebookAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyD5-N_dprMn91ix3iDUK2CLxHV0MfvW16s",
    authDomain: "llrboyshostel-2f052.firebaseapp.com",
    projectId: "llrboyshostel-2f052",
    storageBucket: "llrboyshostel-2f052.appspot.com",
    messagingSenderId: "218598352167",
    appId: "1:218598352167:web:bc285461d707fb32c5b502",
    measurementId: "G-MPTY2KR5XQ",
    databaseURL: "https://llrboyshostel-2f052-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);

const auth = getAuth();

const googleProvider = new GoogleAuthProvider(app);

const facebookProvider = new FacebookAuthProvider(app)

const currentUser = auth.currentUser;



export {fireDB, auth, googleProvider , facebookProvider,currentUser };