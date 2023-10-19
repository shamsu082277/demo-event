import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from '../firebase/firebase.config';

export const AuthContext =createContext(null);   


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const[user,setUser] =useState({});
    const[loading,setLoading] =useState(true)
    // google login 
    const googleLogin =()=>{
        setLoading(true);    
       return signInWithPopup(auth , googleProvider)
    }

    // Sign up
    const createUser =(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email, password)
    }

    // Sign in / Log in

    const signIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)

    }

    // Update user
    const handleUpdateProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    // log out

    const logOut =()=>{
        return signOut(auth);
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
          });

    },[])



    const authentications = {
        googleLogin,
        createUser,
        signIn,
        logOut,
        user,
        loading,
        handleUpdateProfile
    }

    return (
        <AuthContext.Provider value ={authentications}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;