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
import InstagramEmbed from 'react-instagram-embed';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

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
                    <p data-aos="fade-up" data-aos-delay="200"><BsBookmarkCheck color="#ffcc00" fontSize="larger" fontSize="1.5rem" /> &nbsp; <i> We work to turn the visions and dreams of others into testimonies of success. We set the stage for those who wish to make a change. And through it all, We find our way in life by helping others find theirs.</i></p>
                    <p data-aos="fade-up" data-aos-delay="300"><BsBookmarkCheck color="#ffcc00" fontSize="larger" fontSize="1.5rem" />&nbsp; <i>All content and design submissions crack a three-step quality check process to put our choicest product out there. The ignition starts when the department managers and event organizers at Karunya reach out to us for promotional content and posters for events, conferences, competitions, cultural programs, webinars, and to publish the laurels and merits of fellow Karunyans.</i></p>
                    <p data-aos="fade-up" data-aos-delay="400"><BsBookmarkCheck color="#ffcc00" fontSize="larger" fontSize="1.5rem" />&nbsp; <i>We join hands in collaboration with other organizations namely, E-cell and K-Hacks for various events.</i></p>
                </span>
            </div>
            <div className = "space-section"></div>
            <div className="image-set container">
                <PhotoAlbum layout="rows" photos={photos} />
            </div>
            <h2 className="title-kk align-center">Karunya Social Medias</h2>
            <div className="heading-underline-center"><div className="heading-underline"></div></div>
            <div className='title-kk container'>
                <div className='row social-work-out'>
                    <div className='social-work'><TwitterTimelineEmbed sourceType="profile" screenName="karunyauniv" options={{height: 500}}/></div>
                    <div className='social-work fb-page' data-href="https://www.facebook.com/karunyauniversity/" data-tabs="timeline" data-width="" data-height="" data-small-header="true" data-adapt-container-width="false" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/karunyauniversity/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/karunyauniversity/">Karunya Institute of Technology and Sciences - Deemed University</a></blockquote></div>
                </div>
            </div>
        </section>
    );
}

export default Sponsors;