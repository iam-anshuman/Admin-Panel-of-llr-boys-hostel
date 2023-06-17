import React, {useEffect, useState} from "react";
import {collection,getDocs,} from "firebase/firestore"
import {fireDB} from "../DB_and_Auth";
import {Alert} from "react-bootstrap";

export default function Student(){

    const [hosteler,setHosteler] = useState([]);
    const [error,setError] = useState("")

    useEffect(() => {
    const getStudentDetail = async () => {
        try{
            const docSnap = await getDocs(collection(fireDB, "Hostelers"));
            const studentData = docSnap.docs.map((student) => student.data());
            setHosteler(studentData);
        }catch (error) {
            // alert("You Are not logged in . kindly SignIn or SignUp for viewing details");
            setError(error.message)
        }


        };

        getStudentDetail();
    }   , []);

    return(
        <>
            <div className="container-fluid">
                {error&&<Alert variant={"danger"}>{error} Please LogIn Your Account to see details</Alert>}
                <h3 className="text-dark mb-4">Students</h3>
                <div className="card shadow">
                    <div className="card-header py-3">
                        <p className="text-primary m-0 fw-bold bodyColor">Hostelers
                            Info</p>
                    </div>
                    <div className="card-body">
                        {/*<div className="row">*/}
                            {/*<div className="col-md-6 text-nowrap">*/}
                            {/*    <div id="dataTable_length" className="dataTables_length" aria-controls="dataTable">*/}
                            {/*        <label className="form-label">Show&nbsp;<select*/}
                            {/*            className="d-inline-block form-select form-select-sm" defaultValue={10}>*/}
                            {/*            <option value="10" defaultValue={10}>10</option>*/}
                            {/*            <option value="25">25</option>*/}
                            {/*            <option value="50">50</option>*/}
                            {/*            <option value="100">100</option>*/}
                            {/*        </select>&nbsp;</label></div>*/}
                            {/*</div>*/}
                            {/*<div className="col-md-6">*/}
                            {/*    <div className="text-md-end dataTables_filter" id="dataTable_filter"><label*/}
                            {/*        className="form-label"><input type="search" className="form-control form-control-sm"*/}
                            {/*                                      aria-controls="dataTable"*/}
                            {/*                                      placeholder="Search"/></label></div>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                        <div className="table-responsive table mt-2" id="dataTable-1" role="grid"
                             aria-describedby="dataTable_info">
                            <table className="table my-0" id="dataTable">
                                <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                    <th>Room Number</th>
                                    <th>Payment</th>
                                </tr>
                                </thead>
                                <tbody>
                                {hosteler.map((item,index)=>{
                                    return  <tr key={index}>
                                    <td><img className="rounded-circle me-2" width="30" height="30"
                                             src="assets/img/avatars/avatar1.jpeg" alt={" "} />{item.name}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.email}</td>
                                    <td>{item.Room_number}</td>
                                    <td>{item.Payment}</td>
                                </tr>
                                })}

                                </tbody>
                                <tfoot>
                                <tr>
                                    <td><strong>Name</strong></td>
                                    <td><strong>Phone</strong></td>
                                    <td><strong>Email</strong></td>
                                    <td><strong>Room Number</strong></td>
                                    <td><strong>Paymrnt</strong></td>
                                </tr>
                                </tfoot>
                            </table>
                        </div>
                        {/*<div className="row">*/}
                        {/*    <div className="col-md-6 align-self-center">*/}
                        {/*        <p id="dataTable_info" className="dataTables_info" role="status"*/}
                        {/*           aria-live="polite">Showing 1 to 10 of 27</p>*/}
                        {/*    </div>*/}
                        {/*    <div className="col-md-6">*/}
                        {/*        <nav*/}
                        {/*            className="d-lg-flex justify-content-lg-end dataTables_paginate paging_simple_numbers">*/}
                        {/*            <ul className="pagination">*/}
                        {/*                <li className="page-item disabled"><a className="page-link"*/}
                        {/*                                                      aria-label="Previous" href="/#"><span*/}
                        {/*                    aria-hidden="true">«</span></a></li>*/}
                        {/*                <li className="page-item active"><a className="page-link" href="/#">1</a></li>*/}
                        {/*                <li className="page-item"><a className="page-link" href="/#">2</a></li>*/}
                        {/*                <li className="page-item"><a className="page-link" href="/#">3</a></li>*/}
                        {/*                <li className="page-item"><a className="page-link" aria-label="Next"*/}
                        {/*                                             href="/#"><span aria-hidden="true">»</span></a></li>*/}
                        {/*            </ul>*/}
                        {/*        </nav>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </>
    )
}