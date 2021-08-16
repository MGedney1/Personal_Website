import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

const Projects = () =>{
    return (
        <section id="projects">
            <div>
                <div>
                    {/*<div id='code_icon_container'>
                        <CodeIcon id='code_icon'/>
                    </div>*/}
                    <h1 id='projects_title'>
                        Previous coding projects
                    </h1>
                    <p>
                        See below for a breif summary of a couple of projects that I have built in the past
                    </p>
                </div>
                <div>
                    {projects.map((project) => (
                        <a href={project.link} key={project.image}>
                            <div class='project_container'>
                                <div class='project_img_container'>
                                    <img alt="gallery" src={project.image} class='project_img'/>
                                </div>
                                <div class='project_subcontainer'>
                                    <h1 class='project_title'>
                                        {project.title}
                                    </h1>
                                    <h2 class='project_subtitle'>
                                        {project.subtitle}
                                    </h2>
                                    <p class='project_description'>{project.description}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;