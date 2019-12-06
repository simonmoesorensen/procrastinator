import Dropdown from "react-dropdown";
import React from "react";
import Button from "react-bootstrap/Button";
import './actionbar.css';

export default class AddFeed extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            feed: "Not selected"
        };
        this.onSelect = this.onSelect.bind(this);
    };

    onSelect(e) {
        this.setState({
            feed: e.value
        })
    };

    render() {
        const options = ["Twitter", "Instagram", "Youtube", "Reddit"];

        return (
            <div className="actionbar">
                <h2> Procrastinator feeds </h2>
                <Dropdown options={options} onChange={this.onSelect} value={'Select feed'}
                          placeholder="Select an option"/>
                <Button variant="primary" onClick={() => this.props.onAddItem(this.state.feed)}>Add Item</Button>
            </div>

        )
    }
}

