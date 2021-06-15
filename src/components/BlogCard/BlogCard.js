import React, { useContext } from 'react';
import * as styles from "./BlogCard.module.scss";
import {GlobalStateContext} from "../../context/GlobalContextProvider";
import Fade from "react-reveal/Fade";

const BlogCard = ({title, intro, published, read, link}) => {
    
    const isDark = useContext(GlobalStateContext);

    return ( 
        <Fade bottom>
            <a 
                className={isDark.theme !== "dark" ? styles.blogCard : `${styles.blogCard} ${styles.blogCardDark}`} 
                href={link}
            >
                <h3 className={styles.blogTitle}>
                    {title}
                </h3>
                <p className={styles.blogSummary}>
                    {intro} 
                </p>
                <p className={styles.blogFooter}>
                    {published} . {read}
                </p>
                <div className={styles.linkToBlog}>
                    <div className={styles.goArrow}>
                        {`→`}
                    </div>
                </div>
            </a>
        </Fade>
    );
}
 
export default BlogCard;