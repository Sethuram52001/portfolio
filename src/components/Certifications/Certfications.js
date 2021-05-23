import React, {useState, useCallback} from 'react';
import * as styles from "./Certifications.module.scss";
import Certificate from '../Certificate/Certificate';
import {certificates} from "./Certifications.data";

const Certifications = () => {

    const [limit, setLimit] = useState(6);
    const [showStatus, setShowStatus] = useState("Show More");

    const handleShow = useCallback(() => {
        if(showStatus === "Show More") {
            setLimit(certificates.length);
            setShowStatus("Show Less");
        }
        else {
            setLimit(6);
            setShowStatus("Show more");
        }
    }, [showStatus, limit]);

    return ( 
        <div id="certifications" className={styles.certificationsSection}>
            <h1>Certifications</h1>
            <div className={styles.certificationsContainer}>
                {certificates.slice(0, limit).map((certificate, index) => (
                    <Certificate name={certificate.name} organization={certificate.organization} verification={certificate.verification} />
                ))}
            </div>
            <button
                onClick={handleShow}
            >
                {showStatus}
            </button>
        </div>
     );
}
 
export default Certifications;