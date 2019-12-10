import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FirebaseBtn from './firebase-login.js';
import FacebookBtn from './facebook-login.js';

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
        <Modal.Body>Please choose an option.</Modal.Body>
        <FirebaseBtn/>
        <FacebookBtn/>


      </Modal>
    </>
  );
}

export default Loginbox;
