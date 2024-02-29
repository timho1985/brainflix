import React from 'react';
import './NextVideo.scss';
import { Link } from 'react-router-dom';

// Display next video lists
function NextVideo({selectedVideoDetail, videos, clickHandler}) {
    const isEmpty = Object.keys(videos).length === 0;

    if (isEmpty) {
        return <div>No details available.</div>;
    }

    return (
        <div className='container__right'>
            <h2 className='videos-header'>NEXT VIDEOS</h2>
            <ul className='videos'>
                {videos
                .filter((video) => video.id !== selectedVideoDetail.id)
                .map((video) => (
                    <li key={video.id} className="videos__list">
                    <Link to={`/${video.id}`}><img className="videos__img" src={video.image} alt={video.title} /></Link>
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