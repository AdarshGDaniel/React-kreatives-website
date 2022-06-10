import React from 'react'
import './Heads.css'
import Adarsh from './Assets/adarsh.jpg'
import SaranSud from './Assets/saransudheer.jpg'
import Richard from './Assets/richard.png'
import Chin from './Assets/chin.jpeg'
import Sharan from './Assets/sharan.jpeg'
import JoeSam from './Assets/josephsam.JPG'
import Ben from './Assets/benvin.jpeg'
import Front from './Assets/front.jpg'
import { FaTelegramPlane, FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";


function Heads(props) {

    
    return (
        <div className="Heads-profile container">
            <div className="row">
                <div className="team-box" data-aos="fade-up" data-aos-delay="100">
                    <img src={Adarsh} alt="Adarsh G Daniel"/>
                    <div className="overlay-profile">
                        <div className="team-text">
                            <h5>Adarsh G Daniel</h5>
                            <span>(Trainer)</span>
                            <div className="socialLogos-profile">
                                <a href="https://www.facebook.com/adarshg.daniel/" target="_blank"><FaFacebookF size="20" /></a>
                                <a href="https://twitter.com/Adarsh_G_Daniel" target="_blank"><FaTwitter size="20" /></a>
                                <a href="https://www.linkedin.com/in/adarsh-g-daniel-25b236192/" target="_blank"><FaLinkedinIn size="20" /></a>
                                <a href="https://www.instagram.com/_mr._magician_/" target="_blank"><FaInstagram size="20" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-box" data-aos="fade-up" data-aos-delay="200">
                    <img src={Ben} alt="Benvin"/>
                    <div className="overlay-profile">
                        <div className="team-text">
                            <h5>Benvin</h5>
                            <span>(Event Cordinator)</span>
                            <div className="socialLogos-profile">
                                <a href="https://www.facebook.com/benvin.david" target="_blank"><FaFacebookF  size="20" /></a>
                                <a href="https://www.linkedin.com/in/benvin-david/" target="_blank"><FaLinkedinIn size="20" /></a>
                                <a href="https://www.instagram.com/benvin_david/" target="_blank"><FaInstagram size="20" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-box" data-aos="fade-up" data-aos-delay="300">
                    <img src={JoeSam} alt="Joseph Samuel"/>
                    <div className="overlay-profile">
                        <div className="team-text">
                            <h5>Joseph Samuel</h5>
                            <span>(Game Dev Lead)</span>
                            <div className="socialLogos-profile">
                                <a href="https://www.linkedin.com/in/joseph-samuel-philip-a53873193/" target="_blank"><FaLinkedinIn size="20" /></a>
                                <a href="https://www.instagram.com/_josephsamuel_/?hl=en" target="_blank"><FaInstagram size="20" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-box" data-aos="fade-up" data-aos-delay="400">
                    <img src={Front} alt="Daniel Livingston"/>
                    <div className="overlay-profile">
                        <div className="team-text">
                            <h5>Daniel Livingston</h5>
                            <span>(Programming Trainer)</span>
                            <div className="socialLogos-profile">
                                <a href="https://www.linkedin.com/in/daniel-livingston-8b0623187/" target="_blank"><FaLinkedinIn size="20" /></a>
                                <a href="https://www.instagram.com/r_daniellivingston/" target="_blank"><FaInstagram size="20" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-box" data-aos="fade-up" data-aos-delay="500">
                    <img src={Front} alt="Joseph Moses"/>
                    <div className="overlay-profile">
                        <div className="team-text">
                            <h5>Joseph Moses</h5>
                            <span>(Game Dev Trainer)</span>
                            <div className="socialLogos-profile">
                                <a href="https://www.facebook.com/profile.php?id=100065509593298" target="_blank"><FaFacebookF  size="20" /></a>
                                <a href="https://www.linkedin.com/in/joseph-moses-125742193/" target="_blank"><FaLinkedinIn size="20" /></a>
                                <a href="https://www.instagram.com/joey.the.maverick/" target="_blank"><FaInstagram size="20" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="team-box" data-aos="fade-up" data-aos-delay="100">
                    <img src={Chin} alt="Chinmuanlal Nunthuk"/>
                    <div className="overlay-profile">
                        <div className="team-text">
                            <h5>Chinmuanlal Nunthuk</h5>
                            <span>(Game Dev Trainer)</span>
                            <div className="socialLogos-profile">
                                <a href="https://www.linkedin.com/in/chinmuanlalnunthuk/" target="_blank"><FaLinkedinIn size="20" /></a>
                                <a href="https://www.instagram.com/lunarisknight/" target="_blank"><FaInstagram size="20" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-box" data-aos="fade-up" data-aos-delay="200">
                    <img src={SaranSud} alt="Saran Sudheer"/>
                    <div className="overlay-profile">
                        <div className="team-text">
                            <h5>Saran Sudheer</h5>
                            <span>(Programming Trainer)</span>
                            <div className="socialLogos-profile">
                                <a href="https://www.facebook.com/saran.sudheer" target="_blank"><FaFacebookF  size="20" /></a>
                                <a href="https://www.linkedin.com/in/saran-sudheer-469b63151/" target="_blank"><FaLinkedinIn size="20" /></a>
                                <a href="https://www.instagram.com/wanderingsoul_22/" target="_blank"><FaInstagram size="20" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-box" data-aos="fade-up" data-aos-delay="300">
                    <img src={Sharan} alt="Sharan"/>
                    <div className="overlay-profile">
                        <div className="team-text">
                            <h5>Sharan</h5>
                            <span>(Web Dev Trainer)</span>
                            <div className="socialLogos-profile">
                                <a href="https://www.linkedin.com/in/sharan-s-2210/" target="_blank"><FaLinkedinIn size="20" /></a>
                                <a href="https://www.instagram.com/_sharan__s_/" target="_blank"><FaInstagram size="20" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-box" data-aos="fade-up" data-aos-delay="400">
                    <img src={Front} alt="Nikhil"/>
                    <div className="overlay-profile">
                        <div className="team-text">
                            <h5>Nikhil</h5>
                            <span>(IOT Lead)</span>
                            <div className="socialLogos-profile">
                                <a href="" target="_blank"><FaFacebookF  size="20" /></a>
                                <a href="" target="_blank"><FaTwitter size="20" /></a>
                                <a href="" target="_blank"><FaLinkedinIn size="20" /></a>
                                <a href="" target="_blank"><FaInstagram size="20" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-box" data-aos="fade-up" data-aos-delay="500">
                    <img src={Front} alt="Oliver Paul"/>
                    <div className="overlay-profile">
                        <div className="team-text">
                            <h5>Oliver Paul</h5>
                            <span>(App Dev Lead)</span>
                            <div className="socialLogos-profile">
                                <a href="" target="_blank"><FaFacebookF  size="20" /></a>
                                <a href="" target="_blank"><FaTwitter size="20" /></a>
                                <a href="" target="_blank"><FaLinkedinIn size="20" /></a>
                                <a href="" target="_blank"><FaInstagram size="20" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-box" data-aos="fade-up" data-aos-delay="100">
                    <img src={Richard} alt="Richard Timothy"/>
                    <div className="overlay-profile">
                        <div className="team-text">
                            <h5>Richard Timothy</h5>
                            <span>(Programming Trainer)</span>
                            <div className="socialLogos-profile">
                                <a href="https://www.linkedin.com/in/richard-timothy-1307" target="_blank"><FaLinkedinIn size="20" /></a>
                                <a href="https://www.instagram.com/_pickle__rick._/" target="_blank"><FaInstagram size="20" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-box" data-aos="fade-up" data-aos-delay="200">
                    <img src={Front} alt="Grace Judith"/>
                    <div className="overlay-profile">
                        <div className="team-text">
                            <h5>Grace Judith</h5>
                            <span>(IOT Trainer)</span>
                            <div className="socialLogos-profile">
                                <a href="" target="_blank"><FaFacebookF  size="20" /></a>
                                <a href="" target="_blank"><FaTwitter size="20" /></a>
                                <a href="" target="_blank"><FaLinkedinIn size="20" /></a>
                                <a href="" target="_blank"><FaInstagram size="20" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-box" data-aos="fade-up" data-aos-delay="300">
                    <img src={Front} alt="Ruhan"/>
                    <div className="overlay-profile">
                        <div className="team-text">
                            <h5>Ruhan</h5>
                            <span>(Cyber Lead)</span>
                            <div className="socialLogos-profile">
                                <a href="" target="_blank"><FaFacebookF  size="20" /></a>
                                <a href="" target="_blank"><FaTwitter size="20" /></a>
                                <a href="" target="_blank"><FaLinkedinIn size="20" /></a>
                                <a href="" target="_blank"><FaInstagram size="20" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-box" data-aos="fade-up" data-aos-delay="400">
                    <img src={Front} alt="Anoop"/>
                    <div className="overlay-profile">
                        <div className="team-text">
                            <h5>Anoop</h5>
                            <span>(Programming Lead)</span>
                            <div className="socialLogos-profile">
                                <a href="" target="_blank"><FaFacebookF  size="20" /></a>
                                <a href="" target="_blank"><FaTwitter size="20" /></a>
                                <a href="" target="_blank"><FaLinkedinIn size="20" /></a>
                                <a href="" target="_blank"><FaInstagram size="20" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Heads;