import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FirebaseBtn from './firebase-login.js';
import FacebookBtn from './facebook-login.js';
import Col from "react-bootstrap/Col";
import './Modal.css';

function Loginbox() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Button variant="primary" onClick={() => setShow(true)}>
      Login
    </Button>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please choose an option.
        <div className="d-flex flex-column">
        <div class="text-center">
        
        <FirebaseBtn/>
        <FacebookBtn/>

        </div>
        </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Loginbox;
