import React from 'react';
import axios from 'axios';
import './Instagram.css';
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import SearchBar from "../SearchBar";
import {InputGroup} from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default class Instagram extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.submitByEnter = this.submitByEnter.bind(this);

        this.state = {
            value: 'ladygaga',
            images: [],
        };
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.componentDidMount();
    }

    handleClick(shortcode) {
        window.open("https://www.instagram.com/p/" + shortcode);
    }

    submitByEnter(e) {
        if (e.keyCode === 13) {
            this.handleSubmit(e);
        }
    }

    componentDidMount() {
        let username = this.state.value;
        axios.get("https://www.instagram.com/" + username + "/?__a=1")
            .then(res => {
                console.log(res.data.graphql.user.edge_owner_to_timeline_media.edges);
                this.setState({images: res.data.graphql.user.edge_owner_to_timeline_media.edges});
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <div className="feed">
                <div className='pr-2'>
                    <SearchBar onChange={this.handleChange}
                               onKeyUp={this.submitByEnter}
                               placeholder="Instagram tag"
                               prepend={<InputGroup.Prepend>
                                   <InputGroup.Text>
                                       @
                                   </InputGroup.Text>
                               </InputGroup.Prepend>}
                               append={<InputGroup.Append>
                                   <Button variant="primary" onClick={this.handleSubmit}>
                                       Search
                                   </Button>
                               </InputGroup.Append>}
                    />
                </div>
                <div className="feed-items">
                    {
                        this.state.images.length > 0 ?
                            this.state.images.map((image) => {
                                return (
                                    <div className="feed-item flex-column">
                                        <p>
                                            <a href='#' onClick={() => this.handleClick(image.node.shortcode)}>
                                                <img className="instaimage" alt="" src={image.node.display_url}
                                                     width={image.node.dimensions.width}
                                                     height={image.node.dimensions.height}/>
                                            </a>
                                        </p>
                                        <FontAwesomeIcon icon={faHeart} className="heart"/>
                                        <div className="likes"> by {image.node.edge_liked_by.count} people</div>
                                        <br/>
                                        <i className="username">{this.state.value}</i>
                                        <p className="caption">{image.node.edge_media_to_caption.edges[0].node.text}</p>
                                        <p className="date">{(new Date(image.node.taken_at_timestamp * 1000).toDateString())}</p>
                                    </div>
                                )
                            }) : 'Tag not found'
                    }
                </div>
            </div>

        )
    }
}
