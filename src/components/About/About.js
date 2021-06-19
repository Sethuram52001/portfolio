import React, { useContext } from 'react';
import * as styles from "./About.module.scss";
import animationData from "../../assets/animations/student.json";
import SocialLinks from '../SocialLinks/SocialLinks';
import {Button} from "reactstrap";
import { GlobalStateContext } from '../../context/GlobalContextProvider';
import loadable from "@loadable/component";
import Loading from '../Loading/Loading';

const LottieDisplay = loadable(() => import('../LottieDisplay/LottieDisplay'), {fallback: <Loading />});

const About = () => {

    const isDark = useContext(GlobalStateContext);
    

    return ( 
        <div id="about" className={isDark.theme === "dark" ? `${styles.aboutContainer} ${styles.aboutContainerDark}` : `${styles.aboutContainer}`}>
            <div className={styles.aboutDetails}>
                <h1 className={isDark.theme === "dark" ? `${styles.titleDark}` : `${styles.title}`}>
                    Hi all I'm Sethuram
                    <span role="img" aria-label="" aria-hidden="false" className={styles.waveEmoji}>
                        👋
                    </span>
                </h1>
                <p className={isDark.theme !== "dark" ? `${styles.subtitle}` : `${styles.subtitle} ${styles.subtitleDark}`}>
                    I'm a passionate learner in the field of web-development, currently having fun building web-apps with ReactJS / Javascript and some othe cool libraries and frameworks.
                    I'm also intrigued by data structures and algorithms and occassionaly write blogs on them.
                </p>
                <div className={styles.socialSection}>
                    <SocialLinks />
                    <Button
                        href="https://drive.google.com/drive/u/0/folders/1zKfGLvNqZTv6KGgjAUxJMPTOrhqUt1Lf"
                        target="_blank"
                    >
                        <span>See My Resume</span>
                    </Button>
                </div>
            </div>
            <div className={styles.lottieConatiner}>
                <LottieDisplay lottieFile={animationData} />
            </div>
        </div>
     );
}
 
export default About;