import React from 'react';
import HTMLIcon from "../../images/html5.svg";
import CSSIcon from "../../images/css3.svg";
import JSIcon from "../../images/javascript.svg";
import TSIcon from "../../images/typescript.svg";
import JavaIcon from "../../images/java.svg";
import ReactIcon from "../../images/react.svg";
import GraphQLIcon from "../../images/graphql.svg";
import NodeJSIcon from "../../images/nodejs.svg";
import SassIcon from "../../images/sass.svg";
import MaterialIcon from "../../images/material-ui.svg";
import MongoIcon from "../../images/mongodb.svg";
import FirebaseIcon from "../../images/firebase.svg";
import GitIcon from "../../images/git.svg";
import NPMIcon from "../../images/npm.svg";
import GatsbyIcon from "../../images/gatsby.svg";
import NextIcon from "../../images/next-js.svg";
import ExpressIcon from "../../images/expressjs.svg";
import SkillComponent from '../SkillComponent/SkillComponent';
import animationData from "../../animations/web-development.json";
import Lottie from "react-lottie";

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
            <h1>Skills</h1>
            <Lottie options={defaultOptions} />
            <p>I love learning new tech stacks in the field of web-dev. And aspire to explore all the tech stack which intrigue me</p>
            {skill_icons.map((skill, index) => (
                <SkillComponent skill={skill} />
            ))}
        </div>
     );
}
 
export default Skills;