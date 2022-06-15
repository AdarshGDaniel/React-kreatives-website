import React from 'react';
import './PastEvents.css'
import { Link } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import img1 from './Assets/1.jpg'
import img2 from './Assets/2.jpg'
import img3 from './Assets/3.jpg'
import img4 from './Assets/4.jpg'
import img5 from './Assets/5.jpg'
import img6 from './Assets/6.jpg'
import FiberNewOutlinedIcon from '@material-ui/icons/FiberNewOutlined';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import CardsScroll from './CardsScroll'

function PastEvents(props) {

    const state = {
        responsive: {
          0: {
            items: 1
          },
          450: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 3
          }
        }
    }


    return (
        <section className = "container-fluid mar-top-bot-50 mar-bot-100" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="200">
            <h2 className="align-center">Past Events</h2>
            <div className="heading-underline-center"><div className="heading-underline"></div></div>
            <OwlCarousel 
                className='owl-theme container mar-top-50' 
                item = {3}
                autoplay = {true}
                navText
                autoplayTimeout = {3000}
                dots = {false}
                margin = {10}
                loop
                responsive = {state.responsive}
                data-aos="fade-up" data-aos-delay="300">
                <CardsScroll image={img1} Date="22 Mar 2022" Title="World poetry day, the prompt poetry competition" description="" />
                <CardsScroll image={img2} Date="04 Feb 2021" Title="Cancer Awareness Design Competition" description=""/>
                <CardsScroll image={img3} Date="Oct 2021 (4 weeks)" Title="Inktober Competition" description=""/>
                <CardsScroll image={img4} Date="12 July 2021 " Title="World Youth Day Painting competition" description="Painting the tides of the future - The Youth with the strokes of a brush - The colors of Knowledge."/>
                <CardsScroll image={img5} Date="14 Jun 2021" Title="Father’s Day poetry challenge 2021" description="Just a few words knitted together in a humble try to hold all our love for the fathers out there. We had the joy of building the platform to share this bliss." />
                <CardsScroll image={img6} Date="07 Jun 2021" Title="Humans Of Karunya" description="Stringing stories that extract the essence of existence at KARUNYA! Unifying fellow mates with their unique fables that are rustic and raw. Maybe a bit citrusy, delivering that extra zing! Slightly spicy tales seasoned and served. A pallet you might never want to miss. Only @humansofkarunya"/>
            </OwlCarousel>
            <Link to="/PastEvents" style={{ textDecoration: 'none' }} className="container Button-center-past-event"><Button>See more</Button></Link>
        </section>
    );
}

export default PastEvents;