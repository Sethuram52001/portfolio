import React from 'react';
import * as styles from "./About.module.scss";
import Lottie from "react-lottie";
import animationData from "../../assets/animations/student.json";
import SocialLinks from '../SocialLinks/SocialLinks';
import { Link } from 'gatsby';
import {Button} from "reactstrap";

const About = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData
    }

    return ( 
        <div id="about" className={styles.aboutContainer}>
            <div>
                <h1 className={styles.title}>
                    Hi all I'm Sethuram
                    <span className={styles.waveEmoji}>
                        👋
                    </span>
                </h1>
                <p className={styles.subtitle}>
                    I'm a passionate learner in the field of web-development, currently having fun building web-apps with ReactJS / Javascript and some othe cool libraries and frameworks.
                    I'm also intrigued by data structures and algorithms and occassionaly write blogs on them.
                </p>
                <SocialLinks />
                <Button
                    href="https://drive.google.com/drive/u/0/folders/1zKfGLvNqZTv6KGgjAUxJMPTOrhqUt1Lf"
                >
                    <span>See My Resume</span>
                </Button>
            </div>
            <div className={styles.lottieConatiner}>
                <Lottie options={defaultOptions} />
            </div>
        </div>
     );
}
 
export default About;
/* <StaticImage 
                src="../../assets/images/MyImg/MyImage.jpeg"
                alt="my profile"
                quality="100"
    /> */