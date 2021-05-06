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
    console.log(skill_icons)

    return ( 
        <div id="skills">
            <h1>Skills</h1>
            <p>I love learning new tech stacks in the field of web-dev. And aspire to explore all the tech stack which intrigue me</p>
            {skill_icons.map((skill, index) => (
                <SkillComponent skill={skill} />
            ))}
        </div>
     );
}
 
export default Skills;

/*
           <img src={HTMLIcon} width="100px" alt="html5" />
            <img src={CSSIcon} width="100px" alt="css3" />
            <img src={JSIcon} width="100px" alt="js" />
            <img src={TSIcon} width="100px" alt="ts" />
            <img src={JavaIcon} width="100px" alt="java" />
            <img src={ReactIcon} width="100px" alt="react" />
            <img src={GraphQLIcon} width="100px" alt="graphql" />
            <img src={NodeJSIcon} width="100px" alt="node" />
            <img src={SassIcon} width="100px" alt="sass" />
            <img src={MaterialIcon} width="100px" alt="material" />
            <img src={MongoIcon} width="100px" alt="mongo" />
            <img src={FirebaseIcon} width="100px" alt="firebase" />
            <img src={GitIcon} width="100px" alt="git" />
            <img src={NPMIcon} width="100px" alt="npm" />
            <img src={GatsbyIcon} width="100px" alt="gatsby" />
            <img src={NextIcon} width="100px" alt="next" />
*/