import React from 'react';
import CourseraLogo from "../../assets/images/certificate-logos/coursera.svg";
import HCLogo from "../../assets/images/certificate-logos/hackerrank.svg";
import * as styles from "./Certificate.module.scss";

const Certificate = ({name, organization, verification}) => {

    let logo = (organization === "Coursera") ? CourseraLogo : HCLogo; 

    return ( 
        <div className={styles.certificateContainer}>
            <img className={styles.organizationLogo} src={logo} width="100px" height="100px" />
            <div>
                <h4>{name}</h4>
                <p>{organization}</p>
                <a href={verification} target="_blank">See credentials</a>
            </div>
        </div>
     );
}
 
export default Certificate;
/*
        <div className={styles.certificateCard}>
            <img src={logo} width="100px" height="100px" /> 
            <h3>{name}</h3>
            <p>{organization}</p>
            <a href={verification} target="_blank">See credential</a>
        </div>

*/