import React, {useState} from "react";
import SearchNavAdmin from "./SearchNavAdmin";
import Student from "./Student";
import {Route, Routes} from "react-router-dom";
import ForgetPassword from "./ForgetPassword";
import Login from "./Login";
import Register from "./Register";
import AddStudent from "./AddStudent";
import StudentQuery from "./StudentQuery";
import PaymentView from "./PaymentView";
export default function Content(){
    const [authStatus,setAuthStatus]=useState(false);
    const handleLoginStatus = (logInStatus)=>{
        setAuthStatus(logInStatus);
    }
    return(
        <div className={"d-flex flex-column"} id={"content-wrapper"}>
            <div id="content">
                <SearchNavAdmin authStatus = {authStatus} onLogin={handleLoginStatus}/>
                <Routes>
                    <Route path={"/"} element={<Student/>}/>
                    <Route path={'/Student'} element={<Student/>}/>
                    <Route path={"/ForgetPassword"} element={<ForgetPassword/>}/>
                    <Route path={"/Login"} element={<Login onLogin={handleLoginStatus}/>}/>
                    <Route path={"/Register"} element={<Register/>}/>
                    <Route path={"/AddStudent"} element={<AddStudent/>}/>
                    <Route path={"/StudentQuery"} element={<StudentQuery/>}/>
                    <Route path={"/Payments"} element={<PaymentView/>}/>
                </Routes>
            </div>
        </div>
    )
}