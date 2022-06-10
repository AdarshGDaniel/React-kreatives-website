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
import pic8 from './Assets/8.png';
import pic9 from './Assets/9.jpg';
import pic10 from './Assets/10.JPG';
import pic11 from './Assets/11.jpg';
import pic12 from './Assets/12.jpg';
import pic13 from './Assets/13.jpg';
import pic14 from './Assets/14.JPG';
import pic15 from './Assets/15.png';
import pic16 from './Assets/16.JPG';
import pic17 from './Assets/17.JPG';



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
                                <TimelineContent><Link style={{cursor: 'pointer'}} activeClass="active" to="2021" spy={true} smooth={true} offset={-80} duration={500}>2021</Link></TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent><Link style={{cursor: 'pointer'}} activeClass="active" to="2020" spy={true} smooth={true} offset={-80} duration={500}>2020</Link></TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent><Link style={{cursor: 'pointer'}} activeClass="active" to="2019" spy={true} smooth={true} offset={-80} duration={500}>2019</Link></TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                <TimelineDot />
                                </TimelineSeparator>
                                <TimelineContent><Link style={{cursor: 'pointer'}} activeClass="active" to="2018" spy={true} smooth={true} offset={-80} duration={500}>2018</Link></TimelineContent>
                            </TimelineItem>
                        </Timeline>
                    </div>
                <div className="container mar-top-100">
                    <div className="contents-block">
                        <div id="2021" className="topic-year mar-top-100">
                            <h2>2021</h2>
                            <div className="line-red"></div>
                        </div>
                        <CardsLeft image={pic17} date="03 to 05 Mar 2021" title="BOOTCAMP 1 2021" description="KHacks conducted virtual 3 Day Bootcamp exclusively for the first years, on Python Advanced, Web Development and Virtual Assistant(Amazon Alexa & Google Assistant) topics."/>
                        <CardsRight image={pic16} date="26, 27 Feb 2021" title="PYTHON FOR ALL" description="KHacks in collaboration with CTC (Computer Technology Center) conducted a two day workshop on Python exclusively for the first years."/>
                        <div id="2020" className="topic-year mar-top-100">
                            <h2>2020</h2>
                            <div className="line-red"></div>
                        </div>
                        <CardsLeft image={pic15} date="16 Nov 2020" title="INTRO TO PYTHON" description="KarunyaHacks had its first virtual event during the COVID19 pandemic. This workshop gave an introduction to Python for those who are starting in programming, it also allowed students to be intrested in coding."/>
                        <div id="2019" className="topic-year mar-top-100">
                            <h2>2019</h2>
                            <div className="line-red"></div>
                        </div>
                        <CardsRight image={pic14} date="12, 13 Dec 2019" title="LHD - Build 2019 (Hackathon)" description="KarunyaHacks conducted the first-ever 24-hour hackathon in the history of KITS where 122 students from 37 teams participated and built projects over various domains. This event was hosted by KarunyaHacks in collaboration with Major League Hacking. "/>
                        <CardsLeft image={pic13} date="24 Oct 2019" title="LHD - LEARN 2019" description="This event was hosted in collaboration with Major League Hacking. Students learned to create an AI Chatbot with Python and successfully hosted dynamic and static web apps/pages using AWS. A total of 110 students participated in the full-day event."/>
                        <CardsRight image={pic12} date="18 Oct 2019" title="INTRODUCTION TO BLOCKCHAIN" description="Students were introduced to the hot, trending technology, “Blockchain”. A full-day session was organized wherein 70 students indulged themselves in implementing blockchain technology using python & build real-time applications in blockchain using Quorum and Ethereum. "/>
                        <CardsLeft image={pic11} date="14, 16, 18, 23, 24 Oct 2019" title="BOOTCAMP" description="The Bootcamp event designed solely for the first years comprised of the topics 1)Amazon Alexa, 2)Advanced Python, 3)Python Automation & 4)Data Science; were taught to students over a span of 5 days (2 hrs/day). 70 - 120 students participated and gained knowledge & hands-on experience on the aforementioned topics. "/>
                        <CardsRight image={pic10} date="09 Oct 2019" title="HACKTOBER-FEST" description="KarunyaHacks team provided a platform for the students to contribute towards the open-source community by admitting them to the “HacktoberFest in Karunya” event. Over 130 students participated and the majority of them received t-shirts, goods & swags from the Hacktoberfest team for completing six contributions within the prescribed time."/>
                        <CardsLeft image={pic9} date="13, 14 Sep 2019" title="PYTHON WORKSHOP FOR NON-CSE STUDENT" description="A programming session on python language was organized exclusively for the non CS students where they were taught about basics & object oriented concepts. A total of 58 students participated in the full-day workshop."/>
                        <CardsRight image={pic8} date="18 March 2019" title="BASICS OF WEN DEVELOPMENT" description="This workshop was hosted exclusively for 1st year students to participate, conducted in collaboration with Major League Hacking. 52 students participated for the 2-hour programme where they learnt how to build a website using HTML and CSS."/>
                        <CardsLeft image={pic7} date="20 Feb 2019" title="PYTHON FOR DATA SCIENCE" description="Girls Wing of KarunyaHacks conducted a workshop on 'Python for Data science' on 20th Feb in order to empower the girl community.The workshop was planned, organized and attended by girl students."/>
                        <CardsRight image={pic6} date="14 Feb 2019" title="CYBER SECURITY WORKSHOP" description="KarunyaHacks organized a workshop on 'Cyber Security' on 14th Feb lead by Mr. Sathish Kumar in Karunya Institute of Technology and Sciences."/>
                        <div id="2018" className="topic-year mar-top-100">
                            <h2>2018</h2>
                            <div className="line-red"></div>
                        </div>
                        <CardsLeft image={pic5} date="17 Dec 2018" title="PYTHON GUI" description="Conducted first self-hosted workshop on python using GUI using Tkinter and Django Web framework on 17th Dec 2018."/>
                        <CardsRight image={pic4} date="4 Dec 2018" title="MLH LOCAL HACK DAY" description="A global hackathon and celebration of learning, building, and sharing!.The hackathon was coducted on 4th December 2018 and attendees were made to code a project for 12 hours."/>
                        <CardsLeft image={pic3} date="" title="INTRODUCTION TO DOCKER" description="During this workshop students were taught the basics of Docker and Software Containers. The workshop covered setting up Docker, running first container, creating a basic web application with Python and Docker, and how to push the Docker Image to DockerHub."/>
                        <CardsRight image={pic2} date="22 Oct 2018" title="HACK THE TECHNICAL INTERVIEW: ALGORITHMS PRACTICE" description="In association with MLH Local Host we conducted Hack the Technical Interview workshop. During this workshop, students learned strategies to perform better in technical interviews."/>
                        <CardsLeft image={pic1} date="11 Sep 2018" title="HACKING WITH AMAZON ALEXA" description="We have conducted Hacking with Amazon Alexa workshop in association with MLH Local Host continuously for the past two years.During this workshop participants will be taught the basics of how to build skills for Amazon Alexa to run on Alexa devices like the Amazon Tap or Echo."/>

                    </div>
                </div>
            <Footer2 />
        </div>
    );
}

export default PastEventsPage;