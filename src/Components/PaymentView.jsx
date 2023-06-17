import React, {useEffect, useState} from "react";
import {collection,getDocs } from "firebase/firestore";
import {fireDB} from "../DB_and_Auth";
import Card from 'react-bootstrap/Card';
import {Row, Col, Container, Alert} from 'react-bootstrap';



export default function PaymentView(){
    const [payments,setPayments] = useState([]);
    const [error,setError] = useState("")

    useEffect(()=>{
        const getPayment = async ()=>{
            try{
                const docSnap = await getDocs(collection(fireDB, "Payments"));
                const paymentList = docSnap.docs.map((payment)=> ({
                    ...payment.data(),
                    id: payment.id
            }));
            setPayments(paymentList);
            }catch (err) {
                setError(err.message);
            }

        };
        getPayment();
    },[]);


    return(
        <>
            <Container>
            <Row>
            {error&&<Alert variant={"danger"}>{error} Please LogIn Your Account to see details</Alert>}
            {(payments).map((item)=>{
                // return console.log(item.Name)
                return(<Col xs={12} sm={8} md={4} className={"mx-3"}>
                    <Card >
                    <Card.Img variant="side" src={item.ScreenShot} />
                                <Card.Body>
                                    <Card.Title>{item.Name}</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                    <li>{item.Room_Number}</li>
                                    <li>{item.Phone_Number}</li>
                                    <li>{new Date(item.TimeStamp.seconds * 1000).toLocaleString()}</li>
                                </Card.Body>
                </Card>
                </Col>)
            })}
            </Row>
                </Container>
        </>
    )
}