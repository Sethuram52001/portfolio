import React from 'react';
import Headroom from "react-headroom";
import * as styles from "./Navbar.module.scss";

const Navbar = () => {
    return ( 
        <Headroom>
            <header className={styles.header}>
                <a>
                <span>{"<Sethuram/>"}</span>
                </a>
                <ul className={styles}>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#blogs">Blogs</a>
                    </li>
                    <li>
                        <a href="#certifications">Certifications</a>
                    </li>
                    <li>
                        <a href="#education">Education</a>
                    </li>
                    <li>
                        <a href="#experience">Experience</a>
                    </li>
                    <li>
                        <a href="#footer">Contact Me</a>
                    </li>
                </ul>
            </header>
        </Headroom>
     );
}
 
export default Navbar;


/*
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
 
*/