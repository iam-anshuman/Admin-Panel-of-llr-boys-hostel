import React, {useState} from "react";
import {Link} from "react-router-dom";
import {auth} from "../DB_and_Auth"
import {sendPasswordResetEmail} from "firebase/auth"

export default function ForgetPassword(){
    const [email,setEmail] = useState("");
    const handleSubmit = async ()=>{

        try {
             await sendPasswordResetEmail(auth, email);

            alert("Password reset link sent!");
        } catch (err) {
            console.error(err);
            alert(err.message);
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
                                        <div className="flex-grow-1 bg-password-image passwordImage"
                                             ></div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h4 className="text-dark mb-2">Forgot Your Password?</h4>
                                                <p className="mb-4">We get it, stuff happens. Just enter your email
                                                    address below and we'll send you a link to reset your password!</p>
                                            </div>
                                            <form className="user">
                                                <div className="mb-3"><input className="form-control form-control-user"
                                                                             type="email" id="exampleInputEmail"
                                                                             aria-describedby="emailHelp"
                                                                             placeholder="Enter Email Address..."
                                                                             name="email" onChange={event => setEmail(event.target.value)} value={email}/></div>
                                                <button className="btn btn-primary d-block btn-user w-100" type="submit"
                                                        style={{background: "var(--bs-dark)"} } onClick={handleSubmit}>Reset Password
                                                </button>
                                            </form>
                                            <div className="text-center">
                                                <hr/><Link className="small" to="/Register">Create an Account!</Link>
                                            </div>
                                            <div className="text-center"><Link className="small" to="/Login">Already
                                                have an account? Login!</Link></div>
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