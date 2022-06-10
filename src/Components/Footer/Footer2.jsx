import React from 'react';
import './Footer.css'
import Button from '@material-ui/core/Button'
import { AiFillHeart } from "react-icons/ai";
import { FaTelegramPlane, FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { Link as LINK, animateScroll as scroll } from "react-scroll";


function Footer(props) {
    return (
        <footer className="mar-top-100 top-space-100">
            <div className="footer-main-part">
                <div className="top-part-footer container">
                    <div className="text-cont">
                        <h2>Have more Questions to ask?</h2>
                        <p>Let's get connected!</p>
                    </div>
                    <div>
                        <Link style={{textDecoration: 'none'}} to='ContactUs'><Button className="button-foot">Contact Us</Button></Link>
                    </div>
                </div>
                <div className="middle-part-footer">
                    <div className="socialLogos">
                        <a href="https://www.facebook.com/karunyahacks/" target="_blank"><FaFacebookF size="20" /></a>
                        <a href="https://twitter.com/karunyahacks?lang=en" target="_blank"><FaTwitter size="20" /></a>
                        <a href="https://www.linkedin.com/company/karunyahacks/" target="_blank"><FaLinkedinIn size="20" /></a>
                        <a href="https://www.instagram.com/karunyahacks/?hl=en" target="_blank"><FaInstagram size="20" /></a>
                        <a href="https://t.me/karunyahacks" target="_blank"><FaTelegramPlane size="20" /></a>
                    </div>
                    <div className="inforLinks">
                        <Link style={{textDecoration: 'none'}} to='PastEvents'>Events</Link>•
                        <Link style={{textDecoration: 'none'}} to='Rules'>Terms & Conditions</Link>
                    </div>
                    <div className="copywrite">
                        <p>© 2021 Karunya Hacks</p>
                    </div>
                </div>
                <div className="down-part-footer">
                    <p>Made with <AiFillHeart color="red" /> KHacks Web dev Team</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;