import React from 'react';
import { Carousel } from 'react-bootstrap';
import './CarouselFloat.css'

function CarouselFloat(props) {


    const colorRed = {
        color: "#FF0001",
    }

    const colorBlue = {
        color: "#00AEEF",
    }

    const spanstyle ={
        backgroundColor: "white",
        padding: "5px",
        borderRadius: "10px"
    }

    return (
        <Carousel.Caption className="carousel-float">
            <h3><span style={spanstyle}><h>Kreatives</h></span> {props.title}</h3>
            <p>{props.description}</p>
        </Carousel.Caption>
    );
}

export default CarouselFloat;