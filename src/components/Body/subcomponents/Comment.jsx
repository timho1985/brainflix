import React from 'react';
import './Comment.scss';
import {getDateStr} from '../../../utils/Util.js'


function Comments({comment}) {
    return (
        <li className='comments__list'>
            <hr className='comments__hr' />
            <div className='comments__li-container'>
                <div className='comments__li-img' alt={comment.name} ></div>
                <div className='comments__li-main'>
                    <div className='comments___li-name'>{comment.name}</div>
                    <div className='comments__li-date'>{getDateStr(comment.timestamp)}</div>
                    <div className='comments__li-comment'>{comment.comment}</div>
                </div>
            </div>
        </li>
    )
}

export default Comments;