import React from "react";
import youtube from './youtube-api.js';
import '../feed.css';
import SearchBar from "../SearchBar";
import VideoDetail from "./YoutubeDetail";
import {InputGroup} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";



export default class Youtube extends React.Component {
    constructor(props) {
        super(props);

        this.part = 'snippet, statistics';
        this.key = 'AIzaSyCTLJXDOMiF29v6kSlOxCZZZ2I3cXZJtco';
        this.maxResults = 10;

        this.onSubmit = this.onSubmit.bind(this);
    }

    state = {
        videos: [],
        nextPageToken: "",
        currentSearch: ""
    };

    componentDidMount() {
        this.getMostPopular();
    }

    onSubmit() {
        if (this.state.currentSearch.length === 0) {
            this.getMostPopular();
        } else {
            this.searchVideo(this.state.currentSearch);
        }
    }

    onChange(term) {
        this.setState({
            currentSearch: term
        })
    }

    searchVideo = async (termFromSearchBar) => {
        const response = await youtube.get('/search', {
            params: {
                part: this.part,
                key: this.key,
                maxResults: this.maxResults,
                q: termFromSearchBar,
                type: "video",
                videoEmbeddable: true
            }
        });
        this.setState({
            videos: response.data.items,
            nextPageToken: response.data.nextPageToken,
            currentSearch: termFromSearchBar
        })
    };

    nextPage = async () => {
        const response = await youtube.get('/search', {
            params: {
                part: this.part,
                key: this.key,
                maxResults: this.maxResults,
                q: this.state.currentSearch,
                type: "video",
                videoEmbeddable: true,
                pageToken: this.state.nextPageToken
            }
        });
        this.setState({
            videos: this.state.videos.slice().concat(response.data.items),
            nextPageToken: response.data.nextPageToken
        })
    };

    getMostPopular = async () => {
        const response = await youtube.get('/videos', {
            params: {
                part: this.part,
                key: this.key,
                maxResults: this.maxResults,
                chart: "mostPopular",
                regionCode: "US"
            }
        });
        this.setState({
            videos: response.data.items,
            nextPageToken: response.data.nextPageToken
        })
    };

    handleScroll = (e) => {
        const bottom = e.target.scrollHeight - e.target.scrollTop <= e.target.clientHeight;
        if (bottom) {
            console.log('header bottom reached');
            this.nextPage()
        }
    };

    render() {
        return (
            <div className='feed'>
                <div className='pr-2'>
                    <div>
                        <SearchBar onChange={(e) => this.onChange(e.target.value)}
                        placeholder="Search for a youtube video" append={<InputGroup.Append>
                            <Button variant="primary" onClick={this.onSubmit}>
                                Search
                            </Button>
                        </InputGroup.Append>}/>
                    </div>
                </div>
                <div className='feed-items' onScroll={this.handleScroll}>
                    {
                        (this.state.videos.length !== 0) ?
                            this.state.videos.map((video) => (
                                <VideoDetail video={video}/>
                            ))
                            : "No video found"
                    }
                </div>
            </div>
        );
    }

}