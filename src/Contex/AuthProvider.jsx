import React, { useEffect, useState } from 'react';
import { Autchontex } from './AuthContex';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../Firebase/fitebase.init';
import axios from 'axios';



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
           
            // Post on JWT
           if(currentUser?.email){
            axios.post('https://career-code-server-gilt.vercel.app/jwt',{UserEmail: currentUser.email},{withCredentials:true})
            // .then(res => console.log(res.data))
            // .catch(error => console.log(error))
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