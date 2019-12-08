import React from 'react';
import Col from "react-bootstrap/Col";
import moment from 'moment';
import ReactHTMLParser from 'react-html-parser';
import Parser from 'react-html-parser';

const RedditItem = ({file}) => {
    let previewImage;
    if (file.data.preview && !file.data.url.includes(".gif")) {
        previewImage = file.data.preview.images[0].resolutions[file.data.preview.images[0].resolutions.length - 1].url;
        previewImage = previewImage.replace(/&amp;/g, "&");
    } else if (file.data.url.includes(".gifv")) {
        previewImage = file.data.url.slice(0, file.data.url.length - 1);
    } else if (file.data.url.includes(".gif")) {
        previewImage = file.data.url;
    } else {
        previewImage = null;
    }
    let subreddit = "https://reddit.com/r/" + file.data.subreddit;
    let post_link = "https://reddit.com" + file.data.permalink;
    let user_link = "https://reddit.com/u/" + file.data.author;
    console.log(file.data);
    return (
        <div className='reddit-item'>
            <Col sm='1'>
                {file.data.ups} <br/> upvotes
            </Col>
            <Col lg='11'>
                <a href={subreddit} target='_blank'>{file.data.subreddit_name_prefixed}</a><span> | Posted by</span><a
                href={user_link}
                target='_blank'> u/{file.data.author}</a> {moment.unix(file.data.created_utc).fromNow()}
                <a href={post_link} target='_blank'><h3>{file.data.title}</h3></a>
                {file.data.selftext !== "" ? <div>{Parser(ReactHTMLParser(file.data.selftext_html))}</div> : ''}
                {
                    file.data.is_video ? <video className="reddit-image"
                                                width={file.data.media.reddit_video.width}
                                                height={file.data.media.reddit_video.height}
                                                controls
                                                preload="auto"
                                                autoPlay="autoPlay"
                                                loop="loop"
                                                muted="muted">
                            <source src={file.data.media.reddit_video.scrubber_media_url} type="video/mp4"/>
                        </video>
                        // : file.data.url.includes(".gifv") ? <video className="reddit-image"
                        //                                            controls
                        //                                            preload="auto"
                        //                                            autoPlay="autoPlay"
                        //                                            loop="loop"
                        //                                            muted="muted">
                        //     <source src={file.data.url}/>
                        // </video>
                        : previewImage ? <img className='reddit-image' src={previewImage} alt={previewImage}/>
                            : ''
                }
                <br/>
                Comments
            </Col>


        </div>

    );
};

export default RedditItem;