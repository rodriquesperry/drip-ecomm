import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  snapshotEqual,
} from "firebase/firestore";

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
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

// Sign-in
export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

// FireStore
export const db = getFirestore();

// We want to take our information from our Auth and put it in our database using the methods from "firebase/firestore"
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation
) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  //   Method that shows data if it exists
  const userSnapshot = await getDoc(userDocRef);

  // if userData does not exist
  // Create / set the document with the data from userAuth in my collection
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  //   if user data exists

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    return;
  }
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    return;
  }
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

// This is always open. Meaning that it constantly looks for a change in the Auth state
// and the moment it changes it runs the callback
export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
