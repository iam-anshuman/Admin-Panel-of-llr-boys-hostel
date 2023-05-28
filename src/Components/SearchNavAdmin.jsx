import React, {useState} from "react";
import {Link} from "react-router-dom";
import {auth} from "../DB_and_Auth";


export default function SearchNavAdmin() {
    const [adminCard,setAdminCard] = useState(false);
    const currentUser = auth.currentUser;
    const  handleClick = ()=>{
        if (!adminCard){
            setAdminCard(true)
        }else {
            setAdminCard(false)
        }
    }


    return (
        <nav className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top"
             style={{background: "var(--bs-accordion-btn-color)"}}>
            <div className="container-fluid">
                <button className="btn btn-link d-md-none rounded-circle me-3" id="sidebarToggleTop" type="button"><i
                    className="fas fa-bars"></i></button>
                <form className="d-none d-sm-inline-block me-auto ms-md-3 my-2 my-md-0 mw-100 navbar-search">
                    <div className="input-group"><input className="bg-light form-control border-0 small" type="text"
                                                        placeholder="Search for ..."/>
                        <button className="btn btn-primary py-0" type="button" style={{background: "var(--bs-dark)"}}><i
                            className="fas fa-search"></i></button>
                    </div>
                </form>
                <ul className="navbar-nav flex-nowrap ms-auto">
                    <li className="nav-item dropdown d-sm-none no-arrow"><a className="dropdown-toggle nav-link"
                                                                            aria-expanded="false"
                                                                            data-bs-toggle="dropdown"
                                                                            href="/#"><i className="fas fa-search"></i></a>
                        <div className="dropdown-menu dropdown-menu-end p-3 animated--grow-in"
                             aria-labelledby="searchDropdown">
                            <form className="me-auto navbar-search w-100">
                                <div className="input-group"><input className="bg-light form-control border-0 small"
                                                                    type="text" placeholder="Search for ..."/>
                                    <div className="input-group-append">
                                        <button className="btn btn-primary py-0" type="button"><i
                                            className="fas fa-search"></i></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </li>
                    <div className="d-none d-sm-block topbar-divider"></div>
                     <li className="nav-item dropdown no-arrow">
                         <div className={"nav-item dropdown show no-arrow "}><Link className={`dropdown-toggle nav-link ${adminCard?"show":""}`}
                                                                             aria-expanded={adminCard?"true":"false"}
                                                                             data-bs-toggle="dropdown"
                                                                             to="/" onClick={handleClick}><span
                             className="d-none d-lg-inline me-2 text-gray-600 small">{currentUser?currentUser.email:"Admin"}</span><img
                             className="border rounded-circle img-profile" src="assets/img/avatars/Fotor_AI%20(1).png"
                            style={{background: "url(&quot assets/img/avatars/Fotor_AI%20(1).png&quot) center / cover no-repeat"}}
                            alt={" "}/></Link>
                        <div className={`dropdown-menu shadow dropdown-menu-end animated--grow-in ${adminCard?"show":""}`} data-bs-popper={adminCard?"static":" "}>
                            <Link className="dropdown-item" to="/StudentQuery">
                                <i className="fas fa-user fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;StudentQuery
                            </Link>
                            <Link className="dropdown-item" to="/Setting">
                                <i className="fas fa-cogs fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Settings
                            </Link>
                            <Link className="dropdown-item" to="/ActivityLog">
                                <i className="fas fa-list fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Activity log
                            </Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="/Logout">
                                    <i className="fas fa-sign-out-alt fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Logout
                                </Link>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}