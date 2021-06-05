/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
//import { useStaticQuery, graphql } from "gatsby"

//import Header from "./header"
import "./layout.css"
import { GlobalStateContext } from "../context/GlobalContextProvider"

const Layout = ({ children }) => {
  /*const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)*/

  const isDark = React.useContext(GlobalStateContext);

  return (
    <>
      <div
        style={{
          margin: `0 auto`
        }}
        className={isDark.theme === "dark" ? 'dark-theme' : 'light-theme'}
      >
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
