import React, { useContext } from 'react';
import * as styles from "./ExperienceCard.module.scss";
import {StaticImage} from "gatsby-plugin-image";
import {GlobalStateContext} from "../../context/GlobalContextProvider";
import Slide from "react-reveal/Slide";
import companyImage from "../../assets/images/experience-logos/TSF.png";

const ExperienceCard = ({company_name, role, period, verification, work_description}) => {

    const isDark = useContext(GlobalStateContext);
    const workDesc = work_description.map((desc) => <li className={isDark.theme !== "dark" ? styles.listBullets : `${styles.listBullets} ${styles.listBulletsDark}`}>{desc}</li>);

    return ( 
        <Slide bottom>
            <div 
                className={isDark.theme !== "dark" ? styles.experience_card : `${styles.experience_card} ${styles.experience_card_dark}`}
            >
                <div className={styles.content}>
                    <a href={verification} rel="noreferrer">
                        <div className={styles.logoContainer}>
                            <StaticImage src="../../assets/images/experience-logos/TSF.png" alt="TSF" />
                        </div>
                    </a>
                    <div className={styles.credentials}>
                        <h3 className={styles.credentialsText}>View Credentials</h3>
                    </div>
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