import React from 'react';
import * as styles from "./ProjectCard.module.scss";

const ProjectCard = () => {
    return ( 
        <div data-sal="slide-up" data-sal-delay="300" data-sal-easing="easy" className={styles.card}>
            <div>
                <img src="https://picsum.photos/350/300" />
            </div>
            <div className={styles.card_title}>Title</div>
            <div className={styles.card_body}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum."
            </div>
            <div className={styles.card_footer}>
                <a href="https://github.com/Sethuram52001/Path-Finding-Visualizer">Link</a>
            </div>
        </div>
     );
}
 
export default ProjectCard;