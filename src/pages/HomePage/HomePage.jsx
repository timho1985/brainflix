import React from 'react';
import "./HomePage.scss"
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Body from '../../components/Body/Body';
import Footer from '../../components/Footer/Footer';

function HomePage() {
    return (
        <>
            <Header />
            <Hero />
            <Body />
            <Footer />
        </>
    );
}

export default HomePage;