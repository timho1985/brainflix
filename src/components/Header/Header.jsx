import React from 'react';
import './Header.scss';
import logo from "../../assets/logo/BrainFlix-logo.svg";
import head from "../../assets/images/Mohan-muruge.jpg";

function Header() {
    return (
        <header>
            <img className="logo" src={logo} alt="logo" />

            <form className="search">
                <input className="search__input" type="text" id="search" name="search" placeholder="Search" />
                <button className="search__button">UPLOAD</button>
                <img className="search__img" src={head} alt="mohan muruge" />
            </form>
        </header>
    )
}

export default Header;