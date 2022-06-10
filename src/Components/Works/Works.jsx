import React from 'react';
import './Works.css'
import { BsBookmarkCheck } from "react-icons/bs";
import PhotoAlbum from "react-photo-album";
import img1 from './Assets/img1.png';
import img2 from './Assets/img2.png';
import img3 from './Assets/img3.png';
import img4 from './Assets/img4.png';
import img5 from './Assets/img5.png';
import img6 from './Assets/img6.png';
import img7 from './Assets/img7.png';
import img8 from './Assets/img8.png';
import img9 from './Assets/img9.png';
import img10 from './Assets/img10.png';
import img11 from './Assets/img11.png';
import img12 from './Assets/img12.png';
import img13 from './Assets/img13.png';
import img14 from './Assets/img14.png';
import img15 from './Assets/img15.png';
import img16 from './Assets/img16.png';
import img17 from './Assets/img17.png';

function Sponsors(props) {
    const photos = [
        {
            src: img1,
            width: 100,
            height: 50
        },
        {
            src: img2,
            width: 100,
            height: 100
        },
        {
            src: img3,
            width: 200,
            height: 200
        },
        {
            src: img4,
            width: 100,
            height: 200
        },
        {
            src: img5,
            width: 100,
            height: 200
        },
        {
            src: img6,
            width: 100,
            height: 200
        },
        {
            src: img7,
            width: 100,
            height: 200
        },
        {
            src: img8,
            width: 100,
            height: 200
        },
        {
            src: img9,
            width: 100,
            height: 200
        },
        {
            src: img10,
            width: 100,
            height: 200
        },
        {
            src: img11,
            width: 100,
            height: 200
        },
        {
            src: img12,
            width: 100,
            height: 200
        },
        {
            src: img13,
            width: 100,
            height: 200
        },
        {
            src: img14,
            width: 100,
            height: 200
        },
        {
            src: img15,
            width: 50,
            height: 50
        },
        {
            src: img16,
            width: 100,
            height: 70
        },
        {
            src: img17,
            width: 100,
            height: 70
        }

    ];
    return (
        <section className="mar-top-bot-50 mar-top-100"  data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <h2 className="align-center">Works</h2>
            <div className="heading-underline-center"><div className="heading-underline"></div></div>
            &nbsp;
            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <h4>Our Works</h4>
                &nbsp;
                <span>
                    <p data-aos="fade-up" data-aos-delay="200"><BsBookmarkCheck color="#ffcc00" fontSize="larger" fontSize="1.5rem" /> &nbsp; <i> Demo your API during the event or showcase your hardware/devices enabling students to tinker and create, while also receiving invaluable feedback to further improve your product.</i></p>
                    <p data-aos="fade-up" data-aos-delay="300"><BsBookmarkCheck color="#ffcc00" fontSize="larger" fontSize="1.5rem" />&nbsp; <i> Showcasing your company brand during the Hackathon, allows you a better platform to broadcast your company stature, thus boosting brand recognition, hence encouraging students to know more about your company</i></p>
                    <p data-aos="fade-up" data-aos-delay="400"><BsBookmarkCheck color="#ffcc00" fontSize="larger" fontSize="1.5rem" />&nbsp; <i> Also we will promote your brand throughout our event through social media platforms and other platforms</i></p>
                </span>
            </div>
            <div className = "space-section"></div>
            <div className="image-set container">
                <PhotoAlbum layout="rows" photos={photos} />
            </div>
            
        </section>
    );
}

export default Sponsors;