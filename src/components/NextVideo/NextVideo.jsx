import React from 'react';
import './NextVideo.scss';

// Display next video lists
function NextVideo({selectedVideo, videos, clickHandler}) {
    return (
        <div className='container__right'>
            <h2 className='videos-header'>NEXT VIDEOS</h2>
            <ul className='videos'>
                {videos
                .filter((video) => video.id !== selectedVideo.id)
                .map((video) => (
                    <li key={video.id} className="videos__list" onClick={() => {clickHandler(video.id);}}>
                    <img className="videos__img" src={video.image} alt={video.title} />
                    <div className='videos__container'>
                        <h2 className='videos__title'>{video.title}</h2>
                        <p className='videos__channel'>{video.channel}</p>
                    </div>
                </li>
                ))}
            </ul>

        </div>
    );
}

export default NextVideo;