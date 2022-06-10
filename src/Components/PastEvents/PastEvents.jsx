import React from 'react';
import './PastEvents.css'
import { Link } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import img1 from './Assets/pic1.JPG'
import img2 from './Assets/pic2.JPG'
import img3 from './Assets/pic3.png'
import img4 from './Assets/pic4.JPG'
import img5 from './Assets/pic5.jpg'
import img6 from './Assets/pic6.jpg'
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
                <CardsScroll image={img1} Title="Bootcamp 1 2021" description="We conducted a Virtual 3 Day Bootcamp for the students on the topics: Python Advanced, Web development and Amazon Alexa & Google Assistant." Date= "3rd to 5th Mar 2021" />
                <CardsScroll image={img2} Title="Python for all" description="In collabration with CTC (Computer Technology Center) we had a 2 Day Virtual workshop on Python." Date= "26th & 27th Feb 2021" />
                <CardsScroll image={img3} Title="MLH: Intro to Python" description="KHacks collabrated with MLH (Major League Hacking) and conducted a Python workshop for the beginners." Date= "16th Nov 2020" />
                <CardsScroll image={img4} Title="LHD Build the Future 2019" description="On (Date) we hit a major milestone, we conducted a 24hr Hackathon for the first time and it was a great success!" Date= "12th - 13th Dec 2019" />
                <CardsScroll image={img5} Title="Hacktober Fest" description="Hacktober Fest was targeted for the first years to encorage them to code and win prizes. Students learnt about GitHub and its use during this Workshop." Date= "15th Oct 2019" />
                <CardsScroll image={img6} Title="Bootcamp" description="This was a 4 Day Bootcamp which included Amazon Alexa, Advanced Python, Python Automation and Data Science. " Date= "14th to 23rd Oct 2019" />
            </OwlCarousel>
            <Link to="/PastEvents" style={{ textDecoration: 'none' }} className="container Button-center-past-event"><Button>See more</Button></Link>
        </section>
    );
}

export default PastEvents;