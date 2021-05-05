import React from 'react';
import * as styles from "./Projects.module.scss";
import ProjectCard from '../ProjectCard/ProjectCard';

const Projects = () => {
    const arr = [1,2,3,4,5];

    return ( 
        <div id="projects">
            <h1>Projects</h1>
            <p>Here are some my projects which I loved working on, and explored new territories while doing so!</p>
            <div className={styles.projectContainer}>
                {arr.map((val, index) => (
                    <ProjectCard />
                ))}
            </div>
        </div>
     );
}
 
export default Projects;