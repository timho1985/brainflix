import React from 'react';
import Header from '../../components/Header/Header';
import './NotFoundPage.scss';
import img404 from '../../assets/images/404.jpg';

function NotFoundPage() {
    return (
        <>
            <Header />
            <h1>404</h1>
            <p>Can't find what you're looking for, sorry!</p>
            <img src={img404} alt="404" />
        </>
    );
}

export default NotFoundPage;