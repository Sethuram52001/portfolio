import React from 'react';
import * as styles from './Blogs.module.scss';
import BlogCard from '../BlogCard/BlogCard';

const Blogs = () => {
    const arr = [1,2];
    return ( 
        <div id="blogs">
            <div className={styles.blogHeader}>
                <h1 className={styles.blogHeaderTitle}>Blogs</h1>
                <p className={styles.blogHeaderSubtitle}>
                    I like writing blogs that way, I can assess my own understanding on the concept and help others learning about the same.
                </p>
                <div className={styles.blogContainer}>
                    {arr.map((val, index) => (
                        <BlogCard />
                    ))}
                </div>
            </div>
        </div>
     );
}
 
export default Blogs;