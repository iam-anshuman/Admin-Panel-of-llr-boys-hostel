import React, {useState } from "react";
import {Link} from "react-router-dom";
import {signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth"
import {auth, fireDB, googleProvider} from "../DB_and_Auth";
import {collection, getDocs, query, where} from "firebase/firestore";
export default function Login({onLogin}){
    const [loginDetail,setLoginDetail] = useState({
        email : "",
        password : ""
    });
    const currentUser = auth.currentUser;
    currentUser&&console.log(currentUser.uid,currentUser.email)
    const handleLogin = async ()=>{
        try {
            // e.preventDefault();
            const res = await signInWithEmailAndPassword(auth,loginDetail.email,loginDetail.password);
            const currentUser = res.user;
            console.log(currentUser.email,currentUser.uid);
            onLogin(true);
        }catch (error) {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("Error Code : ",errorCode);
                console.log("Error Message : ",errorMessage);
            
        }
    }

    const handleSignInGoogle = async ()=>{
        try{
            const res = await signInWithPopup(auth,googleProvider);
            const user = res.user;
            const q = query(collection(fireDB, "users"), where("uid", "==", user.uid));
            const docs = await getDocs(q);
            console.log("Email : ",user.email,"UID : ",user.uid);
        }catch (error) {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("Error Code : ",errorCode);
                console.log("Error Message : ",errorMessage);
        }
    }

    const handleSignOut = async ()=>{
         try{
            await signOut(auth);
            window.location.reload();
            alert("Sign out successfully");
            onLogin(false)
        }catch (err) {
            console.log(err)
        }
    }

    return(
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-9 col-lg-12 col-xl-10">
                        <div className="card shadow-lg o-hidden border-0 my-5">
                            <div className="card-body p-0">
                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-flex">
                                        <div className="flex-grow-1 bg-login-image loginImage"
                                             ></div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h4 className="text-dark mb-4">Welcome Back!</h4>
                                            </div>
                                            <form className="user">
                                                <div className="mb-3"><input className="form-control form-control-user"
                                                                             type="email" id="exampleInputEmail"
                                                                             aria-describedby="emailHelp"
                                                                             placeholder="Enter Email Address..."
                                                                             name="email" onChange={event => setLoginDetail({...loginDetail,email:event.target.value})} value={loginDetail.email||""}/></div>
                                                <div className="mb-3"><input className="form-control form-control-user"
                                                                             type="password" id="exampleInputPassword"
                                                                             placeholder="Password" name="password" onChange={event => setLoginDetail({...loginDetail,password:event.target.value})} value={loginDetail.password||""}/>
                                                </div>
                                                {/*<div className="mb-3">*/}
                                                {/*    <div className="custom-control custom-checkbox small">*/}
                                                {/*        <div className="form-check"><input*/}
                                                {/*            className="form-check-input custom-control-input"*/}
                                                {/*            type="checkbox" id="formCheck-1"/><label*/}
                                                {/*            className="form-check-label custom-control-label"*/}
                                                {/*            htmlFor="formCheck-1">Remember Me</label></div>*/}
                                                {/*    </div>*/}
                                                {/*</div>*/}
                                                <div className="btn btn-primary d-block btn-user w-100" type={"submit"}  onClick={handleLogin}
                                                        style={{background: "var(--bs-dark)"}}>Login
                                                </div>
                                                <hr/><div
                                                    className="btn btn-primary d-block btn-google btn-user w-100 mb-2" onClick={handleSignInGoogle}
                                                    ><i className="fab fa-google" ></i>&nbsp; Login with
                                                    Google</div><button
                                                    className="btn btn-primary d-block btn-facebook btn-user w-100"
                                                    ><i className="fab fa-facebook-f"></i>&nbsp; Login with
                                                    Facebook</button>
                                                    <hr/>
                                                <button
                                                    className="btn btn-warning d-block  btn-user w-100" onClick={handleSignOut}
                                                    >&nbsp; SignOut</button>
                                                    <hr/>
                                            </form>
                                            <div className="text-center"><Link className="small"
                                                                            to="/ForgetPassword">Forgot
                                                Password?</Link></div>
                                            <div className="text-center"><Link className="small" to="/Register">Create
                                                an Account!</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}