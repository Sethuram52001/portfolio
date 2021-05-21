import React from 'react';
import * as styles from "./Certifications.module.scss";
import Certificate from '../Certificate/Certificate';
import {certificates} from "./Certifications.data";

const Certifications = () => {

    return ( 
        <div id="certifcations">
            <h1>Certifications</h1>
            <div className={styles.certifications_container}>
                {certificates.map((certificate, index) => (
                    <Certificate name={certificate.name} organization={certificate.organization} verification={certificate.verification} />
                ))}
            </div>
        </div>
     );
}
 
export default Certifications;