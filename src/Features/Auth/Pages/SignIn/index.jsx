import React, { useState } from 'react';
import { auth } from '../../../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import 'firebase/compat/auth';
import './index.css';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const uiConfig = {
        // Popup signin flow rather than redirect flow.
        signInFlow: 'redirect',
        signInSuccessUrl: '/',
        // We will display Google and Facebook as auth providers.
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID
        ]
    };

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log('userCredential', userCredential);
            }).catch((error) => {
                console.log('error', error);
                alert('user not found');
            });
    }

    return (
        <div className='sign-in'>
            <div className="sign-in-container">
                <div className="sign-in-form">
                    <form onSubmit={signIn}>
                        <h1>Log in</h1>
                        <input type="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button type='submit'>Log in</button>
                    </form>
                </div>
                <a href="/signup">Sign up</a>
                <div>or</div>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            </div>
        </div>
    )
}

export default SignIn;