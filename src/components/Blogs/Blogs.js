import React from 'react';
import * as styles from './Blogs.module.scss';
import BlogCard from '../BlogCard/BlogCard';
import {blogs} from "./Blogs.data";

const Blogs = () => {

    return ( 
        <div id="blogs">
            <div className={styles.blogHeader}>
                <h1 className={styles.blogHeaderTitle}>Blogs</h1>
                <p className={styles.blogHeaderSubtitle}>
                    I like writing blogs that way, I can assess my own understanding on the concept and help others learning about the same.
                </p>
            </div>
            <div className={styles.blogContainer}>
                {blogs.map((blog, index) => (
                    <BlogCard
                        key={index} 
                        title={blog.title} 
                        intro={blog.intro} 
                        published={blog.published} 
                        read={blog.read} 
                        link={blog.link} 
                    />
                ))}
            </div>
        </div>
     );
}
 
export default Blogs;