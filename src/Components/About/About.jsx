import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css'
import { IoIosLink } from "react-icons/io";
import Collapse from '@material-ui/core/Collapse';


function About(props) {

    const [val, setVal] = useState(false)
    const [Read, setRead] = useState("Read More")

    const open = (val) =>{
        if(val){
            setRead("Read Less")
        }else{
            setRead("Read More")
        }
        setVal(val);
    }

    return (
        <section className="section-container About mar-top-100" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <h2>About Us</h2>
            <div className="heading-underline-center"><div className="heading-underline"></div></div>
            <div className="container">
                <div className="container-fluid mar-top-bot-50" data-aos="fade-up" data-aos-delay="100">
                    <h4>Who are we?</h4>
                    <p>We are Karunya Kreatives, a student-run creative team managing events and social media under the banner of Karunya Innovation and Design Studio at
                        <br /><b>Karunya Institute of Technology and Sciences</b></p>
                    <Collapse in={val}>
                        <p>The team plays in the harmonic synchronization of its trine divisions: Content. Design. Management.</p>
                        <p>Karunya Kreatives consists of content writers, graphic designers, photographers, video editors, and managers to bring in the blend of creative juices to the table, constantly. We create, innovate, elevate and emanate. We are Karunya Kreatives.</p>
                        <a href="https://karunya.edu" target="_blank"><i>View more about Karunya<IoIosLink className="link-hover" /></i></a>
                    </Collapse>
                    <a href="##" onClick = {()=> {
                        if(val){
                            return open(false)
                        }else{
                            return open(true)
                        }
                    }}><i>{Read}</i></a>
                </div>
                <div className="container-fluid mar-top-bot-50" data-aos="fade-up" data-aos-delay="200">
                    <h4>What do we do?</h4>
                    <p>We, as a team, juggle between managing the social media handles of Karunya and generating promotions for the events happening at the campus. As opportunities seem endless at Karunya, it is an unceasing churn for creativity that we long for. And that’s what we do for you.</p>
                </div>
            </div>
        </section>
    );
}

export default About;