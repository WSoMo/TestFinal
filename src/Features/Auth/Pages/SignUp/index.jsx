import React, { useState } from "react";
import { auth } from "../../../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import AuthDetails from "../../Components/AuthDetails";
import firebase from "firebase/compat/app";
import "./index.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("userCredential", userCredential);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;

        // User not found? Create user.
        if (errorCode === "auth/user-not-found") {
          firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch(function (error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              if (errorCode == "email-already-in-use") {
                alert("You already have an account with that email.");
              } else if (errorCode == "auth/invalid-email") {
                alert("Please provide a valid email");
              } else if (errorCode == "auth/weak-password") {
                alert("The password is too weak.");
              } else {
                alert(errorMessage);
              }
              console.log(error);
            });
          // Wrong Password Error
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
        console.log(error);
      });
  };

  return (
    <div className="sign-up">
      <div className="sign-up-container">
        <div className="sign-up-form">
          <form onSubmit={signUp}>
            <h1>Create an account</h1>
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
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
      <AuthDetails />
    </div>
  );
};

export default SignUp;
