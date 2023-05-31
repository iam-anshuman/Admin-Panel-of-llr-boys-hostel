import React, {useEffect, useState} from "react";
import {collection,getDocs } from "firebase/firestore";
import {fireDB} from "../DB_and_Auth";
import Card from 'react-bootstrap/Card';
import {Row,Col,Container} from 'react-bootstrap';


export default function PaymentView(){
    const [payments,setPayments] = useState([]);
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
                alert(err);
            }

        };
        getPayment();
    },[]);

    return(
        <>
            <Container>
            <Row>

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