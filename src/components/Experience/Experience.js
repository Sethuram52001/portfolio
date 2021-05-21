import React from 'react';
import * as styles from "./Experience.module.scss";
import { StaticImage } from "gatsby-plugin-image";
import {experiences} from "./Experience.data"; 
import ExperienceCard from '../ExperienceCard/ExperienceCard';

const Experience = () => {

    return ( 
        <div id="experience">
            <h1>Experience</h1>
            <div className={styles.experience_card}>
                {experiences.map((experience, index) => (
                    <ExperienceCard company_name={experience.company_name} role={experience.role} period={experience.period} verification={experience.verification} />
                ))}
            </div>
        </div>
     );
}
 
export default Experience;