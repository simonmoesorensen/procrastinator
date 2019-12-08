import React from 'react';
import Col from "react-bootstrap/Col";
import moment from 'moment';
import ReactHTMLParser from 'react-html-parser';
import Parser from 'react-html-parser';

const RedditItem = ({file}) => {
    let previewImage;
    if (file.data.preview) {
        previewImage = file.data.preview.images[0].resolutions[file.data.preview.images[0].resolutions.length - 1].url;
        previewImage = previewImage.replace(/&amp;/g, "&");
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
                href={user_link} target='_blank'> u/{file.data.author}</a> {moment.unix(file.data.created_utc).fromNow()}
                <a href={post_link} target='_blank'><h3>{file.data.title}</h3></a>
                {file.data.selftext !== "" ? <div>{ Parser(ReactHTMLParser(file.data.selftext_html))}</div> : ''}
                {previewImage ? <img className='reddit-image' src={previewImage} alt={previewImage}/> : ''}
                <br/>
                Comments
            </Col>


            {/*<Col className="">*/}
            {/*    <a href={post_link} target="_blank" rel="noopener noreferrer"><button className="btn btn-secondary btn-sm top-right-float">View Post</button></a>*/}
            {/*    <a href={file.data.url} target="_blank" rel="noopener noreferrer">*/}
            {/*        {(file.data.over_18) ? <div className="p-4">NSFW</div> : <img src={previewImage} className="card-img-top" width="100%" alt={file.data.title}/>}*/}
            {/*    </a>*/}
            {/*    <div className=" card-link">*/}
            {/*        <div className="card">*/}
            {/*            <div className="card-img-top">*/}

            {/*            </div>*/}
            {/*            <div className="card-body">*/}
            {/*                <div className="card-title">*/}
            {/*                    <a href={file.data.url} target="_blank" rel="noopener noreferrer">{file.data.title}</a>*/}
            {/*                </div>*/}
            {/*                <p className="card-text">*/}
            {/*                    Resolution: {file.data.preview.images[0].source.width}x{file.data.preview.images[0].source.height}*/}
            {/*                    <br/>Posted on: <a href={subreddit} target="_blank" rel="noopener noreferrer">r/{file.data.subreddit}</a>*/}
            {/*                </p>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</Col>*/}
        </div>

    );
};

export default RedditItem;