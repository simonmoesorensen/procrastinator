import React from 'react';
import Button from './Button.js';

export default class Navbar extends React.Component {
    render() {
        return (
            <div>
                <Button name="Login"/>
                <Button name="Sign up"/>
            </div>
        );
    }
}