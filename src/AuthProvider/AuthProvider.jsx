import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';

 export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null) 
    const [loading, setLoading] = useState(true)
    
    
    const signUpUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return (
            () => {
                unsubscribe()
            }
        )
    }, [auth])
    
    const loginUser = (email , password ) => {
        

        return signInWithEmailAndPassword(auth, email , password)
    }

    const logOutUser = () => {
        return signOut(auth)
    }
    const provider = new GoogleAuthProvider()

    const googleLogin = () => {
        

      return signInWithPopup(auth, provider)

    }

    const userInfo = {
        signUpUser,
        user,
        setUser,
        loginUser,
        logOutUser,
        googleLogin,
        loading,
        setLoading,
       
    }







    return (
        <AuthContext.Provider value={userInfo}>
            {children}


        </AuthContext.Provider>
    );
};

export default AuthProvider;