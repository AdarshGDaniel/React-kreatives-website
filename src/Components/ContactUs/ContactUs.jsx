import React, { useState, useEffect } from 'react';
import './ContactUs.css'
import { MdEmail } from "react-icons/md";
import { FaTelegramPlane, FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { BiCurrentLocation } from "react-icons/bi";
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
import Footer2 from '../Footer/Footer2'
import { Collapse } from '@material-ui/core';
import NavBar2 from '../nav-bootstrap/NavBar2'
init("user_74o75qUflKxdvaeLlyzuo");

function ContactUs(props) {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const [conf, setConf] = useState(false);

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_2btsh5u', 'template_yt5f0s9', e.target, 'user_74o75qUflKxdvaeLlyzuo')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        setConf(true);
        e.target.reset();
        setTimeout(() =>{
            setConf(false);
        }, 3000)
    }

    return (
        <div>
            <NavBar2 page="true"/>
            <div className="container mar-top-100">
                <h1 className="mar-bot-50">Contact Us</h1>
                <section className="container contactinfo">
                    <div className="leftcontact">
                        <div className="top">
                            <h3>Contact Information</h3>
                            <span>Fill up the Form and our Team will get back to you!</span>
                        </div>
                        <div className="mid">
                            <span className="contactdetails">
                                <div style={{display: 'flex', flexDirection: 'row'}}> 
                                    <p><MdEmail fontSize="larger" color="#00AEEF" /></p> &nbsp;&nbsp;&nbsp;
                                    <p>kreatives@karunya.edu.in</p>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'row'}}> 
                                    <p><BiCurrentLocation fontSize="larger" color="#00AEEF" /></p> &nbsp;&nbsp;&nbsp;
                                    <p> Karunya Institute of Technology and Sciences, <br /> (Deemed to be University), Karunya Nagar, <br />Coimbatore - 641 114, <br />Tamil Nadu, India</p>
                                </div>
                            </span>
                        </div>
                        <div className="bot">
                            <div className="social-icons-contact">
                                <a href="https://www.facebook.com/karunyahacks/" target="_blank"><FaFacebookF size="20" /></a>
                                <a href="https://twitter.com/karunyahacks?lang=en" target="_blank"><FaTwitter size="20" /></a>
                                <a href="https://www.linkedin.com/company/karunyahacks/" target="_blank"><FaLinkedinIn size="20" /></a>
                                <a href="https://www.instagram.com/karunyahacks/?hl=en" target="_blank"><FaInstagram size="20" /></a>
                                <a href="https://t.me/karunyahacks" target="_blank"><FaTelegramPlane size="20" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="rightcontact">
                        <form onSubmit={sendEmail}>
                            <div className="row pt-5 mx-auto">
                                <div className="col-8 form-group mx-auto">
                                    <input type="text" className="form-control" placeholder="Name" name="name" required/>
                                </div>
                                <div className="col-8 form-group pt-2 mx-auto">
                                    <input type="email" className="form-control" placeholder="Email" name="email" required/>
                                </div>
                                <div className="col-8 form-group pt-2 mx-auto">
                                    <input type="test" className="form-control" placeholder="Subject" name="subject" required/>
                                </div>
                                <div className="col-8 form-group pt-2 mx-auto">
                                    <textarea type="text" style={{height: '150px'}} className="form-control" placeholder="Your Message" name="message" required/>
                                </div>
                                <div className="col-8 pt-3 mx-auto">
                                    <input type="submit" className="btn btn-color" value="Send Message" />
                                </div>
                                <Collapse in={conf} className="col-8 pt-3 mx-auto">
                                    <div>
                                        <input type="text" className="form-control submitedverify" value="Your Message has been sent successfully!" />
                                    </div>
                                </Collapse>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
            <Footer2 />
        </div>
    );
}

export default ContactUs;