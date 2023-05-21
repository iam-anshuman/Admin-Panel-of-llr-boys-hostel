import React from "react";
import SearchNavAdmin from "./SearchNavAdmin";
import Student from "./Student";
import {Route, Routes} from "react-router-dom";
import ForgetPassword from "./ForgetPassword";
import Login from "./Login";
import Register from "./Register";
import FourZeroFour from "./FourZeroFour";
import StudentQuery from "./StudentQuery";
export default function Content(){
    return(
        <div className={"d-flex flex-column"} id={"content-wrapper"}>
            <div id="content">
                <SearchNavAdmin/>
                <Routes>
                    <Route path={"/"} element={<Student/>}/>
                    <Route path={'/Student'} element={<Student/>}/>
                    <Route path={"/ForgetPassword"} element={<ForgetPassword/>}/>
                    <Route path={"/Login"} element={<Login/>}/>
                    <Route path={"/Register"} element={<Register/>}/>
                    <Route path={"/404"} element={<FourZeroFour/>}/>
                    <Route path={"/StudentQuery"} element={<StudentQuery/>}/>
                </Routes>
            </div>
        </div>
    )
}