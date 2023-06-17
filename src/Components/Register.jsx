import React, {useState} from "react";
import {Link} from "react-router-dom";

import {useUserAuth} from "../Context/UserAuthContext";
import {Alert} from "react-bootstrap";

export default function Register(){
    const [user,setUser] = useState({
        First_Name:"",
        Last_Name:"",
        Email:"",
        Password:"",
        Confirm_Password:""
    });
    const [error,setError] = useState("")
    const { signUp } = useUserAuth();

    const handleSignUp = async ()=>{
        setError("")

            try{
                await signUp(user.Email,user.Password);
                setUser({
                    First_Name:"",
                    Last_Name:"",
                    Email:"",
                    Password:"",
                    Confirm_Password:""
                })
            }catch (error) {
                setError(error.message);
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
                                    {error&&<Alert variant={"danger"}>{error}</Alert>}
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
                                        <hr/>
                                        {/*<div className="btn btn-primary d-block btn-google btn-user w-100 mb-2"*/}
                                        {/*       ><i className="fab fa-google"></i>&nbsp; Register with*/}
                                        {/*    Google</div>*/}
                                        <div className="btn btn-warning d-block btn-user w-100"
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