import { createContext, useState, useEffect } from "react";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

// the actual value you want to access
export const UserContext = createContext({
  // empty state of obj
  setCurrentUser: () => null,
  currentUser: null,
});

// Actual component
export const UserProvider = ({ children }) => {
  // We want to store a current user object and set the object/This is fir the state
  const [currentUser, setCurrentUser] = useState(null);
  // We want to generate the value of the value attribute
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    // Use this here b/c it is wahere auth state is maintained
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
