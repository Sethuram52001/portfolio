import React, { useContext } from 'react';
import * as styles from "./ExperienceCard.module.scss";
import {StaticImage} from "gatsby-plugin-image";
import {GlobalStateContext} from "../../context/GlobalContextProvider";
import Slide from "react-reveal/Slide";

const ExperienceCard = ({company_name, role, period, verification, work_description}) => {

    const workDesc = work_description.map((desc) => <li className={styles.listBullets}>{desc}</li>);
    const isDark = useContext(GlobalStateContext);

    return ( 
        <Slide bottom>
            <div 
                className={isDark.theme !== "dark" ? styles.experience_card : `${styles.experience_card} ${styles.experience_card_dark}`}
            >
                <div className={styles.content}>
                    <a href={verification} target="_blank" rel="noreferrer">
                        <div className={styles.logoContainer}>
                            <StaticImage className={styles.companyLogo} src="../../assets/images/experience-logos/TSF.png" width={400} alt="TSF" />
                        </div>
                        <div className={styles.credentials}>
                            <h3 className={styles.credentialsText}>View credentials</h3>
                        </div>
                    </a>
                </div>
                <div className={styles.experienceDetails}>
                    <h3 className={styles.experienceName}>{company_name}</h3>
                    <p>{role}</p>
                    <p>{period}</p>
                    <div className={styles.workDescription}>
                        <ul>
                            {workDesc}
                        </ul>
                    </div>
                </div>
            </div>
        </Slide>
     );
}
 
export default ExperienceCard;