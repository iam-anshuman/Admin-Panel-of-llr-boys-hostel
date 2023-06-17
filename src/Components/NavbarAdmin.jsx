import React, {useState} from "react";
import {Link} from "react-router-dom";

export default function NavbarAdmin(){
    const [sidebar,setSidebar] = useState(false);

    const handleClick = ()=>{
        if(!sidebar) {
            setSidebar(true)
        }else {
            setSidebar(false)
        }
    }


    return(
        <>
            <nav className={`navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0 ${sidebar?"toggled":""}`}
                 style={{background: "var(--bs-dark)"}}>
                <div className="container-fluid d-flex flex-column p-0"><a
                    className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0"
                    href="/">
                    <div className="sidebar-brand-icon rotate-n-15"><i className="fas fa-hotel"
                                                                       style={{fontSize: "31px",transform: "rotate(15deg) skew(0deg)"}}></i>
                    </div>
                    <div className="sidebar-brand-text mx-3"><span style={{fontSize:" 13px"}}>LLR boys hostel</span></div>
                </a>
                    <hr className="sidebar-divider my-0"/>
                        <ul className="navbar-nav text-light" id="accordionSidebar">
                            <li className="nav-item"></li>
                            <li className="nav-item"><Link className="nav-link" to="/Student"><i
                                className="fas fa-table"></i><span>Students</span></Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/StudentQuery"><i
                                className="fas fa-user"></i><span>StudentQuery</span></Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/AddStudent"><i
                                className="fas fa-users"></i><span>Add Students</span></Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/Payments"><i
                                className="fa fa-credit-card"></i><span>Payments</span></Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/Login"><i
                                className="far fa-user-circle"></i><span>Login</span></Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/Register"><i
                                className="fas fa-user-circle"></i><span>Register</span></Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/ForgetPassword"><i
                                className="fas fa-key"></i><span>Forgotten Password</span></Link></li>
                            <li className="nav-item"></li>
                        </ul>
                        <div className="text-center d-none d-md-inline">
                            <button className="btn rounded-circle border-0" id="sidebarToggle" type="button" onClick={handleClick}></button>
                        </div>
                </div>
            </nav>
        </>
    )
}