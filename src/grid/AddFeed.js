import Dropdown from "react-dropdown";
import React from "react";
import Button from "react-bootstrap/Button";

export default class AddFeed extends React.Component {

    onSelect(e) {
        console.log(e);
    }

    render() {
        const options = ["Twitter", "Instagram", "Youtube", "Reddit"];

        return (
            <div className="d-flex">
                <Dropdown options={options} onChange={this.onSelect} value={'Select feed'}
                          placeholder="Select an option"/>
                <Button variant="primary" onClick={this.props.onAddItem}>Add Item</Button>
            </div>

        )
    }
}

