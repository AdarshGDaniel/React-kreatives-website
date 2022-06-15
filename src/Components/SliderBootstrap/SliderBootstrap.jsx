import React, { Component, useState, useEffect, useRef } from 'react';
import './SliderBootstrap.css'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './Slider-image/c_1.jpg'
import img2 from './Slider-image/c_2.jpeg'
import ParticlesBg from 'particles-bg'
import Typewriter from 'typewriter-effect';

function SliderBootstrap(props) {

    return (
        <section className="SliderBootstrap" id="carouselSliderval">
            <div className="hover-text">
                <div className="text-field container">
                    <h1><b style={{color: "#ffcc00"}}>Kreatives</b></h1>
                    <Typewriter
                        options={{
                            strings: ['Creativists 😍', 'We design 🎨', 'We write ✍️', 'We edit 🎬'],
                            autoStart: true,
                            loop: true,
                        }}
                        />
                </div>
            </div>
            <Carousel>
            <Carousel.Item interval={4000}>
                <div className="carouselSlider">
                    <ParticlesBg num={10} type="circle" bg={true} />
                </div>
                <img
                className="d-block w-100"
                src={img1}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={4000}>
                <div className="carouselSlider"><ParticlesBg num={100} type="circle" bg={true} /></div>
                <img
                className="d-block w-100"
                src={img2}
                alt="Second slide"
                />
            </Carousel.Item>
            </Carousel>
        </section>
    );
}

export default SliderBootstrap;