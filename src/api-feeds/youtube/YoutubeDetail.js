import React from 'react';
import './youtube.css';
import youtube from "./youtube-api";

const VideoDetail = ({video}) => {
    if (!video) {
        return <div>Loading ...</div>;
    }

    let id = video.id.videoId ? video.id.videoId : video.id;
    const videoSrc = `https://www.youtube.com/embed/${id}`;
    const videoLink = `https://www.youtube.com/watch?v=${id}`;
    console.log(typeof(video));
    return (
        <div class="feed-item flex-column">
            <div>
                <iframe className='youtube-video'
                        width='1080'
                        height='720'
                        preload="auto"
                        src={videoSrc} allowFullScreen title='Video player'/>
            </div>
            <div>
                {video.statistics.viewCount}
                {video.statistics.likeCount}
                {video.statistics.dislikeCount}
                {video.statistics.commentCount}
            </div>
            <div>
                <a href={videoLink} target="_blank"><h4>{video.snippet.title}</h4></a>
                <p className="youtube-description">{video.snippet.description}</p>
            </div>
        </div>

    )
}

export default VideoDetail;