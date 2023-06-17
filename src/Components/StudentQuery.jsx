import React,{useEffect,useState} from "react";
import {doc,deleteDoc,collection,getDocs } from "firebase/firestore"
import {fireDB} from "../DB_and_Auth";
import {Alert} from "react-bootstrap";
export default function StudentQuery(){
    const [query,setQuery] = useState([]);
    const [error,setError] = useState("")
    useEffect(()=>{
        const getQuery = async ()=>{
            try{
                const docSnap = await getDocs(collection(fireDB, "Queries"));
                const Queries = docSnap.docs.map((query)=> ({
                    ...query.data(),
                    id: query.id
            }));
            setQuery(Queries);
            }catch (err) {
                setError(err.message);
            }

        };
        getQuery();
    },[])

    const handleDelete = async (id)=>{
        await deleteDoc(doc(fireDB, "Queries", id));
        window.location.reload();
    }
    return(
        <>
            <div className="container-fluid">
                {error&&<Alert variant={"danger"}>{error} Please LogIn Your Account to see details</Alert>}

                <h3 className="text-dark mb-4">Student Query : </h3>
                <div className={"row row-cols-4"}  >
                {query.map((item)=>{
                    return <div className={"col"} key={item.id}>


                    <div className="card my-3 mx-5" style={{width:" 16.5rem"}}>
                        <div className="card-body">
                            <h5 className="card-header">{item.Name}'s Query  </h5><br/>

                            <div className="card-text" style={{fontWeight:"Bold"}}>{item.Query}</div>
                        </div>
                        <ul className="list-group list-group-flush ">
                            <li className="list-group-item ">Name - {item.Name}</li>
                            <li className="list-group-item">Phone - {item.Phone_number}</li>
                            <li className="list-group-item">Room Number - {item.Room_number}</li>
                        </ul>
                        <div className={"card-body text-end"}>
                            <button className={"btn btn-outline-dark"} onClick={()=>handleDelete(item.id)}>Delete</button>
                        </div>
                </div>
</div>
                })}
                </div>

            </div>
        </>
    )
}