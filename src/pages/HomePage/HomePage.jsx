import React, { useState, useEffect } from 'react';
import "./HomePage.scss"
import { useParams } from "react-router-dom";
import Header from '../../components/Header/Header';
import Comments from '../../components/Comment/Comment.jsx';
import NextVideo from '../../components/NextVideo/NextVideo.jsx';
import Details from '../../components/Details/Details.jsx';
import { BrainflixApi } from "../../utils/Util";

function HomePage() {
    const [selectedId, setSelectedId] = useState("");
    const [selectedVideoDetail, setSelectedVideoDetail] = useState({});
    const [videos, setVideos] = useState([]);
    const { videoId } = useParams();
    const api = new BrainflixApi();

    // Get all movies
    useEffect(() => {
        document.title = 'Home Page';
        async function initialize() {
            const videoList = await api.getVideos();
            setVideos(videoList);
            setSelectedId(videoList[0].id);
        };

        initialize();
    }, []);

    useEffect(() => {
        let id;
        if (videoId) {
            document.title = 'Video Details Page';
            id = videoId;
        } else if (selectedId) {
            id = selectedId;
        } else {
            return;
        }

        async function getDetail() {
            const clickedVideoDetail = await api.getVideo(id);
            clickedVideoDetail.video = clickedVideoDetail.video + "?api_key=" + api.apiKey;
            setSelectedVideoDetail(clickedVideoDetail);
        };

        getDetail();
    }, [videoId, selectedId]);

    function handleVideoClick(id) {
        const clickedVideo = videos.find((video) => {
            return video.id === id;
        });

        setSelectedId(clickedVideo.id);
    }
    return (
        <>
            <Header />
            {/* Video Detail */}
            <video className='video' poster={selectedVideoDetail.image} controls>
                <source src={selectedVideoDetail.video} type="video/mp4" />
            </video>
            <div className='container'>
                <div className='container__left'>
                    <Details selectedVideoDetail={selectedVideoDetail} />
                    <Comments selectedVideoDetail={selectedVideoDetail} />
                </div>
                <NextVideo selectedVideoDetail={selectedVideoDetail} videos={videos} clickHandler={handleVideoClick} />
            </div>
        </>
    );
}

export default HomePage;