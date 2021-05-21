import React from 'react';
import * as styles from "./EducationCard.module.scss";
import {StaticImage} from "gatsby-plugin-image";

const EducationCard = ({name, degree, time}) => {
    return ( 
        <div className={styles.education_card}>
            <div>
                <StaticImage src="../../assets/images/education-logos/TCE.png" alt="TCE" />
            </div>
            <div>
                <h3>{name}</h3>
                <p>{degree}</p>
                <p>{time}</p>
            </div>
        </div>
     );
}
 
export default EducationCard;