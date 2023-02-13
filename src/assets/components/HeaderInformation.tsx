import React from "react";
import logo from '../images/tinkoff-music-logo.png';
import '../css/HeaderInformation.css';

export function HeaderInformation() {
    return (
        <div className="header-information">
            <img src={logo} className="header-logo" alt="logo" />
        </div>
    );
}
