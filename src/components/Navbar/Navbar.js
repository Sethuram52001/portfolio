import React, { useContext } from 'react';
import Headroom from "react-headroom";
import * as styles from  "./Navbar.module.scss";
import {GlobalDispatchContext, GlobalStateContext} from "../../context/GlobalContextProvider";

const NavBar = () => {

    const dispatch = useContext(GlobalDispatchContext);
    const state = useContext(GlobalStateContext);
    return ( 
        <Headroom>
        <header className={styles.header}>
          <a href="/" className={styles.logo}>
            <span className={styles.greyColor}> &lt;</span>
            <span className={styles.logoName}>{"Sethuram"}</span>
            <span className={styles.greyColor}>/&gt;</span>
          </a>
          <input className={styles.menuBtn} type="checkbox" id="menu-btn" />
          <label
            className={styles.menuIcon}
            htmlFor="menu-btn"
            style={{color: "white"}}
          >
            <span className={styles.navicon}></span>
          </label>
          <ul className={styles.menu}>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#experience">Work Experiences</a>
              </li>
              <li>
                <a href="#blogs">Blogs</a>
              </li>
              <li>
                <a href="#contact">Contact Me</a>
              </li>
          </ul>
        </header>
        {state.theme}
        <button onClick={() => {dispatch({type: "TOGGLE_THEME"})}} type="button" >Toggle</button>
      </Headroom>
     );
}
 
export default NavBar;