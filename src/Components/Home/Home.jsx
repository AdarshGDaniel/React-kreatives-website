import React, { useEffect } from 'react';
import NavBootstrap from '../nav-bootstrap/NavBootstrap'
import SliderBootstrap from '../SliderBootstrap/SliderBootstrap'
import About from '../About/About'
import 'bootstrap/dist/css/bootstrap.min.css';
import PastEvents from '../PastEvents/PastEvents'
import Schedule from '../Schedule/Schedule'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Works from '../Works/Works'
import OurTeam from '../OurTeam/OurTeam'
import FAQ from '../FAQ/FAQ'
import Footer from '../Footer/Footer'


function Home(props) {

    useEffect(() => {
        AOS.init({duration: 1000})
      }, [])
      
    return (
        <div>
            <NavBootstrap />
            <SliderBootstrap />
            <About />
            <div id="PastEvents" className = "space-section"></div>
            <PastEvents />
            <div id="Schedule" className = "space-section"></div>
            <Schedule />
            <div id="Works" className = "space-section"></div>
            <Works />
            <div id="OurTeam" className = "space-section"></div>
            <OurTeam />
            <div id="FAQ" className = "space-section"></div>
            <FAQ />
            <Footer />
        </div>
    );
}

export default Home;