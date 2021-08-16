import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

const Skills = () =>{
    return (
        <section id='skills'>
            <div>
                <div>
                    {/* <ChipIcon /> */}
                    <h1 id='skills_title'>
                        Skills &amp; Technologies
                    </h1>
                    <p>
                        See below for a list of my current skills
                    </p>
                </div>
                <div>
                    {skills.map((skill) => (
                        <div key={skill}>
                            <div class='skill_single'>
                                <BadgeCheckIcon class='skills_badge_icon'/>
                                <span>
                                    {skill}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;