import React from 'react';
import { useState } from "react";
import {getDateStr} from '../../utils/Util.js';
import './Body.scss';
import videoDetails from '../../data/video-details.json';
import Comments from './subcomponents/Comment.jsx';
import NextVideo from './subcomponents/NextVideo.jsx';
import views from '../../assets/icons/views.svg';
import likes from '../../assets/icons/likes.svg';
import head from '../../assets/images/Mohan-muruge.jpg';

let defaultVideoId = "84e96018-4022-434e-80bf-000ce4cd12b8";

function Body() {
    // Find the video with the matching ID for detailed display
    const defaultVideo = videoDetails.find(video => video.id === defaultVideoId);

    // Filter out the defaultVideoId from the videoDetails for Next Video List
    const otherVideos = videoDetails.filter(video => video.id !== defaultVideoId);

    const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);
    const [videos, setVideos] = useState(videoDetails);
  
    function handleVideoClick(id) {
      const clickedVideo = videos.find((video) => {
        return video.id === id;
      });
      setSelectedVideo(clickedVideo);
    }

    return (
        <div>
            {/* Video Detail */}
            <video className='video' poster={selectedVideo.image} controls>
                <source src={selectedVideo.video + "?api_key=t"} type="video/mp4" />
            </video>
            <div className='container'>
                <div className="detail" key={selectedVideo.id}>
                    <h1 className='detail__title'>{selectedVideo.title}</h1>
                    <hr className='detail__hr'/>
                    <div className='detail__section'>
                        <div className='detail__left'>
                            <h3 className='detail__channel'>By {selectedVideo.channel}</h3>
                            <h3 className='detail__h3'>{getDateStr(selectedVideo.timestamp)}</h3>
                        </div>
                        <div className='detail__right'>
                            <div className='detail__views'>
                                <img src={views} alt="views" />
                                <h3 className='detail__h3'>{selectedVideo.views}</h3>
                            </div>
                            <div className='detail__likes'>
                                <img src={likes} alt="likes" />
                                <h3 className='detail__h3'>{selectedVideo.likes}</h3>
                            </div>
                        </div>
                    </div>

                    <hr className='detail__hr'/>
                    <p className='detail__description'>{selectedVideo.description}</p>

                    <h3 className='detail__comment-counter'>{selectedVideo.comments.length} Comments</h3>

                    <div className='form'>
                        <img className="form__img" src={head} alt="Mohan Muruge"/>
                        <form className='form__container'>
                            <label className='form__label' htmlFor="comment">JOIN THE CONVERSATION</label>
                            <textarea
                                className="form__input tablet-hiden"
                                type="text"
                                id="comment"
                                name="userComment"
                                placeholder="Add a new commment"
                                required
                            ></textarea>
                            <input className="form__input mobile-hiden" type="text" id="comment" name="userComment" placeholder="Add a new commment" required/>
                            <button className='form__button' type="submit">COMMENT</button>
                        </form>
                    </div>

                    <ul className='comments'>
                        {selectedVideo.comments.map((comment) => (
                            <Comments key={comment.id} comment={comment}/>
                        ))}
                    </ul>
                </div>
                
                <div className='container__right'>
                    <h2 className='videos__header'>NEXT VIDEOS</h2>
                    <ul className='videos'>
                        {videos
                        .filter((video) => video.id !== selectedVideo.id)
                        .map((video) => (
                            <NextVideo key={video.id} video={video} clickHandler={handleVideoClick}/>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Body;