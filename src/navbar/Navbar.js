import React from 'react';
import Button from './Button.js';
import Dropdown from 'react-dropdown';
import './dropdown-style.css';

export default class Navbar extends React.Component {

    onSelect(e) {
        console.log(e);
    }

    render() {
        const options = ["Twitter", "Instagram", "Youtube", "Reddit"];

        return (
            <div>
                <Dropdown options={options} onChange={this.onSelect} value={'Add Item'} placeholder="Select an option" />
                <Button name="Login"/>
                <Button name="Sign up"/>
            </div>
        );
    }
}