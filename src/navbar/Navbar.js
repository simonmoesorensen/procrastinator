import React from 'react';
import Button from 'react-bootstrap/Button';
import './dropdown-style.css';
import './navbar.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from '../login/Modal.js';

export default function Navbar() {
    return (
        <Row className="navbar">
            <Col className="d-flex justify-content-end">
            <Modal/>

            </Col>
        </Row>
    );

}
