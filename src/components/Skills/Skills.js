import React from 'react';
import * as styles from "./Skills.module.scss";
import HTMLIcon from "../../assets/images/skill-logos/html5.svg";
import CSSIcon from "../../assets/images/skill-logos/css3.svg";
import JSIcon from "../../assets/images/skill-logos/javascript.svg";
import TSIcon from "../../assets/images/skill-logos/typescript.svg";
import JavaIcon from "../../assets/images/skill-logos/java.svg";
import ReactIcon from "../../assets/images/skill-logos/react.svg";
import GraphQLIcon from "../../assets/images/skill-logos/graphql.svg";
import NodeJSIcon from "../../assets/images/skill-logos/nodejs.svg";
import SassIcon from "../../assets/images/skill-logos/sass.svg";
import MaterialIcon from "../../assets/images/skill-logos/material-ui.svg";
import MongoIcon from "../../assets/images/skill-logos/mongodb.svg";
import FirebaseIcon from "../../assets/images/skill-logos/firebase.svg";
import GitIcon from "../../assets/images/skill-logos/git.svg";
import NPMIcon from "../../assets/images/skill-logos/npm.svg";
import GatsbyIcon from "../../assets/images/skill-logos/gatsby.svg";
import NextIcon from "../../assets/images/skill-logos/next-js.svg";
import ExpressIcon from "../../assets/images/skill-logos/expressjs.svg";
import SkillComponent from '../SkillComponent/SkillComponent';
import animationData from "../../assets/animations/web-development.json";
import Lottie from "react-lottie";
import {StaticImage} from "gatsby-plugin-image";

const Skills = () => {

    const skill_icons = [
        {src: HTMLIcon, name: "HTML"},
        {src: CSSIcon, name: "CSS"},
        {src: JSIcon, name: "JavaScript"},
        {src: TSIcon, name: "Typescript"},
        {src: JavaIcon, name: "Java"},
        {src: ReactIcon, name: "React"},
        {src: GraphQLIcon, name: "GraphQL"},
        {src: NodeJSIcon, name: "NodeJS"},
        {src: ExpressIcon, name: "ExpressJS"},
        {src: SassIcon, name: "Sass"},
        {src: MaterialIcon, name: "Material UI"},
        {src: MongoIcon, name: "MongoDB"},
        {src: FirebaseIcon, name: "Firebase"},
        {src: GitIcon, name: "Git"},
        {src: NPMIcon, name: "NPM"}
    ]

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
                        <p>
                            <StaticImage alt="⚡" src="https://twemoji.maxcdn.com/2/72x72/26a1.png" width={15} height={15} />
                            I love blah blah
                        </p>
                        <p>
                            <StaticImage alt="⚡" src="https://twemoji.maxcdn.com/2/72x72/26a1.png" width={15} height={15} />
                            I love blah blah
                        </p>
                        <p>
                            <StaticImage alt="⚡" src="https://twemoji.maxcdn.com/2/72x72/26a1.png" width={15} height={15} />
                            I love blah blah
                        </p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Skills;