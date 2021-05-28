import React from 'react';
import * as styles from "./Skills.module.scss";
import SkillComponent from '../SkillComponent/SkillComponent';
import animationData from "../../assets/animations/web-development.json";
import Lottie from "react-lottie";
import {StaticImage} from "gatsby-plugin-image";
import {skill_icons, skill_section} from "./Skills.data";

const Skills = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData
    }

    return ( 
        <div id="skills">
            <h1 className={styles.title}>What I do</h1>
            <p className={styles.subtitle}>I love learning new tech stacks in the field of web-dev. And aspire to explore all the tech stack which intrigues me.</p>
            <div className={styles.skillContainer}>
                <div className={styles.lottieContainer}>
                    <Lottie options={defaultOptions} />
                </div>
                <div>
                    {skill_icons.map((skill, index) => (
                        <SkillComponent skill={skill} />
                    ))}
                    <div className={styles.skillDetails}>
                        {skill_section.skills.map((skill, index) => {
                            return (
                                <p key={index}>
                                    <StaticImage alt="⚡" src="https://twemoji.maxcdn.com/2/72x72/26a1.png" width={15} height={15} />
                                    {skill}
                                </p>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Skills;