import React, { useEffect, useState } from 'react';
import { Autchontex } from './AuthContex';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../Firebase/fitebase.init';


const AuthProvider = ({ children }) => {

    const [loding, setLoding] = useState(true)
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        setLoding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signOutUser = () => {
        setLoding(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsuscrive = onAuthStateChanged(auth, currentUser => {
            setLoding(false)
            setUser(currentUser)
            // console.log('useEffect currentuser',currentUser);

            if (currentUser?.email) {
                const userEmail = { userEmail: currentUser.email }
                fetch('http://localhost:3000/jwt', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userEmail)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('after post on jwt', data);
                        const token = data.token;
                        console.log(token);
                    })

            }


        })
        return () => {
            unsuscrive
        }
    }, [])


    const userInfo = {
        createUser,
        signInUser,
        loding,
        user,
        signOutUser,

    }

    return (
        <Autchontex value={userInfo}>
            {children}
        </Autchontex>
    );
};

export default AuthProvider;