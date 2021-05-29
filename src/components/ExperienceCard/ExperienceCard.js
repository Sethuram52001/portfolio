import React from 'react';
import * as styles from "./ExperienceCard.module.scss";
import {StaticImage} from "gatsby-plugin-image";

const ExperienceCard = ({company_name, role, period, verification}) => {
    return ( 
        <div className={styles.experience_card}>
            <div>
                <StaticImage className={styles.companyLogo} src="../../assets/images/experience-logos/TSF.png" width={400} alt="TSF" />
            </div>
            <div>
                <h3>{company_name}</h3>
                <p>{role}</p>
                <p>{period}</p>
                <a href={verification} target="_blank" rel="noreferrer">See credentials</a>
            </div>
        </div>
     );
}
 
export default ExperienceCard;