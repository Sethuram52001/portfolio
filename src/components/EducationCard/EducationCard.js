import React, { useContext } from 'react';
import * as styles from "./EducationCard.module.scss";
import {StaticImage} from "gatsby-plugin-image";
import {GlobalStateContext} from "../../context/GlobalContextProvider";

const EducationCard = ({name, degree, time}) => {

    const isDark = useContext(GlobalStateContext);

    return ( 
        <div className={isDark.theme !== "dark" ? styles.education_card : `${styles.education_card} ${styles.education_card_dark}`}>
            <div>
                <StaticImage src="../../assets/images/education-logos/TCE.png" alt="TCE" />
            </div>
            <div className={styles.educationDetails}>
                <h3 className={styles.educationName}>{name}</h3>
                <p>{degree}</p>
                <p>{time}</p>
            </div>
        </div>
     );
}
 
export default EducationCard;