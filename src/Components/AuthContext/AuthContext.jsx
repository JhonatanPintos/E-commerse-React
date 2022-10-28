import React, { useState, useEffect, createContext, useContext } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth";
import { auth } from "../Firebase/Firebase"

export const ContextA = createContext()

export const useAuth = () => {
    const context = useContext(ContextA)
    return context
}


const AuthContext = ({ children }) => {

    const [user, setUser] = useState(null)

    const loginWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider)
    }

    const signUp = (email, password) =>
        createUserWithEmailAndPassword(auth, email, password)

    const login = (email, password) =>
        signInWithEmailAndPassword(auth, email, password)

    const logOut = () => signOut(auth)

    useEffect(() => {
        const desLog = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return () => desLog()
    }, [])

    return (
        <ContextA.Provider value={{ signUp, login, user, logOut, loginWithGoogle }}>
            {children}
        </ContextA.Provider>
    )
}

export default AuthContext