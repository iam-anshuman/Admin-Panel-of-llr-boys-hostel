import React from "react";
import {Link} from "react-router-dom";
export default function Login(){
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
                                                                             name="email"/></div>
                                                <div className="mb-3"><input className="form-control form-control-user"
                                                                             type="password" id="exampleInputPassword"
                                                                             placeholder="Password" name="password"/>
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
                                                <button className="btn btn-primary d-block btn-user w-100" type="submit"
                                                        style={{background: "var(--bs-dark)"}}>Login
                                                </button>
                                                <hr/><a
                                                    className="btn btn-primary d-block btn-google btn-user w-100 mb-2"
                                                    role="button"><i className="fab fa-google"></i>&nbsp; Login with
                                                    Google</a><a
                                                    className="btn btn-primary d-block btn-facebook btn-user w-100"
                                                    role="button"><i className="fab fa-facebook-f"></i>&nbsp; Login with
                                                    Facebook</a>
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