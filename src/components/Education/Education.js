import React from 'react';
import * as styles from "./Education.module.scss";
import { StaticImage } from "gatsby-plugin-image";
import {education} from "./Education.data";

const Education = () => {

    return ( 
        <div id="education">
            <h1>Education</h1>
            <div className={styles.education_card}>
                <div>
                    <StaticImage src="../../assets/images/education-logos/TCE.png" alt="TCE" />
                </div>
                <div>
                    <h3>{education[0].name}</h3>
                    <p>{education[0].degree}</p>
                    <p>{education[0].time}</p>
                </div>
            </div>
        </div>
     );
}
 
export default Education;