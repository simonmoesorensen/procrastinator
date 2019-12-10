import React from "react";
import SearchBar from "../SearchBar";
import {InputGroup} from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default class Twitter extends React.Component {
    constructor(props) {
        super(props);

        this.submitByEnter = this.submitByEnter.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    state = {
        screenName: "csuf",
        searchTerm: ""
    };
    
    componentDidMount() {
        this.renderTimeline();
    }

    onChange(term) {
        this.setState({
            searchTerm: term
        })
    }

    submitByEnter(e) {
        if (e.keyCode === 13) {
            this.onSubmit();
        }
    }

    onSubmit() {
        if (this.state.searchTerm.length > 0) {
            window.$("#twitter iframe").remove();
            window.$("#twitter p").remove();

            this.setState({
                screenName: this.state.searchTerm
            }, () => {
                this.renderTimeline();
            });

        }
    }

   renderTimeline() {
        let elem = document.getElementById("twitter");

        window.twttr.widgets.createTimeline(
            {
                sourceType: "profile",
                screenName: this.state.screenName
            },
            elem,
            {
                height: 1500,
            }
        ).then(() => {
            if (!elem.innerHTML.toString().includes('data-widget-id')) {
                elem.innerHTML = "<p> No twitter tag found... </p>"
            }
        })
    };

    render() {
        return (
            <div className='feed'>
                <div className='pr-2'>
                    <div>
                        <SearchBar onChange={(e) => this.onChange(e.target.value)}
                                   onKeyUp={this.submitByEnter}
                                   placeholder="Twitter tag"
                                   prepend={<InputGroup.Prepend>
                                       <InputGroup.Text>
                                           @
                                       </InputGroup.Text>
                                   </InputGroup.Prepend>}
                                   append={<InputGroup.Append>
                                       <Button variant="primary" onClick={this.onSubmit}>
                                       Search
                                       </Button>
                                   </InputGroup.Append>}
                        />
                    </div>
                </div>
                <div id="twitter" className='feed-items'>
                </div>
            </div>

        );
    }

}