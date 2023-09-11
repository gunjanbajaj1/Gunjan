import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { firebaseConfig } from "./firebase.config.local.js";

import {
    getAuth , 
    FacebookAuthProvider , 
    signInWithPopup, 
    GoogleAuthProvider, 
    getRedirectResult,  
    getAdditionalUserInfo
} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const providerFB = new FacebookAuthProvider();
const auth = getAuth();

export const onLogin = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log(user);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const onLoginFB = () => {
    signInWithPopup(auth, providerFB)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
      })
      .catch((error) => {
        console.log(error);
      });
  };

export const onAlreadyLoggedIn = () => {
  auth.onAuthStateChanged((user) => {
    console.log("user: ", user);
    if (!user) {
      return;
    }

    // Redirect user to homepage
    window.location.href = "./index.html";
  });
};