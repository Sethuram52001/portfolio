import React from 'react';
import * as styles from "./About.module.scss";
import MyImage from "../../images/MyImage.jpeg";

const About = () => {
    return ( 
        <div id="about">
            <h1 className={styles.title}>
                Hi all I'm Sethuram
                <span>
                    <img src="https://twemoji.maxcdn.com/2/72x72/1f44b.png" alt="👋" />
                </span>
            </h1>
            <p className={styles.subtitle}>
                I'm a passionate learner in the field of web-development, currently having fun building web-apps with ReactJS / Javascript and some othe cool libraries and frameworks.
                I'm also intrigued by data structures and algorithms and occassionaly write blogs on them.
            </p>
            <img src={MyImage} alt="profile picture" />
        </div>
     );
}
 
export default About;