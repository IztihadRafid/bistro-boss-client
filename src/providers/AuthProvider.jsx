import { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";


export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    //State Change for User
   useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser);
        console.log("Current User: ",currentUser);
        setLoading(false)
    })
    return ()=>{
        return unSubscribe();
    }
   },[]) 
   //create user
   const createUser= ( email, password)=>{
    setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
   }
   //Login/Sign in
   const signIn = (email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
   }

   //LogOut/SignOut
   const logOut = ()=>{
    setLoading(true)
    return signOut(auth)
   }
   //updateProfile
   const updateUserProfile =(name,photo)=>{
   return updateProfile(auth.currentUser,{
        displayName: name,photoURL:photo
    })
    
   }
    const authInfo = {
        user, loading,createUser,signIn,logOut,updateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;