import React from 'react';
import * as styles from "./Education.module.scss";
import {education} from "./Education.data";
import EducationCard from "../EducationCard/EducationCard";

const Education = () => {

    return ( 
        <div id="education">
            <h2 className={styles.title}>Education</h2>
            <div className={styles.education_container}>
                {education.map((edu, index) => (
                    <EducationCard key={index} name={edu.name} degree={edu.degree} time={edu.time} />
                ))}
            </div>
        </div>
     );
}
 
export default Education;