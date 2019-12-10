import React from 'react';
import {InputGroup} from "react-bootstrap";
import FormControl from "react-bootstrap/FormControl";
import Dropdown from "react-dropdown";

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <InputGroup>
                {this.props.prepend}
                <FormControl onChange={this.props.onChange} onSubmit={this.props.onSubmit} placeholder={this.props.placeholder}/>
                {this.props.append}
            </InputGroup>
        );
    }

}
