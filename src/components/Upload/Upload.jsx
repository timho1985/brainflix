import React, { useRef } from 'react';
import './Upload.scss';
import preview from '../../assets/images/Upload-video-preview.jpg';
import { useNavigate } from 'react-router-dom';

// Display upload thumbnail and form
function Upload({postVideoHandler}) {
    const titleRef = useRef();
    const descriptionRef = useRef();
    let navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();

        // Access input values from refs
        const title = titleRef.current.value;
        const description = descriptionRef.current.value;
        console.log('Title:', title, 'Description:', description);
        postVideoHandler(title, description);

        alert("Video uploaded!");
        titleRef.current.value = '';
        descriptionRef.current.value = '';
        navigate("/");
    }
    return (
        <>
            <hr />
            <div className='upload'>
                <h1 className='upload__header'>Upload Video</h1>
                <hr className='mobile-hiden' />
                <div className='upload__container'>
                    <div className='upload__left'>
                        <h3 className='upload__lable'>VIDEO THUMBNAIL</h3>
                        <img className="upload__img" src={preview} alt="preview img" />
                    </div>
                    <div className='upload__right'>
                        <form className="upload__form" onSubmit={handleSubmit}>
                            <label className="upload__lable" htmlFor="title">TITLE YOUR VIDEO</label>
                            <input
                                className="upload__input"
                                type="text"
                                id="title"
                                name="title"
                                placeholder="Add a title to your video"
                                required
                                ref={titleRef}
                            />
                            <label className="upload__lable" htmlFor="description">ADD A VIDEO DESCRIPTION</label>
                            <textarea
                                className="upload__textbox"
                                type="text"
                                id="description"
                                name="description"
                                placeholder="Add a description to your video"
                                required
                                ref={descriptionRef}
                            ></textarea>
                            <hr className='mobile-hiden desktop-hiden' />
                            <div className='upload__buttons'>
                                <button className="upload__button" type="submit">PUBLISH</button>
                                <button className="upload__button upload__button--white">CANCEL</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Upload;