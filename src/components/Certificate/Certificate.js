import React from 'react';
import * as styles from "./Certificate.module.scss";
import {GatsbyImage, getImage} from "gatsby-plugin-image";

const Certificate = ({name, organization, verification, image_data}) => {
    console.log(image_data)
    const image = getImage(image_data)

    return ( 
        <div className={styles.certificateContainer}>
            <div className={styles.content}>
                <a href={verification} rel="noreferrer">
                    <div className={styles.logoContainer}>
                        <GatsbyImage image={image} alt="image" />
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