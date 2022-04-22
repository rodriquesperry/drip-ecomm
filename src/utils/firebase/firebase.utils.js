{
  /** 
    * yarn install firebase
    * In firebase: click on web app and create a webapp 
    * import { initializeApp } from "firebase/app"; and import { getAnalytics } from "firebase/analytics";
    * copy firebase declaration and Initialize Firebase
    * import getAuth, SignInWIthRedirect, signInWithPopup, GoogleAuthProvider,
   
*/
}
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  SignInWIthRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDvshFnxEpVpove9ZHo8xCEA6sVsXCV8ls",
  authDomain: "drip-clothing-db.firebaseapp.com",
  projectId: "drip-clothing-db",
  storageBucket: "drip-clothing-db.appspot.com",
  messagingSenderId: "392664374126",
  appId: "1:392664374126:web:fe36a708a6bc473a913f7f",
  measurementId: "G-MP8310VS82",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize a provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
