import { onAuthStateChanged, signOut } from 'firebase/auth';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { auth } from '../../../../firebase';
import { browserSessionPersistence, setPersistence, signInWithEmailAndPassword } from 'firebase/auth';

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null)

    setPersistence(auth, browserSessionPersistence)
        .then(() => {
            // Existing and future Auth states are now persisted in the current
            // session only. Closing the window would clear any existing state even
            // if a user forgets to sign out.
            // ...
            // New sign-in will be persisted with session persistence.
            return 
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
        });

    useEffect(() => {
        console.log('auth', auth);
        console.log('setAuthUser', authUser);
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        })
    }, [])

    const userSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log('Signed Out');
            })
            .catch((error) => {
                console.log('error', error);
            });
    }

    return (
        <div>
            {authUser ?
                <>
                    <p>{`Signed In as ${authUser.email}`}</p>
                    <button onClick={userSignOut}>Sign Out</button>
                </>
                : <p>Signed Out</p>}
        </div>
    )
}

export default AuthDetails;