import React from 'react';
import './NextVideo.scss';

function NextVideo({video , clickHandler}) {
    return (
        <li className="videos__list" onClick={() => {clickHandler(video.id);}}>
            <img className="videos__img" src={video.image} alt={video.title} />
            <div className='videos__container'>
                <h2 className='videos__title'>{video.title}</h2>
                <p className='videos__channel'>{video.channel}</p>
            </div>
        </li>
    );
}

export default NextVideo;