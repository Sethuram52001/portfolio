import React, { useContext } from 'react';
import { GlobalStateContext } from '../../context/GlobalContextProvider';
import {Helmet} from "react-helmet";
import {useStaticQuery, graphql} from "gatsby";

const Main = ({children}) => {

    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    const isDark = useContext(GlobalStateContext);

    return ( 
        <div className={isDark.theme === "dark" ? 'dark-theme' : 'light-theme'}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{data.title}</title>
            </Helmet>
            {children}
        </div>
     );
}
 
export default Main;