import React from "react";
import logo from '../images/tinkoff-music-logo.png';
import "../css/Footer.css";

export function Footer() {

    return (
        <footer>
            <div className="footer-content">
                <img src={logo} className="footer-logo" alt="logo" />
            </div>
            <span>Все права защищены © 2023</span>
        </footer>
    );
}