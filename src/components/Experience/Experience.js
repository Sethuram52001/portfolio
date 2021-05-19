import React from 'react';
import * as styles from "./Experience.module.scss";
import { StaticImage } from "gatsby-plugin-image";
import {experiences} from "./Experience.data"; 

const Experience = () => {

    return ( 
        <div id="experience">
            <h1>Experience</h1>
            <div className={styles.experience_card}>
                <div>
                    <StaticImage src="../../assets/images/experience-logos/TSF.png" alt="TSF" />
                </div>
                <div>
                    <h3>{experiences[0].company_name}</h3>
                    <p>{experiences[0].role}</p>
                    <p>{experiences[0].period}</p>
                    <a href={experiences[0].verification} target="_blank">See credentials</a>
                </div>
            </div>
        </div>
     );
}
 
export default Experience;