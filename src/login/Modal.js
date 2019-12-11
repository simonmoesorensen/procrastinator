import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Modal.css';
import {startUi, uiConfig} from "./Firebase";

export default function LoginModal({login, isLoggedIn, logout}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onEntered = () => {
        let config = uiConfig(cb);
        startUi('#firebaseui-auth-container', config);
    };

  const cb = (auth, result) => {
        handleClose();
        login(auth, result)
  };

  return (
    <>
        {isLoggedIn ? <Button variant="primary" onClick={logout}>
            Logout
        </Button> : <Button variant="primary" onClick={handleShow}>
            Login
        </Button>}

    <Modal show={show} onHide={handleClose}
           onEntered={onEntered}>
        <Modal.Body>
        <div id="firebaseui-auth-container">
        </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

