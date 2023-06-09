
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updatePhoneNumber, updateProfile } from "firebase/auth";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const auth = getAuth(app)
    const [user, setUser] = useState(null)
    const [loading,setLoading]=useState(true)

    const createUser = (name, email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);

    }
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    const authInfo = {
        loading,
        user,
        createUser,
        signIn,
        logOut
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {

            setUser(loggedUser)
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }

    })

    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;