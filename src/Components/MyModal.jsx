import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
export default function MyModal(props){


    const handleClose = () => props.closingButton(false);


    return (
        <>
            <Modal show={props.isSubmit} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Successful</Modal.Title>
                </Modal.Header>
                <Modal.Body>Your Query Has been submitted successfully</Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" size={"sm"} onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}