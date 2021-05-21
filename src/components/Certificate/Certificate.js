import React from 'react';
//import CourseraLogo from "../../assets/images/certificate-logos/coursera.svg";
//import HCLogo from "../../assets/images/certificate-logos/hackerrank.svg";
import * as styles from "./Certificate.module.scss";
import CourseraLogo from "../../assets/images/certificate-logos/CourseraLogo.png"; 
import {StaticImage} from "gatsby-plugin-image";

const Certificate = ({name, organization, verification}) => {

    //let logo = (organization === "Coursera") ? CourseraLogo : HCLogo; 

    return ( 
        <div className={styles.certificateContainer}>
            <div className={styles.content}>
                <a href={verification}>
                    <div className={styles.logoContainer}>
                        <StaticImage className={styles.logo} src="../../assets/images/certificate-logos/CourseraLogo.png" /> 
                    </div>
                    <div className={styles.credentials}>
                        <h3>Credentials</h3>
                    </div>
                </a>
            </div>
            <div>
                <h4>{name}</h4>
                <p>{organization}</p>
                <a href={verification} target="_blank">See credentials</a>
            </div>
        </div>
     );
}
 
export default Certificate;