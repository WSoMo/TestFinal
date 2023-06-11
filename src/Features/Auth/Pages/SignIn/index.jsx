import React, { useState } from "react";
import { auth } from "../../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import firebase from "firebase/compat/app";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import "firebase/compat/auth";
import "./index.css";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "redirect",
    signInSuccessUrl: "/",
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
  };

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/");
        console.log("userCredential", userCredential);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;

        if (errorCode === "auth/user-not-found") {
          alert("User not found. Please try again");
        } else if (errorCode == "email-already-in-use") {
          alert("You already have an account with that email.");
        } else if (errorCode == "auth/invalid-email") {
          alert("Please provide a valid email");
        } else if (errorCode == "auth/weak-password") {
          alert("The password is too weak.");
        } else if (errorCode === "auth/wrong-password") {
          // Check if User has signed up with a OAuthProvider
          firebase
            .auth()
            .fetchProvidersForEmail(email)
            .then(function (result) {
              // … show OAuthProvider Login Button
            });
          alert("Wrong password. Please try again");
        } else {
          alert(errorMessage);
        }
      });
  };

  return (
    <div className="sign-in">
      <div className="sign-in-container">
        <div className="sign-in-form">
          <form onSubmit={signIn} target="_blank">
            <h1>Log in</h1>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Log in</button>
          </form>
        </div>
        <a href="/signup">Sign up</a>
        <div>or</div>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    </div>
  );
};

export default SignIn;
