import React from 'react';
import {Link} from "gatsby";
import * as styles from "./Navbar.module.scss";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
    return ( 
        <Navbar bg="dark" variant="dark" expand="lg" >
        <Navbar.Brand>
            {"<Sethuram />"}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link>
          <Link href='/'>Home</Link>
        </Nav.Link>
        <Nav.Link>
            <Link href="#education">Education</Link>
        </Nav.Link>
        <Nav.Link>
            <Link href="#skills">Skills</Link>  
        </Nav.Link>
        <Nav.Link>
            <Link href="#blogs">Blogs</Link>
        </Nav.Link>
        <Nav.Link>
            <Link href="#certifcations">Certifications</Link>
        </Nav.Link>
        <Nav.Link>
            <Link href="#projects">Projects</Link>
        </Nav.Link>
        <Nav.Link>
            <Link href="#about">About Me</Link>
        </Nav.Link>
        <Nav.Link>
            <Link href="#experience">Experience</Link>
        </Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
     );
}
 
export default NavBar;

/*      <ul className={styles.navbar_container}>
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
        </ul>*/