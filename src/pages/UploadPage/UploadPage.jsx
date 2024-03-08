import React from 'react';
import "./UploadPage.scss"
import Header from '../../components/Header/Header';
import Upload from '../../components/Upload/Upload';
import { BrainflixApi } from "../../utils/Util";

function UploadPage() {
    const api = new BrainflixApi();

    async function postVideoHandler(title, description) {
        try {
            const response = await api.postVideo(title, description);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
        
    };
    return (
        <>
            <Header />
            <Upload postVideoHandler={postVideoHandler}/>
        </>
    );
}

export default UploadPage;