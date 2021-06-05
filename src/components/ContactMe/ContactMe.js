import React from 'react';
import * as styles from "./ContactMe.module.scss";
import {StaticImage} from "gatsby-plugin-image";
import { Link } from 'gatsby';
import {email_data} from "./ContactMe.data";
import SocialLinks from "../SocialLinks/SocialLinks";

const ContactMe = () => {
    return ( 
        <div id="#contact">
            <h2>Reach out to me!</h2>
            <div className={styles.contactContainer}>
                <div>
                <p>Feel free to discuss about anything related to dev or just drop a hi.</p>
                    <Link href={`mailto:${email_data.mailId}`}>
                        <img src={email_data.gmailIcon} alt="gmail" />
                    </Link>
                    <SocialLinks />
                </div>
                <div>
                    <StaticImage src="../../assets/images/MyImg/MyImage.jpeg" quality={100} width={200} height={200} className={styles.myImage} />
                </div>
            </div>
        </div>
     );
}
 
export default ContactMe;