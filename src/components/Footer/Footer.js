import React from 'react';
import * as styles from "./Footer.module.scss";
import {StaticImage} from "gatsby-plugin-image";


const Footer = () => {
    return ( 
        <div className={styles.div}>
            <p>Reach out to me!</p>
            <StaticImage src="../../assets/images/MyImg/MyImage.jpeg" quality={100} className={styles.myImage} />
        </div>
     );
}
 
export default Footer;