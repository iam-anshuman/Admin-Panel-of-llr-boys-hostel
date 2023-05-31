import React, {useState} from "react";
import {collection , addDoc ,serverTimestamp} from "firebase/firestore";
import {fireDB} from "../DB_and_Auth";
import MyModal from "./MyModal";
import {Link} from "react-router-dom";
export default function AddStudent(){
    const [student , setStudent] = useState({
        "TimeStamp":String,
        "Name":String,
        "Phone_Number":Number,
        "Email":String,
        "Room_Number":String,
        "Payment":String
    })
    const [isSubmit,setIsSubmit] = useState(false)

    const handleSubmit = async ()=>{
        // console.log(student.Name,student.Phone_Number,student.Email,student.Room_Number,student.Payment);
        try{
            await addDoc((collection(fireDB,"Hostelers")),{
                timestamp:serverTimestamp(),
                name:student.Name,
                phone:student.Phone_Number,
                email:student.Email,
                Room_number:student.Room_Number,
                Payment : student.Payment
            });
            setIsSubmit(true);
            setStudent({
                Name:"",
                Phone_Number:"",
                Email:"",
                Room_Number:"",
                Payment:""
            });
        }catch (err) {
            console.error(err);
            alert("Login First to add student in database")
        }
    }

    return(
        <>
            <div className="container">
                <div className={"h3 text-dark"}>Add New Students</div>
                <hr/>
                <form>
                    <div className="row my-4">
                        <label htmlFor="inputName" className="col-sm-6 col-lg-2 col-form-label">Full Name</label>
                        <div className="col-lg-4 col-sm-6">
                            <input type="text" className="form-control " id="inputName" style={{height:"3rem"}} placeholder={"Enter Full Name"} onChange={event => setStudent({...student,Name:event.target.value})} value={student.Name}/>
                        </div>
                    {/*<div className="col my-4">*/}
                        <label htmlFor="inputPhone" className="col-sm-6 col-lg-2 col-form-label ps-lg-5 my-lg-0 my-sm-4">Phone</label>
                        <div className="col-lg-4 col-sm-6 my-lg-0 my-sm-4">
                            <input type="tel" className="form-control" id="inputPhone" style={{height:"3rem"}} placeholder={"Enter Phone Number"} onChange={event => setStudent({...student,Phone_Number:event.target.value})} value={student.Phone_Number}/>
                        </div>
                    {/*</div>*/}
                    </div>
                    <div className="row my-4">
                        <label htmlFor="inputEmail" className="col-sm-2 col-form-label ">Email</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control w-100" id="inputEmail" style={{height:"3rem"}} placeholder={"Enter Email"} onChange={event => setStudent({
                                ...student,
                                Email: event.target.value
                            })} value={student.Email}/>
                        </div>
                    </div>
                    <div className="row my-4">
                        <label htmlFor="inputRoom" className="col-sm-2 col-form-label ">Room Number</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control w-50" id="inputRoom" style={{height:"3rem"}} placeholder={"Enter Room Number"}onChange={event => setStudent({...student,Room_Number:event.target.value})} value={student.Room_Number}/>
                        </div>
                    </div>
                    <div className="row my-4">
                        <label htmlFor="inputPayment" className="col-sm-2 col-form-label ">Enter Total Bill</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control w-50" id="inputRoom" style={{height:"3rem"}} placeholder={"Enter Total Bill"}onChange={event => setStudent({...student,Payment:event.target.value})} value={student.Payment}/>
                        </div>
                    </div>

                    <Link to={"/AddStudent"} className="btn btn-dark" onClick={handleSubmit} >Submit</Link>
                </form>
                <MyModal isSubmit={isSubmit} closingButton={setIsSubmit}/>
            </div>
            </>
    )
}