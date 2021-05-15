import React from 'react';
import {Link} from "gatsby";
import * as styles from "./Navbar.module.scss";

const Navbar = () => {
    return ( 
        <ul className={styles.navbar_container}>
            <p>{"<Sethuram/>"}</p>
            <li className={styles.navbar_links}>
                <Link href="#education">Education</Link>
            </li>
            <li className={styles.navbar_links}>
                <Link href="#skills">Skills</Link>
            </li>
            <li className={styles.navbar_links}>
                <Link href="#blogs">Blogs</Link>
            </li>
            <li className={styles.navbar_links}>
                <Link href="#certifcations">Certifications</Link>
            </li>
            <li className={styles.navbar_links}> 
                <Link href="#projects">Projects</Link>
            </li>
            <li className={styles.navbar_links}>
                <Link href="#about">About Me</Link>
            </li>
            <li className={styles.navbar_links}>
                <Link href="#experience">Experience</Link>
            </li>
        </ul>
     );
}
 
export default Navbar;