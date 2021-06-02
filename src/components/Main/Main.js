import React, { useContext } from 'react';
import { GlobalStateContext } from '../../context/GlobalContextProvider';

const Main = ({children}) => {

    const isDark = useContext(GlobalStateContext);

    return ( 
        <div className={isDark.theme === "dark" ? 'dark-theme' : 'light-theme' }>
            {children}
        </div>
     );
}
 
export default Main;