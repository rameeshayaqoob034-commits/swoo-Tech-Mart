/* =========================================
   FIREBASE SETUP
========================================= */

import { initializeApp }
from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";

import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup
}
from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";


/* =========================================
   FIREBASE CONFIGURATION
========================================= */

const firebaseConfig = {
    apiKey: "AIzaSyD7ptYsh0q-172_yMXQaclNWnJuzeWEuto",
    authDomain: "sowoo-tech-mart.firebaseapp.com",
    projectId: "sowoo-tech-mart",
    storageBucket: "sowoo-tech-mart.firebasestorage.app",
    messagingSenderId: "608153470327",
    appId: "1:608153470327:web:a7b9e34d685e95becd0d72"
};


/* =========================================
   INITIALIZE FIREBASE
========================================= */

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();


/* =========================================
   PASSWORD SHOW / HIDE
========================================= */

const togglePassword =
    document.getElementById("togglePassword");

const loginPassword =
    document.getElementById("loginPassword");


if (togglePassword && loginPassword) {

    togglePassword.addEventListener(
        "click",
        function () {

            if (loginPassword.type === "password") {

                loginPassword.type = "text";

                togglePassword.innerHTML =
                    '<i class="fa-regular fa-eye-slash"></i>';

            } else {

                loginPassword.type = "password";

                togglePassword.innerHTML =
                    '<i class="fa-regular fa-eye"></i>';

            }

        }
    );

}


/* =========================================
   GOOGLE LOGIN
========================================= */

const googleLoginBtn =
    document.getElementById("googleLoginBtn");


if (googleLoginBtn) {

    googleLoginBtn.addEventListener(
        "click",
        async function () {

            try {

                // Open Google login popup
                const result =
                    await signInWithPopup(
                        auth,
                        googleProvider
                    );

                // Get logged-in user
                const user = result.user;

                console.log("Google Login Successful!");

                console.log("Name:", user.displayName);

                console.log("Email:", user.email);

                console.log("User ID:", user.uid);

                // Save basic user information
                localStorage.setItem(
                    "loggedInUser",
                    JSON.stringify({
                        name: user.displayName,
                        email: user.email,
                        photo: user.photoURL,
                        uid: user.uid
                    })
                );

                alert(
                    "Welcome " +
                    user.displayName +
                    "!"
                );

                // Go to home page
                window.location.href =
                    "index.html";

            }

            catch (error) {

    console.error("Google Login Error:", error);

    alert(
        "Google Login Failed!\n\n" +
        "Error Code: " + error.code + "\n" +
        "Message: " + error.message
    );

}
        
        }
    );

/* =========================================
   NORMAL LOGIN
========================================= */

const loginForm =
    document.getElementById("loginForm");


if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            alert(
                "Email/password authentication will be connected next."
            );

        }
    );

}


/* =========================================
   FORGOT PASSWORD
========================================= */

const forgotPassword =
    document.getElementById("forgotPassword");


if (forgotPassword) {

    forgotPassword.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            alert(
                "Password reset will be connected next."
            );

        }
    );
}
}