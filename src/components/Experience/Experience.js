import React from 'react';
import * as styles from "./Experience.module.scss";
import { StaticImage } from "gatsby-plugin-image";


const Experience = () => {

    const experiences = [
        {
            company_name: "The Sparks Foundation",
            role: "Intern",
            period: "Apr 2021",
            verification: "#"
        }
    ]

    return ( 
        <div id="experience">
            <h1>Experience</h1>
            <div className={styles.experience_card}>
                <div>
                    <StaticImage src="../../images/experience-logos/TSF.png" alt="TSF" />
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