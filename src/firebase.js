import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBairZrtsMSDTSJ2yw7F377ltjrWcg08gs",
    authDomain: "cypsych-c7908.firebaseapp.com",
    projectId: "cypsych-c7908",
    storageBucket: "cypsych-c7908.appspot.com",
    messagingSenderId: "145659657421",
    appId: "1:145659657421:web:2982f7359d33c49382bd84",
    measurementId: "G-5XNTNE25BS"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);