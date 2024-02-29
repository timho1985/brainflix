import React from 'react';
import './Header.scss';
import logo from "../../assets/logo/BrainFlix-logo.svg";
import head from "../../assets/images/Mohan-muruge.jpg";
import { useNavigate } from 'react-router-dom';

function Header() {
    let navigate = useNavigate();
    function handleLogoClick() {
        navigate("/");
    }

    function handleButtonClick() {
        navigate("/upload");
    }

    return (
        <header>
            <img className="logo" src={logo} alt="logo" onClick={handleLogoClick}/>

            <form className="search">
                <input className="search__input" type="text" id="search" name="search" placeholder="Search" />
                <button className="search__button" onClick={handleButtonClick}>UPLOAD</button>
                <img className="search__img" src={head} alt="mohan muruge" />
            </form>
        </header>
    )
}

export default Header;