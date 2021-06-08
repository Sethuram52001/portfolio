import React from 'react';
import * as styles from "./Experience.module.scss";
import {experiences} from "./Experience.data"; 
import ExperienceCard from '../ExperienceCard/ExperienceCard';

const Experience = () => {

    return ( 
        <div id="experience">
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.experience_container}>
                {experiences.map((experience, index) => (
                    <ExperienceCard 
                        key={index} 
                        company_name={experience.company_name} 
                        role={experience.role} period={experience.period} 
                        verification={experience.verification} 
                        work_description={experience.work_description} 
                    />
                ))}
            </div>
        </div>
     );
}
 
export default Experience;