import React from 'react';
import * as styles from "./Education.module.scss";
import {education} from "./Education.data";
import EducationCard from "../EducationCard/EducationCard";

const Education = () => {

    return ( 
        <div id="education" className={styles.educationSection}>
            <h1>Education</h1>
            <div className={styles.education_container}>
                {education.map((edu, index) => (
                    <EducationCard name={edu.name} degree={edu.degree} time={edu.time} />
                ))}
            </div>
        </div>
     );
}
 
export default Education;