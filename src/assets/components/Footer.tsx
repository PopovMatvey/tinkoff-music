import React from "react";
import logo from '../images/music-logo.jpg';
import "../css/Footer.css";

export function Footer() {

    return (
        <footer>
            <div className="footer-content">
                <img src={logo} className="footer-logo" alt="logo" />
                <h1>Music platform</h1>
            </div>
            <span>Все права защищены © 2023</span>
        </footer>
    );
}