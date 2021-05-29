import React from 'react';
import * as styles from "./Certificate.module.scss";
import Coursera_Logo from "../../assets/images/certificate-logos/Coursera_Logo.png";
import MongoDB_Logo from "../../assets/images/certificate-logos/MongoDB_Logo.jpg";
import HackerRank_Logo from "../../assets/images/certificate-logos/HackerRank_Logo.png";

const Certificate = ({name, organization, verification, image_name}) => {

    const image = image_name === "Coursera_Logo.png" ? Coursera_Logo : image_name === "MongoDB_Logo.jpg" ? MongoDB_Logo : image_name === "HackerRank_Logo.png" ? HackerRank_Logo : null; 

    return ( 
        <div className={styles.certificateContainer}>
            <div className={styles.content}>
                <a href={verification} rel="noreferrer">
                    <div className={styles.logoContainer}>
                        <img src={image} alt={image_name} />
                    </div>
                    <div className={styles.credentials}>
                        <h3 className={styles.credentialsText}>View credentials</h3>
                    </div>
                </a>
            </div>
            <div>
                <h4>{name}</h4>
                <p>{organization}</p>
            </div>
        </div>
     );
}
 
export default Certificate;