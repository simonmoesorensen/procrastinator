import React from "react";
import youtube from './youtube-api.js';
import '../feed.css';
import SearchBar from "../SearchBar";
import VideoDetail from "./YoutubeDetail";

const KEY = 'AIzaSyDBjiJe8aFg-EnChJ4mqa7mfCjLgeLlfrA';
const maxResults = 10;

export default class Youtube extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        videos: [],
        nextPageToken: ""
    };

    componentDidMount() {
        this.getMostPopular();
    }

    onChange(term) {
        if (term.length === 0) {
            this.getMostPopular();
        } else {
            this.searchVideo(term);
        }
    }

    searchVideo = async (termFromSearchBar) => {
        const response = await youtube.get('/search', {
            params: {
                part: "snippet",
                key: KEY,
                maxResults: maxResults,
                q: termFromSearchBar,
                type: "video",
                videoEmbeddable: true
            }
        });
        this.setState({
            videos: response.data.items,
            nextPageToken: response.data.nextPageToken
        })
    };

    nextPage = async (termFromSearchBar) => {
        const response = await youtube.get('/search', {
            params: {
                part: "snippet",
                key: KEY,
                maxResults: maxResults,
                q: termFromSearchBar,
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
                part: "snippet",
                key: KEY,
                maxResults: maxResults,
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
                        <SearchBar onChange={(obj) => this.onChange(obj.target.value)}
                        placeholder="Search for a youtube video" prepend={false}/>
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