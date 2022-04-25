import { useState, useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignupForm from "../../components/sign-up-form/sign-up-form.component";
import Button from "../../components/button/button.component";
import FormInput from "../../components/formInput/form-input.component";

import "./authentication.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  useEffect(() => {
    (async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    })();
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  return (
    <div>
      <h2>I already have an account</h2>
      <h4>Sign in with your email and password</h4>
      <div className="sign-in-container">
        <Button buttonType="google" onClick={logGoogleUser}>
          Sign In with Google Popup
        </Button>
      </div>
      <SignupForm />
    </div>
  );
};

export default SignIn;
