import React, { useContext } from 'react';
import * as styles from "./Certificate.module.scss";
import { GlobalStateContext } from '../../context/GlobalContextProvider';
import Flip from "react-reveal/Flip";

const Certificate = ({name, organization, verification, image}) => {

    const isDark = useContext(GlobalStateContext);
    
    return ( 
        <Flip right>
            <div 
                className={isDark.theme !== "dark" ? styles.certificateContainer : `${styles.certificateContainer} ${styles.certificateContainerDark}`}
            >
                <div className={styles.content}>
                    <a href={verification} rel="noreferrer">
                        <div className={styles.logoContainer}>
                            <img className={styles.certificateImage} src={image} alt={organization} />
                        </div>
                        <div className={styles.credentials}>
                            <h3 className={styles.credentialsText}>View credentials</h3>
                        </div>
                    </a>
                </div>
                <div className={styles.certificateBody}>
                    <h4 className={styles.certificateName}>{name}</h4>
                    <p className={styles.certificateOrganization}>{organization}</p>
                </div>
            </div>
        </Flip>
     );
}
 
export default Certificate;