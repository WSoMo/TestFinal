import { onAuthStateChanged, signOut } from 'firebase/auth';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { auth } from '../../../../firebase';

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null)

    useEffect(() => {
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