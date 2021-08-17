import React from 'react';
import { ArrowRightIcon } from "@heroicons/react/solid";
import ToggleButton from 'react-toggle-button';

const Navbar = ({ lightTheme, setLightTheme }) =>{
    return (
        <div id="navbar" class={lightTheme?'navbar_light':'navbar_dark'}>
            <a href="#about" class='link' id='navbar_about'>
                Maurice Gedney
            </a>

            <nav id='navbar_nav'>
                <a href="#projects" class='link' id='navbar_work'>
                    Past Work
                </a>
                <a href="#skills" class='link' id='navbar_skills'>
                    Skills
                </a>
                {/* <a href="#testimonials" class='link' id='navbar_testimonials'>
                    Testimonials
                </a> */}
                <div id='theme_container'>
                    <h4 id='theme_title'>
                        Dark Theme: 
                    </h4>
                    <ToggleButton value={ !lightTheme } onToggle={() => { setLightTheme(!lightTheme) }}/> 
                </div>
            </nav>
            {/* <div id='theme_container'>
                <h4 id='theme_title'>
                    Dark Theme: 
                </h4>
                <ToggleButton value={ !lightTheme } onToggle={() => { setLightTheme(!lightTheme) }}/> 
            </div> */}
            <a href="#contact" class='link' id='navbar_hire'>
                Hire Me
                <ArrowRightIcon class='arrow_right_icon'/>
            </a>
        </div>
    );
}

export default Navbar;