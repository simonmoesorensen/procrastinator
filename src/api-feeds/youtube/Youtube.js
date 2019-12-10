import React from "react";
import youtube from './youtube-api.js';
import '../feed.css';
import SearchBar from "../SearchBar";
import YoutubeItem from "./YoutubeItem";
import {InputGroup} from "react-bootstrap";
import Button from "react-bootstrap/Button";


export default class Youtube extends React.Component {
    constructor(props) {
        super(props);

        this.part = 'snippet, statistics';
        this.key = 'AIzaSyBM227ZaFzrdYsqNDdwwfRBhO_N8ARpR-w';
        this.maxResults = 10;

        this.onSubmit = this.onSubmit.bind(this);
        this.submitByEnter = this.submitByEnter.bind(this);
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

    submitByEnter(e) {
        if (e.keyCode === 13) {
            this.onSubmit();
        }
    }

    searchVideo = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                part: 'snippet',
                key: this.key,
                maxResults: this.maxResults,
                q: term,
                type: "video",
                videoEmbeddable: true
            }
        });

        response.data.items = await this.getStatistics(response);

        this.setState({
            videos: response.data.items,
            nextPageToken: response.data.nextPageToken,
            currentSearch: term
        });

    };

    async getStatistics(response) {
        let ids = response.data.items.map((video) => {
            return video.id.videoId
        });

        ids = ids.join(', ');

        const response2 = await youtube.get('/videos', {
            params: {
                part: 'statistics',
                key: this.key,
                maxResults: this.maxResults,
                id: ids
            }
        });

        return response.data.items = response.data.items.map((item, idx) => {
            item.statistics = response2.data.items[idx].statistics;
            return item;
        });
    }

    nextPage = async () => {
        const response = await youtube.get('/search', {
            params: {
                part: "snippet",
                key: this.key,
                maxResults: this.maxResults,
                q: this.state.currentSearch,
                type: "video",
                videoEmbeddable: true,
                pageToken: this.state.nextPageToken
            }
        });

        response.data.items = await this.getStatistics(response);

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
                        <SearchBar onChange={(e) => this.onChange(e.target.value)} onKeyUp={this.submitByEnter}
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
                                <YoutubeItem video={video}/>
                            ))
                            : "No video found"
                    }
                </div>
            </div>
        );
    }

}