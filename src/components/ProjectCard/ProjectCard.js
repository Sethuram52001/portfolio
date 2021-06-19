import React, { useContext } from 'react';
import * as styles from "./ProjectCard.module.scss";
import {colors} from "./github_official_colors_lang";
import {GlobalStateContext} from "../../context/GlobalContextProvider";
import Zoom from "react-reveal/Zoom";

const ProjectCard = ({title, intro, lang, stars, forks, image, url}) => {

    const isDark = useContext(GlobalStateContext);

    function openGithubRepo(url) {
        let win = window.open(url, "_blank");
        win.focus();
    }

    const languageColor = colors[lang];

    return ( 
        <Zoom bottom>
            <div 
                className={isDark.theme !== "dark" ? styles.card : `${styles.card} ${styles.cardDark}`}
                onClick={() => openGithubRepo(url)}
            >
                <div>
                    <img src={image} alt={title} />
                </div>
                <div className={styles.card_title}>{title}</div>
                <div className={styles.card_body}>
                    {intro}
                </div>
                <div className={styles.card_footer}>
                    <span className={styles.lang}>
                        <div
                            className={styles.language_color}
                            style={{backgroundColor: languageColor}}
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
        </Zoom>
     );
}
 
export default ProjectCard;