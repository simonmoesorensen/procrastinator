import React from 'react';
import './dropdown-style.css';
import './navbar.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "../login/Modal";

export default class Navbar extends React.Component {
    render() {
        return (
            <Row className="navbar">
                <Col>
                <h2> Procrastinator feeds </h2>
            </Col>
            <Col className="d-flex justify-content-end">
                    <div>
                        <Modal login={this.props.login}
                               isLoggedIn={this.props.isLoggedIn}
                               logout={this.props.logout}/>
                    </div>
                </Col>
            </Row>
        );
    }
}