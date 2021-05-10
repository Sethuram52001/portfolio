import React from 'react';
import {Link} from "gatsby";

const Navbar = () => {
    return ( 
        <ul>
            <li>
                <Link href="#education">Education</Link>
            </li>
            <li>
                <Link to="/#education">edu</Link>
            </li>
            <li>
                <Link href="#skills">Skills</Link>
            </li>
            <li>
                <Link href="#blogs">Blogs</Link>
            </li>
            <li>
                <Link href="#certifcations">Certifications</Link>
            </li>
            <li>
                <Link href="#projects">Projects</Link>
            </li>
            <li>
                <Link href="#about">About Me</Link>
            </li>
            <li>
                <Link href="#experience">Experience</Link>
            </li>
        </ul>
     );
}
 
export default Navbar;