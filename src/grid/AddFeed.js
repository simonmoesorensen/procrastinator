import Dropdown from "react-dropdown";
import React from "react";
import Button from "react-bootstrap/Button";
import './actionbar.css';

export default class AddFeed extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            feed: null
        };
        this.onSelect = this.onSelect.bind(this);
        this.onClick = this.onClick.bind(this);
    };

    onSelect(e) {
        this.setState({
            feed: e.value
        })
    };

    onClick() {
        if (this.state.feed) {
            this.props.onAddItem(this.state.feed);
        } else {
            alert('Please choose a feed');
            return;
        }

        this.setState({
            feed: null
        })
    }

    render() {
        const options = ["Twitter", "Instagram", "Youtube", "Reddit"];

        return (
            <div className="actionbar">
                <Dropdown options={options} onChange={this.onSelect} value={'Select feed'}/>
                <Button variant="primary" onClick={this.onClick}>Add Item</Button>
            </div>

        )
    }
}

