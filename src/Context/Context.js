import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase.config';
import {createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'


export const AuthContext=createContext()
const auth=getAuth(app)

const Context = ({children}) => {
    const [user,setUser]=useState([])
    const [loading,setLoading]=useState(true)

    const googleProvider=new GoogleAuthProvider()
    const facebookProvider=new FacebookAuthProvider()

    const googleSignIn=()=>{
        return signInWithPopup(auth,googleProvider)
    }

    const facebookSignIn=()=>{
        return signInWithPopup(auth,facebookProvider)
    }

    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }

    //sign in with email and password
    const emailSignIn=(email,password)=>{
        setLoading(true)
        signInWithEmailAndPassword(auth,email,password)
    }

    const emailSignUp=(email,password)=>{
        setLoading(true)
        createUserWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return (()=>unsubscribe())
    })

    const contextValue={
        default:'its okay',
        googleSignIn,
        facebookSignIn,
        logOut,
        user,
        emailSignIn,
        emailSignUp
    }

    return (
        <div>
            <AuthContext.Provider value={contextValue}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default Context;