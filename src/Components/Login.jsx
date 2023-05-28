import React, {useState} from "react";
import {Link} from "react-router-dom";
import {signInWithEmailAndPassword} from "firebase/auth"
import {auth} from "../DB_and_Auth";
export default function Login(){
    const [loginDetail,setLoginDetail] = useState({
        email : "",
        password : ""
    });
    const currentUser = auth.currentUser;
    currentUser?console.log("Email : ",currentUser.email,"UID : ",currentUser.uid):console.log("No one is logged in");
    const handleLogin = async ()=>{
        try {
            const res = await signInWithEmailAndPassword(auth,loginDetail.email,loginDetail.password);
            const currentUser = res.user;
            console.log(currentUser.email,currentUser.uid)

        }catch (error) {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("Error Code : ",errorCode);
                console.log("Error Message : ",errorMessage);
            
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
                                                <div className="mb-3">
                                                    <div className="custom-control custom-checkbox small">
                                                        <div className="form-check"><input
                                                            className="form-check-input custom-control-input"
                                                            type="checkbox" id="formCheck-1"/><label
                                                            className="form-check-label custom-control-label"
                                                            htmlFor="formCheck-1">Remember Me</label></div>
                                                    </div>
                                                </div>
                                                <div className="btn btn-primary d-block btn-user w-100"  onClick={handleLogin}
                                                        style={{background: "var(--bs-dark)"}}>Login
                                                </div>
                                                <hr/><div
                                                    className="btn btn-primary d-block btn-google btn-user w-100 mb-2"
                                                    ><i className="fab fa-google"></i>&nbsp; Login with
                                                    Google</div><button
                                                    className="btn btn-primary d-block btn-facebook btn-user w-100"
                                                    ><i className="fab fa-facebook-f"></i>&nbsp; Login with
                                                    Facebook</button>
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