import React from 'react';
import './Details.scss';
import {getDateStr} from '../../utils/Util.js';
import views from '../../assets/icons/views.svg';
import likes from '../../assets/icons/likes.svg';

// Display detail information related to selected video
function Details({selectedVideoDetail}) {
    const isEmpty = Object.keys(selectedVideoDetail).length === 0;

    if (isEmpty) {
        return <div>No details available.</div>;
    }

    return (
        <div className="detail" key={selectedVideoDetail.id}>
            <h1 className='detail__title'>{selectedVideoDetail.title}</h1>
            <hr className='detail__hr tablet-hiden'/>
            <div className='detail__section'>
                <div className='detail__left'>
                    <h3 className='detail__channel'>By {selectedVideoDetail.channel}</h3>
                    <h3 className='detail__h3'>{getDateStr(selectedVideoDetail.timestamp)}</h3>
                </div>
                <div className='detail__right'>
                    <div className='detail__views'>
                        <img src={views} alt="views" />
                        <h3 className='detail__h3'>{selectedVideoDetail.views}</h3>
                    </div>
                    <div className='detail__likes'>
                        <img src={likes} alt="likes" />
                        <h3 className='detail__h3'>{selectedVideoDetail.likes}</h3>
                    </div>
                </div>
            </div>

            <hr className='detail__hr'/>
            <p className='detail__description'>{selectedVideoDetail.description}</p>

            <h3 className='detail__comment-counter'>{selectedVideoDetail.comments.length} Comments</h3>
        </div>
    )
}

export default Details;