import React from 'react';
import './youtube.css';
import {faThumbsUp, faThumbsDown, faComment, faEye} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {formatToK} from '../reddit/RedditItem';

const YoutubeItem = ({video, onLoad}) => {
    if (!video) {
        return <div>Loading ...</div>;
    }

    let id = video.id.videoId ? video.id.videoId : video.id;
    const videoSrc = `https://www.youtube.com/embed/${id}`;
    const videoLink = `https://www.youtube.com/watch?v=${id}`;
    return (
        <div className="feed-item flex-column">
            <div id="youtube-video">
                <iframe className='youtube-video'
                        width='1080'
                        height='720'
                        preload="auto"
                        onLoad={onLoad}
                        src={videoSrc} allowFullScreen title='Video player'/>
            </div>
            <div className="youtube-statistics">
                <div className="info">
                    <div className="views"><FontAwesomeIcon icon={faEye}/> {video.statistics.viewCount}</div>
                    <div className="comments"><FontAwesomeIcon icon={faComment}/> {video.statistics.commentCount}</div>
                </div>
                <div className="rating">
                    <div className="likes"><FontAwesomeIcon icon={faThumbsUp}/> {formatToK(video.statistics.likeCount)}</div>
                    <div className="dislikes"><FontAwesomeIcon icon={faThumbsDown}/> {formatToK(video.statistics.dislikeCount)}</div>
                </div>
            </div>
            <div>
                <a href={videoLink} target="_blank"><h4>{video.snippet.title}</h4></a>
                <p className="youtube-description">{video.snippet.description}</p>
            </div>
        </div>
    )
};

export default YoutubeItem;