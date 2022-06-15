import React, { useEffect } from 'react';
import './PastEventsPage.css'
import NavBar2 from '../nav-bootstrap/NavBar2'
import Footer2 from '../Footer/Footer2'
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import CardsLeft from './CardsLeft';
import CardsRight from './CardsRight';
import { Link, animateScroll as scroll } from "react-scroll";
import pic1 from './Assets/1.jpg';
import pic2 from './Assets/2.jpg';
import pic3 from './Assets/3.jpg';
import pic4 from './Assets/4.jpg';
import pic5 from './Assets/5.jpg';
import pic6 from './Assets/6.jpg';
import pic7 from './Assets/7.jpg';
import pic8 from './Assets/8.jpg';
import pic9 from './Assets/9.jpg';
import pic10 from './Assets/10.jpg';
import pic11 from './Assets/11.jpg';
import pic12 from './Assets/12.jpg';
import pic13 from './Assets/13.jpg';
import pic14 from './Assets/14.jpg';


function PastEventsPage(props) {
    
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div>
            <NavBar2 page="true"/>
            <div className="timeline-fixed">
                        <Timeline>
                            <TimelineItem>
                                <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent><Link style={{cursor: 'pointer'}} activeClass="active" to="2022" spy={true} smooth={true} offset={-80} duration={500}>2022</Link></TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent><Link style={{cursor: 'pointer'}} activeClass="active" to="2021" spy={true} smooth={true} offset={-80} duration={500}>2021</Link></TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineDot />
                                <TimelineContent><Link style={{cursor: 'pointer'}} activeClass="active" to="2020" spy={true} smooth={true} offset={-80} duration={500}>2020</Link></TimelineContent>
                            </TimelineItem>
                        </Timeline>
                    </div>
                <div className="container mar-top-100">
                    <div className="contents-block">
                    <div id="2022" className="topic-year mar-top-100"> 
                            <h2>2022</h2>
                            <div className="line-red"></div>
                        </div>
                        <CardsLeft image={pic14} date="22 Mar 2022" title="World poetry day, the prompt poetry competition" description=""/>
                        <div id="2021" className="topic-year mar-top-100">
                            <h2>2021</h2>
                            <div className="line-red"></div>
                        </div>
                        <CardsLeft image={pic13} date="04 Feb 2021" title="Cancer Awareness Design Competition" description=""/>
                        <CardsLeft image={pic12} date="Oct 2021 (4 weeks)" title="Inktober Competition" description=""/>
                        <CardsRight image={pic11} date="12 July 2021 " title="World Youth Day Painting competition" description="Painting the tides of the future - The Youth with the strokes of a brush - The colors of Knowledge."/>
                        <CardsLeft image={pic10} date="14 Jun 2021" title="Father’s Day poetry challenge 2021" description="Just a few words knitted together in a humble try to hold all our love for the fathers out there. We had the joy of building the platform to share this bliss."/>
                        <CardsRight image={pic9} date="07 Jun 2021" title="Humans Of Karunya" description="Stringing stories that extract the essence of existence at KARUNYA! Unifying fellow mates with their unique fables that are rustic and raw. Maybe a bit citrusy, delivering that extra zing! Slightly spicy tales seasoned and served. A pallet you might never want to miss. Only @humansofkarunya"/>
                        <CardsLeft image={pic8} date="04 Apr 2021" title="Essay Competition - plastic elimination" description="Nature friendly is future friendly. To emphasize our take, we conducted the ‘Essay Competition - Plastic Elimination’ A word written is a thought that’s engraved, a future that is sown. Our essay writing competition is a testimony."/>
                        <CardsRight image={pic7} date="31 Mar 2021" title="Real-me Super-me design challenge" description="You got you. Oh yeah, you got YOU! We got you! Exposing the super- you through the ‘Real-me Super - me’ design challenge was truly an empowering event. "/>
                        <CardsLeft image={pic6} date="25 Mar 2021" title="Minimalist Photography challenge" description="We are just EXTRA basic. You get the vibe. Our Minimalist Photography Challenge revolved around the theme of science, architecture, and monochrome. Our photographers sure showed a fine fashion for photography!"/>
                        <CardsRight image={pic5} date="20 Mar 2021" title="Acrostic Poem Challenge" description="We don’t just think. We T- Tackle H- Help I - Innovate N - Nurture K - Kreate Pun intended."/>
                        <CardsLeft image={pic4} date="13, 20, 27 Mar & 5 Apr 2021" title="Design Bootcamp - II" description="We had to do it. We just had to do it! Design Series - Photoshop Bootcamp - II With 100+ participants in and around Karunya, a complete swing of hands-on experiences, thrilling challenges, and QnA sessions, and full-on amusement. We had it all!"/>
                        <div id="2020" className="topic-year mar-top-100">
                            <h2>2020</h2>
                            <div className="line-red"></div>
                        </div>
                        <CardsRight image={pic3} date="09 Oct 2020" title="Memories 2020-Challenge" description="We call ourselves a family, the bright big beautiful Karunyan Family. Oh so fully filled with memories and treasured moments. Memories- 2020 was a unified territory for all the Karunyans of the year 2020 to walk us down their memory lane, sharing their stories and adventures here in Karunya. We had to say it. It was that one time we found happiness in the tears of our seniors. Come on who would want to leave campus this so beloved? But there they are rising and shining!"/>
                        <CardsLeft image={pic2} date="03 Oct 2020" title="Logo challenge" description="Ignite imagination and keep it burning, not boring! While expanding our arena of challenges to keep our Karunyans pumped, the Logo challenge was an exciting area that we landed on. It was all cool and quirky and absolutely brilliant to watch our fellow mates racing their creative thoughts towards an edgy logo."/>
                        <CardsRight image={pic1} date="12 Sep 2020" title="Design Bootcamp -I" description="Karunya Kreatives, as a team believes in emanating the joy of  sharing creativity. Our Design Series - Photoshop Bootcamp -1 was truly a fun space for some inventive activities that included a thorough run-through of Adobe Photoshop, fun challenges for the participants, QnA session, and certification. As creativity has no limits, our Bootcamp was an open-to-all event adding to the reasons for the immense delight in the success the event."/>
                        
                    </div>
                </div>
            <Footer2 />
        </div>
    );
}

export default PastEventsPage;