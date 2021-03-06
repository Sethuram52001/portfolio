import React, { useContext } from 'react';
import Headroom from "react-headroom";
import * as styles from  "./Navbar.module.scss";
import {GlobalStateContext} from "../../context/GlobalContextProvider";
import ToggleButton from '../ToggleButton/ToggleButton';

const NavBar = () => {

    const isDark = useContext(GlobalStateContext);
    return ( 
        <Headroom>
        <header className={isDark.theme !== "dark" ? styles.header : `${styles.header} ${styles.headerDark}`}>
          <a href="/" className={styles.logo}>
            <span className={styles.greyColor}> &lt;</span>
            <span className={isDark.theme !== "dark" ? styles.logoName : `${styles.logoName} ${styles.logoNameDark}`}>{"Sethuram"}</span>
            <span className={styles.greyColor}>/&gt;</span>
          </a>
          <input className={isDark.theme !== "dark" ? styles.menuBtn : `${styles.menuBtn} ${styles.menuBtnDark}`} type="checkbox" id="menu-btn" />
          <label
            className={isDark.theme !== "dark" ? styles.menuIcon : `${styles.menuIcon} ${styles.menuIconDark}`}
            htmlFor="menu-btn"
            style={{color: "white"}}
          >
            <span className={isDark.theme !== "dark" ? styles.navicon : `${styles.navicon} ${styles.naviconDark}`}></span>
          </label>
          <ul className={styles.menu}>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">My Projects</a>
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
                <a href="#experience">Work Experiences</a>
              </li>
              <li>
                <a href="#contact">Contact Me</a>
              </li>
              <li>
                <a><ToggleButton /></a>
              </li>
          </ul>
        </header>
      </Headroom>
     );
}
 
export default NavBar;