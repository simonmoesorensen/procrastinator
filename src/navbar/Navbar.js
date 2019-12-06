import React from 'react';
import Button from 'react-bootstrap/Button';
import './dropdown-style.css';
import './navbar.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Navbar() {
    return (
        <Row className="navbar">
            <Col className="d-flex justify-content-end">
                <Button variant="primary">Login</Button>
                <Button variant="secondary">Sign up</Button>
            </Col>
        </Row>
    );

}