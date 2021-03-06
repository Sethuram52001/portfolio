import React, { useCallback, useEffect, useState } from 'react';
import * as styles from './Blogs.module.scss';
import BlogCard from '../BlogCard/BlogCard';
import db from "../../config/firebase.config";
import { Button } from 'react-bootstrap';
import {calculateLimit} from "../../utils/calculateLimit.blogs";

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    const fetchBlogs = async() => {
        const response = db.collection('blogs').orderBy("chrono_order", 'desc');
        const data = await response.get();
        data.docs.forEach(item => {
            setBlogs(blogs => [...blogs, item.data()])
        })
    }

    useEffect(() => {
        fetchBlogs();
    }, []);

    const ShowMore = "Show More";
    const ShowLess = "Show Less";
    
    const [limit, setLimit] = useState(calculateLimit());
    const [showStatus, setShowStatus] = useState(ShowMore);

    const handleShow = useCallback(() => {
        if(showStatus === ShowMore) {
            setLimit(10);
            setShowStatus(ShowLess);
        }
        else {
            setLimit(calculateLimit());
            setShowStatus(ShowMore);
        }
    }, [showStatus]);

    return ( 
        <div id="blogs">
            <div>
                <h2 className={styles.blogHeaderTitle}>Blogs</h2>
                <p className={styles.blogHeaderSubtitle}>
                    I like writing blogs that way, I can assess my own understanding on the concept and help others learning about the same.
                </p>
            </div>
            <div className={styles.blogContainer}>
                {blogs && blogs.slice(0, limit).map((blog, index) => (
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
            <div className={styles.showMore}>
                <Button
                    onClick={handleShow}
                >
                    {showStatus}
                </Button>
            </div>
        </div>
     );
}
 
export default Blogs;