import React from 'react';
import Headroom from "react-headroom";
import "./Navbar.scss";

const NavBar = () => {

    return ( 
        <Headroom>
        <header className={"header"}>
          <a href="/" className="logo">
            <span className="grey-color"> &lt;</span>
            <span className="logo-name">{"Sethuram"}</span>
            <span className="grey-color">/&gt;</span>
          </a>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label
            className="menu-icon"
            htmlFor="menu-btn"
            style={{color: "white"}}
          >
            <span className={"navicon"}></span>
          </label>
          <ul className={"menu"}>
              <li>
                <a href="#skills">Skills</a>
              </li>
           
              <li>
                <a href="#experience">Work Experiences</a>
              </li>
           
              <li>
                <a href="#opensource">Open Source</a>
              </li>
           
              <li>
                <a href="#achievements">Achievements</a>
              </li>
        
              <li>
                <a href="#blogs">Blogs</a>
              </li>
        
              <li>
                <a href="#talks">Talks</a>
              </li>
       
            <li>
              <a href="#contact">Contact Me</a>
            </li>
      
          </ul>
        </header>
      </Headroom>
     );
}
 
export default NavBar;