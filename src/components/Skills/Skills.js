import React, { useContext } from 'react';
import * as styles from "./Skills.module.scss";
import SkillComponent from '../SkillComponent/SkillComponent';
import animationData from "../../assets/animations/web-development.json";
import {StaticImage} from "gatsby-plugin-image";
import {skill_icons, skill_section} from "./Skills.data";
import {GlobalStateContext} from "../../context/GlobalContextProvider";
import Loading from '../Loading/Loading';
import loadable from '@loadable/component';

const LottieDisplay = loadable(() => import('../LottieDisplay/LottieDisplay'), {fallback: <Loading />});

const Skills = () => {

    const isDark = useContext(GlobalStateContext);

    return ( 
        <div id="skills">
            <h1 className={isDark.theme !==  "dark" ? styles.title : styles.titleDark}>What I do</h1>
            <p className={isDark.theme !==  "dark" ? styles.subtitle: styles.subtitleDark}>I love learning new tech stacks in the field of web-dev. And aspire to explore all the tech stack which intrigues me.</p>
            <div className={styles.skillContainer}>
                <div className={styles.lottieContainer}>
                    <LottieDisplay lottieFile={animationData} />
                </div>
                <div className={styles.skillsDisplay}>
                    {skill_icons.map((skill, index) => (
                        <SkillComponent 
                            key={index}
                            skill={skill} 
                        />
                    ))}
                    <div className={isDark.theme !==  "dark" ? styles.skillDetails : styles.skillDetailsDark}>
                        {skill_section.skills.map((skill, index) => {
                            return (
                                <p key={index}>
                                    <StaticImage 
                                       src="https://twemoji.maxcdn.com/2/72x72/26a1.png"
                                       alt="⚡" 
                                       width={15} 
                                       height={15} 
                                    />
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