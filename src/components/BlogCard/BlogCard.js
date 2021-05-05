import React from 'react';
import * as styles from "./BlogCard.module.scss";

const BlogCard = () => {
    return ( 
        <>
        <a className={styles.blogCard} href="https://sethuram52001.medium.com/data-structures-graph-d71f8530d38">
            <h3 className={styles.blogTitle}>
                Hi there blog
            </h3>
            <p className={styles.blogSummary}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
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