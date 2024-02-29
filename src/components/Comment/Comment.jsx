import React from 'react';
import './Comment.scss';
import {getDateStr} from '../../utils/Util.js'
import head from '../../assets/images/Mohan-muruge.jpg';

// Display comment form and comment list for selected video
function Comments({selectedVideoDetail}) {
    const isEmpty = Object.keys(selectedVideoDetail).length === 0;

    if (isEmpty) {
        return <div>No details available.</div>;
    }

    return (
        <div>
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
                {selectedVideoDetail.comments.map((comment) => (
                    <li key={comment.id} className='comments__list'>
                        <hr className='comments__hr' />
                        <div className='comments__li-container'>
                            <div className='comments__li-img' alt={comment.img} ></div>
                            <div className='comments__li-main'>
                                <div className='comments___li-name'>{comment.name}</div>
                                <div className='comments__li-date'>{getDateStr(comment.timestamp)}</div>
                                <div className='comments__li-comment'>{comment.comment}</div>
                            </div>
                        </div>
                    </li>
                ))}
                <hr className='comments__hr' />
            </ul>
        </div>
    )
}

export default Comments;