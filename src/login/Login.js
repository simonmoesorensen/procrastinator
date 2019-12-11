import React, {useState} from 'react';
import Modal from './Modal'
import {startUi, uiConfig} from "./Firebase";

export default class Login extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <Modal id="loginModal" onEntered={this.onEntered} callback={this.props.callback}/>
            </div>
        );
    }
}
