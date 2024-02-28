import React from 'react';
import { useState } from "react";
import './Body.scss';
import videoDetails from '../../data/video-details.json';
import Comments from './subcomponents/Comment.jsx';
import NextVideo from './subcomponents/NextVideo.jsx';
import Details from './subcomponents/Details.jsx';

function Body() {

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
                <div className='container__left'>
                    <Details selectedVideo={selectedVideo} />
                    <Comments selectedVideo={selectedVideo} />
                </div>
                <NextVideo selectedVideo={selectedVideo} videos={videos} clickHandler={handleVideoClick}/>
            </div>
        </div>
    );
}

export default Body;