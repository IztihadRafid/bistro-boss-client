import { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../firebase/firebase.config";


export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

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
    const authInfo = {
        user, loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;