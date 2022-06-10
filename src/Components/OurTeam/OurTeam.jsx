import React from 'react';
import Heads from './Heads'

function OurTeam(props) {
    return (
        <section className="mar-top-bot-50 mar-top-100" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <h2 className="align-center">Our Team</h2>
            <div className="heading-underline-center"><div className="heading-underline"></div></div>
            <div className="container">
                <Heads />
            </div>
        </section>
    );
}

export default OurTeam;