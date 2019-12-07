import React from 'react';
import Col from "react-bootstrap/Col";

const RedditItem = ({file}) => {
    if (file.data.preview) {
        if( file.data.preview.enabled) {
            console.log(file.data);
            let previewImage = file.data.preview.images[0].resolutions[file.data.preview.images[0].resolutions.length - 1].url;
            previewImage = previewImage.replace(/&amp;/g,"&");
            let subreddit = "https://reddit.com/r/" + file.data.subreddit;
            let post_link = "https://reddit.com" + file.data.permalink;
            return (
                <div className='d-flex'>
                    <Col sm='2'>
                        upvotes
                    </Col>
                    <Col lg='10'>
                        <div>Subreddit and posted by and hours</div>
                        <h3>Title</h3>
                        Image
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
        }
    }
    return (
        <div>No image</div>
    );
};

export default RedditItem;