import React, {useState, useCallback} from 'react';
import * as styles from "./Certifications.module.scss";
import {certificates} from "./Certifications.data";
import { Button } from 'react-bootstrap';
import {calculateLimit} from "../../utils/calculateLimit.certificates";
import loadable from "@loadable/component";
import Loading from "../Loading/Loading";

const Certificate = loadable(() => import('../Certificate/Certificate'), {fallback: <Loading />});

const Certifications = () => {

    const ShowMore = "Show More";
    const ShowLess = "Show Less";

    const [limit, setLimit] = useState(calculateLimit);
    const [showStatus, setShowStatus] = useState(ShowMore);

    const handleShow = useCallback(() => {
        if(showStatus === ShowMore) {
            setLimit(certificates.length);
            setShowStatus(ShowLess);
        }
        else {
            setLimit(calculateLimit());
            setShowStatus(ShowMore);
        }
    }, [showStatus]);

    return ( 
        <div id="certifications" >
            <h2 className={styles.title}>Certifications</h2>
            <div className={styles.certificationsContainer}>
                {certificates.slice(0, limit).map((certificate, index) => (
                    <Certificate 
                        key={index}
                        name={certificate.name} 
                        organization={certificate.organization} 
                        verification={certificate.verification} 
                        image={certificate.image}             
                    />
                ))}
            </div>
            <div className={styles.showMore}>
                <Button
                    onClick={handleShow}
                >
                    {showStatus}
                </Button>
            </div>
        </div>
     );
}
 
export default Certifications;