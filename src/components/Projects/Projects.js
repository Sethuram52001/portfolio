import React from 'react';
import * as styles from "./Projects.module.scss";
import ProjectCard from '../ProjectCard/ProjectCard';
import {projects} from "./Projects.data";

const Projects = () => {

    return ( 
        <div id="projects">
            <h2 className={styles.title}>Projects</h2>
            <p>Here are some my projects which I loved working on, and explored new territories while doing so!</p>
            <div className={styles.projectContainer}>
                {projects.map((project, index) => (
                    <ProjectCard 
                        key={index}
                        title={project.title} 
                        intro={project.intro} 
                        lang={project.lang} 
                        stars={project.stars} 
                        forks={project.forks} 
                        image_name={project.image}
                        url={project.url}
                    />
                ))}
            </div>
        </div>
     );
}
 
export default Projects;