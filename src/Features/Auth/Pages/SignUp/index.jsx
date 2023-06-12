import { createUserWithEmailAndPassword } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import React, { useState } from 'react';
import { auth } from '../../../../firebase';
import AuthDetails from '../../Components/AuthDetails';
import './index.css';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // var config = {
    //     apiKey: "apiKey",
    //     authDomain: "projectId.firebaseapp.com",
    //     databaseURL: "https://databaseName.firebaseio.com"
    // };
    // var secondaryApp = firebase.initializeApp(config, "Secondary");

    // secondaryApp.auth().createUserWithEmailAndPassword(email, password).then(function (firebaseUser) {
    //     console.log("User " + firebaseUser.uid + " created successfully!");
    //     secondaryApp.auth().signOut();
    // });


    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log('userCredential', userCredential);
            }).catch((error) => {
                console.log('error', error);
            });
    }

    return (
        <div className='sign-up'>
            <div className="sign-up-container">
                <div className="sign-up-form">
                    <form onSubmit={signUp}>
                        <h1>Create an account</h1>
                        <input type="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button type='submit'>Sign Up</button>
                    </form>
                </div>
            </div>
            <AuthDetails />
        </div>
    )
}

export default SignUp;