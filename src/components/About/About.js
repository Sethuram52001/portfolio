import React from 'react';
import * as styles from "./About.module.scss";
import Lottie from "react-lottie";
import animationData from "../../assets/animations/student.json";

const About = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData
    }

    return ( 
        <div id="about">
            <h1 className={styles.title}>
                Hi all I'm Sethuram
                <span>
                    <img src="https://twemoji.maxcdn.com/2/72x72/1f44b.png" alt="👋" />
                </span>
            </h1>
            <div className={styles.aboutContainer}>
                <p className={styles.subtitle}>
                    I'm a passionate learner in the field of web-development, currently having fun building web-apps with ReactJS / Javascript and some othe cool libraries and frameworks.
                    I'm also intrigued by data structures and algorithms and occassionaly write blogs on them.
                </p>
                <div className={styles.lottieConatiner}>
                    <Lottie options={defaultOptions} />
                </div>
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