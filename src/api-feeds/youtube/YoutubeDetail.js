import React from 'react';
import './youtube.css';

const VideoDetail = ({video}) => {
    if (!video) {
        return <div>Loading ...</div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId ? video.id.videoId : video.id}`;
    const videoLink = `https://www.youtube.com/watch?v=${video.id.videoId ? video.id.videoId : video.id}`;
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
                <a href={videoLink} target="_blank"><h4>{video.snippet.title}</h4></a>
                <p className="youtube-description">{video.snippet.description}</p>
            </div>
        </div>

    )
}

export default VideoDetail;