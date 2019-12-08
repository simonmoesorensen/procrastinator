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
                <InputGroup.Prepend>
                    <InputGroup.Text>
                        r/
                    </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl onChange={this.props.onChange} placeholder='subreddit'/>
            </InputGroup>
        )
    }

}