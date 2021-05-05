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
                {published}
            </p>
            <p>
                {read}
            </p>
            <div className={styles.linkToBlog}>
                <div className="goArrow">
                    {`->`}
                </div>
            </div>
        </a>
        </>
    );
}
 
export default BlogCard;