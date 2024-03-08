import React, { useRef } from 'react';
import './Comment.scss';
import {getDateStr} from '../../utils/Util.js'
import head from '../../assets/images/Mohan-muruge.jpg';

// Display comment form and comment list for selected video
function Comments({selectedVideoDetail}) {
    const commentMobileRef = useRef();
    const commentTabletRef = useRef();
    const isEmpty = Object.keys(selectedVideoDetail).length === 0;

    if (isEmpty) {
        return <div>No details available.</div>;
    }

    function handleTabletSubmit(event) {
        event.preventDefault();

        // Access input values from refs
        const comment = commentTabletRef.current.value;
        console.log("handleTabletSubmit Comment:", comment);

        commentTabletRef.current.value = '';
    }
    function handleMobileSubmit(event) {
        event.preventDefault();

        // Access input values from refs
        const comment = commentMobileRef.current.value;
        console.log("handleMobileSubmit Comment:", comment);

        commentMobileRef.current.value = '';
    }
    return (
        <div>
            <div className='form'>
                <img className="form__img" src={head} alt="Mohan Muruge"/>
                <form className='form__container form__tablet-hide' onSubmit={handleMobileSubmit}>
                    <label className='form__label' htmlFor="commentMobile">JOIN THE CONVERSATION</label>
                    <textarea
                        className="form__input"
                        type="text"
                        id="commentMobile"
                        name="commentMobile"
                        placeholder="Add a new commment"
                        required
                        ref={commentMobileRef}
                    ></textarea>
                    <button className='form__button' type="submit">COMMENT</button>
                </form>
                <form className='form__container form__mobile-hide' onSubmit={handleTabletSubmit}>
                    <label className='form__label' htmlFor="commentTablet">JOIN THE CONVERSATION</label>
                    <input
                        className="form__input"
                        type="text"
                        id="commentTablet"
                        name="commentTablet"
                        placeholder="Add a new commment"
                        required
                        ref={commentTabletRef}/>
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