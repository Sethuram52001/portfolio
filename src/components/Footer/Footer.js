import React from 'react';
import * as styles from "./Footer.module.scss";
import {StaticImage} from "gatsby-plugin-image";


const Footer = () => {
    return ( 
        <div id="#footer" className={styles.footer}>
            <p>Reach out to me!</p>
            <StaticImage src="../../assets/images/MyImg/MyImage.jpeg" quality={100} width={200} height={200} className={styles.myImage} />
        </div>
     );
}
 
export default Footer;