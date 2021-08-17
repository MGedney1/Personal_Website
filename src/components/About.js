import React from 'react';
import Navbar from './Navbar';
import CV from '../Maurice Programming CV.pdf';

const About = ({ lightTheme }) =>{
    return (
        <section id="about">
            <div id="about_text">
                <h1 id="about_title_text">
                    Welcome, I'm Maurice.
                </h1>
                <p>
                    I'm a recent graduate from University of Oxford with a passion for front end development.
                    <br />
                    I'm a fast learner and determined worker looking for remote work in the front end developent area.
                    <br />
                    Click below to download a copy of my CV.
                </p>
                <div id='about_links_container'> 
                    <a href={CV} download>
                        CV
                    </a> <br />
                    <a href="#projects" class='about_link'>
                        See My Past Work
                    </a> <br />
                    <a href="#contact" class='about_link'>
                        Work With Me
                    </a>
                </div>
            </div>
            <div  id="about_img_container">
                <img alt="hero" src="./coding.svg" id='about_img'/>
            </div>
        </section>
    );
}

export default About;