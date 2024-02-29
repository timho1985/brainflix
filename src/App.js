import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage"
import UploadPage from "./pages/UploadPage/UploadPage"
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"
import videoDetails from './data/video-details.json';

function App() {
  const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);
  const [videos, setVideos] = useState(videoDetails);

  function handleVideoClick(id) {
    const clickedVideo = videos.find((video) => {
      return video.id === id;
    });
    setSelectedVideo(clickedVideo);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage selectedVideo={selectedVideo} videos={videos} handleVideoClick={handleVideoClick} />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
