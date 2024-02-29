import React from 'react';
import './Upload.scss';
import preview from '../../assets/images/Upload-video-preview.jpg';
import { useNavigate } from 'react-router-dom';

// Display upload thumbnail and form
function Upload() {
    let navigate = useNavigate();
    async function handleSubmit(event) {
        event.preventDefault();

        alert("Video uploaded!");

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
                        <form className="upload__form" id="form">
                            <label className="upload__lable" htmlFor="title">TITLE YOUR VIDEO</label>
                            <input
                                className="upload__input"
                                type="text"
                                id="title"
                                name="tital"
                                placeholder="Add a title to your video"
                                required
                            />
                            <label className="upload__lable" htmlFor="description">ADD A VIDEO DESCRIPTION</label>
                            <textarea
                                className="upload__textbox"
                                type="text"
                                id="description"
                                name="description"
                                placeholder="Add a description to your video"
                                required
                            ></textarea>
                            <hr className='mobile-hiden desktop-hiden' />
                            <div className='upload__buttons'>
                                <button className="upload__button" onClick={handleSubmit}>PUBLICH</button>
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