import React from 'react';
import './Details.scss';
import {getDateStr} from '../../../utils/Util.js';
import views from '../../../assets/icons/views.svg';
import likes from '../../../assets/icons/likes.svg';

function Details({selectedVideo}) {
    return (
        <div className="detail" key={selectedVideo.id}>
            <h1 className='detail__title'>{selectedVideo.title}</h1>
            <hr className='detail__hr tablet-hiden'/>
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
        </div>
    )
}

export default Details;