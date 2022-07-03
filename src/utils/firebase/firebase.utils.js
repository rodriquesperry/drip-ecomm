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
  collection,
  writeBatch,
  query,
  getDocs,
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

// FireStore Database Connnection
export const db = getFirestore();

//*****  Statr of communicating with the DataBase *****//
// ***** becuase we are calling to an outside reference(the database) we will want our function to be async *****//
// ***** This function is for wirting to the databse, something like a PUT *****//
export const addCollectionAndDocuments = async (
  collectionKeyValue,
  objectsToAdd,
  field
) => {
  // notice the similarities between collectionRef and userDocRef...Take a look at the db tables for better understanding.
  const collectionRef = collection(db, collectionKeyValue);
  // We store all transactions of the datbase inside of the collection and want to ensure all transactions are successful
  // In order to write to the db we use a batch. writeBatch allows us CRUD operations.
  const batch = writeBatch(db);
  objectsToAdd.forEach((object) => {
    // NOte look at collectionRef and what it's purpose is. Make sure you still can understand THIS!!
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
  console.log("done!");
};
// ***** This function is fetching from the databse, something like a GET *****//
// We want to set collectionRef again like above, but this time we know specifically which keyValue we want
export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};

// ******  Start of creating and signing in Auth Users *******//
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
