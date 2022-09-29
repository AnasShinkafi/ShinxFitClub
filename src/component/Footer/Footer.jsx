import React from "react";
import './Footer.css';
import Github from '../../assets/github.png';
import Instagram from '../../assets/instagram.png';
import LinkedIn from '../../assets/linkedin.png';
import Logo from '../../assets/logo.png';
import FaceBook from '../../assets/facebook.png';
const Footer = () => {
    return (
        <div className="Footer-container">
            <hr /> 
            <div className="footer">
                <div className="social-links">
                    <a href="https://github.com/AnasShinkafi"><img src={Github} alt="" /></a>
                    <a href=""><img src={Instagram} alt="" /></a>
                    <a href=""><img src={LinkedIn} alt="" /></a>
                    <a href="https://www.facebook.com/anas.isah.940"><img src={FaceBook} alt="" /></a>
                </div>
                <div className="log">
                    <img src={Logo} alt="" />
                </div>
            </div>
            <div className="blur blur-f-1"></div>
            <div className="blur blur-f-2"></div>
        </div>
    );
}
;
export default  Footer;