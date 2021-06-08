import { Link } from 'gatsby';
import React from 'react';
import GithubIcon from "../../assets/images/social-logos/iconmonstr-github-1.svg";
import LinkedInIcon from "../../assets/images/social-logos/linkedin1.svg";
import MediumIcon from "../../assets/images/social-logos/iconmonstr-medium-4.svg";
import * as styles from "./SocialLinks.module.scss";

const SocialLinks = () => {
    return ( 
        <div>
            <Link 
                to="https://github.com/Sethuram52001"
            >
                <img className={styles.social_link} src={GithubIcon} alt="github" />
            </Link>
            <Link 
                to="https://www.linkedin.com/in/sethuram-s-v-171719194/"
            >
                <img className={styles.social_link} src={LinkedInIcon} alt="linkedin" /> 
            </Link>
            <Link 
                to="https://sethuram52001.medium.com/"
            >
                <img className={styles.social_link} src={MediumIcon} alt="medium" />
            </Link>
        </div>
     );
}
 
export default SocialLinks;