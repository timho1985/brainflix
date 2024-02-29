import React from 'react';
import "./HomePage.scss"
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Footer from '../../components/Footer/Footer';
import Comments from '../../components/Comment/Comment.jsx';
import NextVideo from '../../components/NextVideo/NextVideo.jsx';
import Details from '../../components/Details/Details.jsx';

function HomePage({selectedVideo, videos, handleVideoClick}) {
    return (
        <>
            <Header />
            <Hero />
            {/* Video Detail */}
            <video className='video' poster={selectedVideo.image} controls>
                <source src={selectedVideo.video + "?api_key=t"} type="video/mp4" />
            </video>
            <div className='container'>
                <div className='container__left'>
                    <Details selectedVideo={selectedVideo} />
                    <Comments selectedVideo={selectedVideo} />
                </div>
                <NextVideo selectedVideo={selectedVideo} videos={videos} clickHandler={handleVideoClick}/>
            </div>
            <Footer />
        </>
    );
}

export default HomePage;