import React from 'react';
import * as styles from "./Projects.module.scss";
import ProjectCard from '../ProjectCard/ProjectCard';

const Projects = () => {

    const projects = [
        {
            title: "Path-Finding-Visualizer",
            intro: "Path-finding visualizer - a visualization tool for graph algorithms.",
            lang: "JavaScript",
            stars: "33",
            forks: "10"
        },
        {
            title: "sorting-visualizer",
            intro: "This is a sorting visualizer built with React JS, to visualize various sorting algorithms.",
            lang: "JavaScript",
            stars: "6",
            forks: "3"  
        },
        {
            title: "harry-potter-app",
            intro: "My childhood fantasy world! A trivia/ mini fandom of it.",
            lang: "JavaScript",
            stars: "3",
            forks: "0" 
        },
        {
            title: "TrelloClone",
            intro: "I tried cloning Trello( ofcourse not every feature/ functionality of trello) using react and redux.",
            lang: "JavaScript",
            stars: "2",
            forks: "1" 
        }
    ]

    const arr = [1,2,3,4,5];

    return ( 
        <div id="projects">
            <h1>Projects</h1>
            <p>Here are some my projects which I loved working on, and explored new territories while doing so!</p>
            <div className={styles.projectContainer}>
                {projects.map((project, index) => (
                    <ProjectCard title={project.title} intro={project.intro} lang={project.lang} stars={project.stars} forks={project.forks} />
                ))}
            </div>
        </div>
     );
}
 
export default Projects;