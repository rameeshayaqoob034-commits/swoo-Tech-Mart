import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";

import {
    getAuth,
    GoogleAuthProvider
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyAzP7-5gCEm7jbh7BssKk6OJgns2m5EBVE",
    authDomain: "sowoo-mart.firebaseapp.com",
    projectId: "sowoo-mart",
    storageBucket: "sowoo-mart.firebasestorage.app",
    messagingSenderId: "448827849798",
    appId: "1:448827849798:web:79ee0ef315718099ed1e47",
    measurementId: "G-9SY66LGQQH"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Firebase Authentication
const auth = getAuth(app);


// Google Provider
const googleProvider = new GoogleAuthProvider();


// Export
export {
    auth,
    googleProvider
};