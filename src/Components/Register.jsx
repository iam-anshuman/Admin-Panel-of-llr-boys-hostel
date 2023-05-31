import React, {useState} from "react";
import {Link} from "react-router-dom";
import{auth,googleProvider,fireDB} from "../DB_and_Auth";
import {
    createUserWithEmailAndPassword,
    signOut,
    signInWithPopup,
    GoogleAuthProvider
} from "firebase/auth"
import {addDoc, collection, getDocs, query, where} from "firebase/firestore";

export default function Register(){
    const [user,setUser] = useState({
        First_Name:"",
        Last_Name:"",
        Email:"",
        Password:"",
        Confirm_Password:""
    });

    const presentUser = auth.currentUser;
    if(presentUser){
            console.log(presentUser.displayName,presentUser.email,presentUser.uid);
    }else {
        console.log("No one signed in");
    }

    const handleSignUp = async ()=>{
        if ( user.Password.length<8){
            alert("Password must be 8 characters");
        }
        else if(user.Password !== user.Confirm_Password){
            alert("Password and confirm password must be same");
        } else {
            try{
                const res = await createUserWithEmailAndPassword(auth,user.Email,user.Password);
                const newUser = res.user;
                await addDoc(collection(fireDB,"users"),{
                    uid:newUser.uid,
                    First_Name:user.First_Name,
                    Last_Name:user.Last_Name,
                    Email:user.Email,
                    authProvide:"Local Email And Password"
                })
                setUser({
                    First_Name:"",
                    Last_Name:"",
                    Email:"",
                    Password:"",
                    Confirm_Password:""
                })
            }catch (error) {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("Error Code : ",errorCode);
                console.log("Error Message : ",errorMessage);
            }
        }
    }

    const handleGoogleSignIn = async ()=>{
        try{
            const res = await signInWithPopup(auth,googleProvider);
            const user = res.user;
            const q = query(collection(fireDB, "users"), where("uid", "==", user.uid));
            const docs = await getDocs(q);
            if (docs.docs.length === 0){
                await addDoc(collection(fireDB, "users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
      });

            }
        }catch (error) {
                    const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.error(errorCode,errorMessage,email,credential);
        }


    }

    // const handleFacebookSignIn = async ()=>{
    //     try{
    //         const userCredentials = signInWithPopup(auth,facebookProvider);
    //         const accessToken =   (await userCredentials).accessToken;
    //         const userDetail = (await userCredentials).user;
    //         console.log(accessToken,userCredentials,userDetail)
    //     }catch (err) {
    //         const errorCode = err.code;
    //         const errMessage = err.message;
    //         console.log("Error Code : ",errorCode,"Error Message : ",errMessage)
    //
    //     }
    // }

    const handleSignOut = async ()=>{
        try{
            await signOut(auth);
            window.location.reload();
            alert("Sign out successfully");
            // onLogin(false)
        }catch (err) {
            console.log(err)
        }
    }

    return(
        <>
            <div className="container">
                <div className="card shadow-lg o-hidden border-0 my-5">
                    <div className="card-body p-0">
                        <div className="row">
                            <div className="col-lg-5 d-none d-lg-flex">
                                <div className="flex-grow-1 bg-register-image registerImage"
                                     ></div>
                            </div>
                            <div className="col-lg-7">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h4 className="text-dark mb-4">Create an Account!</h4>
                                    </div>
                                    <form className="user">
                                        <div className="row mb-3">
                                            <div className="col-sm-6 mb-3 mb-sm-0"><input
                                                className="form-control form-control-user" type="text"
                                                id="exampleFirstName" placeholder="First Name" name="first_name" value={user.First_Name||""} onChange={event => setUser({...user,First_Name: event.target.value})}/></div>
                                            <div className="col-sm-6"><input className="form-control form-control-user"
                                                                             type="text" id="exampleLastName"
                                                                             placeholder="Last Name" name="last_name" value={user.Last_Name||""} onChange={event => setUser({...user,Last_Name:event.target.value})}/>
                                            </div>
                                        </div>
                                        <div className="mb-3"><input className="form-control form-control-user"
                                                                     type="email" id="exampleInputEmail"
                                                                     aria-describedby="emailHelp"
                                                                     placeholder="Email Address" name="email" value={user.Email||""} onChange={event => setUser(({...user,Email:event.target.value}))}/></div>
                                        <div className="row mb-3">
                                            <div className="col-sm-6 mb-3 mb-sm-0"><input
                                                className="form-control form-control-user" type="password"
                                                id="examplePasswordInput" placeholder="Password" name="password" value={user.Password||""} onChange={event => setUser({...user,Password:event.target.value})}/></div>
                                            <div className="col-sm-6"><input className="form-control form-control-user"
                                                                             type="password"
                                                                             id="exampleRepeatPasswordInput"
                                                                             placeholder="Repeat Password"
                                                                             name="password_repeat" value={user.Confirm_Password||""} onChange={event => setUser({...user,Confirm_Password:event.target.value})} /></div>
                                        </div>
                                        <div className="btn btn-primary d-block btn-user w-100" type="button"
                                                style={{background:" var(--bs-dark)"}} onClick={handleSignUp}>Register Account
                                        </div>
                                        <hr/><div className="btn btn-primary d-block btn-google btn-user w-100 mb-2" onClick={handleGoogleSignIn}
                                               ><i className="fab fa-google"></i>&nbsp; Register with
                                            Google</div>
                                        <div className="btn btn-warning d-block btn-user w-100" onClick={handleSignOut}
                                                         >&nbsp; Sign Out</div>
                                            <hr/>
                                    </form>
                                    <div className="text-center"><Link className="small" to="/ForgetPassword">Forgot
                                        Password?</Link></div>
                                    <div className="text-center"><Link className="small" to="/Login">Already have an
                                        account? Login!</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}