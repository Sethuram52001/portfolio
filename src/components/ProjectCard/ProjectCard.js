import React, { useContext } from 'react';
import * as styles from "./ProjectCard.module.scss";
import {colors} from "./github_official_colors_lang";
import PathVisualizerImage from "../../assets/images/project-images/Pathfinding-Visualizer.jpeg";
import SortingVisualizerImage from "../../assets/images/project-images/Sorting-Visualizer.jpeg";
import TrelloCloneImage from "../../assets/images/project-images/Trello-Clone.jpeg";
import HPWikiImage from "../../assets/images/project-images/Harry-Potter-Wiki.jpeg";
import {GlobalStateContext} from "../../context/GlobalContextProvider";

const ProjectCard = ({title, intro, lang, stars, forks, image_name, url}) => {

    const image = image_name === "Pathfinding-Visualizer" ? PathVisualizerImage : image_name === "Sorting-Visualizer" ? SortingVisualizerImage : image_name === "Trello-Clone" ? TrelloCloneImage : image_name === "Harry-Potter-Wiki" ? HPWikiImage : null;
    const isDark = useContext(GlobalStateContext);

    function openGithubRepo(url) {
        let win = window.open(url, "_blank");
        win.focus();
    }

    return ( 
        <div 
            className={isDark.theme !== "dark" ? styles.card : `${styles.card} ${styles.cardDark}`}
            onClick={() => openGithubRepo(url)}
            data-sal="fade"
            data-sal-delay="300"
            data-sal-easing="ease"
        >
            <div>
                <img src={image} alt={image_name} />
            </div>
            <div className={styles.card_title}>{title}</div>
            <div className={styles.card_body}>
                {intro}
            </div>
            <div className={styles.card_footer}>
                <span className={styles.lang}>
                    <div
                        className={styles.language_color}
                        style={{backgroundColor: colors.JavaScript}}
                    ></div>
                    {lang}
                </span>
                <span className={styles.stars}>
                    <svg
                    aria-hidden="true"
                    className="octicon repo-star-svg"
                    height="20"
                    role="img"
                    viewBox="0 0 14 16"
                    width="14"
                    fill="rgb(106, 115, 125)"
                    >
                    <path
                        fill-rule="evenodd"
                        d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
                    ></path>
                    </svg>
                    {stars}
                </span>
                <span className={styles.forks}>
                    <svg
                    aria-hidden="true"
                    className="octicon repo-star-svg"
                    height="20"
                    role="img"
                    viewBox="0 0 10 16"
                    width="12"
                    fill="rgb(106, 115, 125)"
                    >
                    <path
                        fill-rule="evenodd"
                        d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
                    ></path>
                    </svg>
                    {forks}
                </span>
            </div>
        </div>
     );
}
 
export default ProjectCard;