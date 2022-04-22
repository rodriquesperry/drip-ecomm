import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  SignInWIthRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

{
  /** 
    * yarn install firebase
    * In firebase: click on web app and create a webapp 
    * import { initializeApp } from "firebase/app"; and import { getAnalytics } from "firebase/analytics";
    * copy firebase declaration and Initialize Firebase
    * import getAuth, SignInWIthRedirect, signInWithPopup, GoogleAuthProvider,
   
*/
}

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

// Sign-in
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// FireStore
export const db = getFirestore();

// We want to take our information from our Auth and put it in our database using the methods from "firebase/firestore"
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

//   Method that shows data if it exists
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);

};
