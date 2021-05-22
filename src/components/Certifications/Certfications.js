import React from 'react';
import * as styles from "./Certifications.module.scss";
import Certificate from '../Certificate/Certificate';
import {certificates} from "./Certifications.data";

const Certifications = () => {

    return ( 
        <div id="certifcations" className={styles.certificationsSection}>
            <h1>Certifications</h1>
            <div className={styles.certificationsContainer}>
                {certificates.map((certificate, index) => (
                    <Certificate name={certificate.name} organization={certificate.organization} verification={certificate.verification} />
                ))}
            </div>
        </div>
     );
}
 
export default Certifications;