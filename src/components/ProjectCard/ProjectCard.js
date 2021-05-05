import React from 'react';
import * as styles from "./ProjectCard.module.scss";

const ProjectCard = ({title, intro, lang, stars, forks}) => {
    return ( 
        <div data-sal="slide-up" data-sal-delay="300" data-sal-easing="easy" className={styles.card}>
            <div>
                <img src="https://picsum.photos/350/300" />
            </div>
            <div className={styles.card_title}>{title}</div>
            <div className={styles.card_body}>
                {intro}
            </div>
            <div className={styles.card_footer}>
                <span>{lang}</span>
                <span>{stars}</span>
                <span>{forks}</span>
                <a href="https://github.com/Sethuram52001/Path-Finding-Visualizer">Link</a>
            </div>
        </div>
     );
}
 
export default ProjectCard;