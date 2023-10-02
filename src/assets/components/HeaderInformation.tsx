import React from "react";
import logo from '../images/music-logo.jpg';
import '../css/HeaderInformation.css';

export function HeaderInformation() {
    return (
        <div className="header-information">
            <img src={logo} className="header-logo" alt="logo" />
            <h1>Music platform</h1>
        </div>
    );
}
