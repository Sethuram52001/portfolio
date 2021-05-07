import React from 'react';
import * as styles from "./BlogCard.module.scss";

const BlogCard = ({title, intro, published, read, link}) => {
    return ( 
        <>
        <a className={styles.blogCard} href={link}>
            <h3 className={styles.blogTitle}>
                {title}
            </h3>
            <p className={styles.blogSummary}>
                {intro} 
            </p>
            <p>
                {published} {read}
            </p>
            <div className={styles.linkToBlog}>
                <div className={styles.goArrow}>
                    {`->`}
                </div>
            </div>
        </a>
        </>
    );
}
 
export default BlogCard;