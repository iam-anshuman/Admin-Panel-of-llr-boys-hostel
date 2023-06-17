import React,{createContext, useContext, useEffect, useState} from "react";
import {signInWithEmailAndPassword,createUserWithEmailAndPassword,signOut,onAuthStateChanged} from "firebase/auth";
import {auth} from "../DB_and_Auth";

const userAuthContext = createContext();

export function UserAuthContextProvider({children}){
    const [user,setUser] = useState(null);
    function signUp(email,password){
        return createUserWithEmailAndPassword(auth,email,password);
    }
    function logIn(email,password){
        return signInWithEmailAndPassword(auth,email,password);
    }

    function SignOut(){
        return signOut(auth);
    }

    useEffect(()=>{
        const unsuscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
        });
        return ()=>{
            unsuscribe();
        }

    },[]);
    useEffect(() => {
    // Fetch the user's email once the user object is available
    if (user && user.email) {
      console.log("User email:", user.email);
      // You can perform any necessary rendering or logic based on the user's email here
    }
  }, [user]);
    return(
        <userAuthContext.Provider value={{user,signUp,logIn ,SignOut}}>
            {children}
        </userAuthContext.Provider>
    )
}

export function useUserAuth(){
    return useContext(userAuthContext)
}