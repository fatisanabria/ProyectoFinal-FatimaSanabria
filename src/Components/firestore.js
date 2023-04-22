import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDAGdHH7wJOTWxWZ3vEJFNeA0mHl0jMHlU",
    authDomain: "merlina-s-showroom.firebaseapp.com",
    projectId: "merlina-s-showroom",
    storageBucket: "merlina-s-showroom.appspot.com",
    messagingSenderId: "282245349874",
    appId: "1:282245349874:web:7ecc4e353687fb7c3d2b6b"
};

const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app) 