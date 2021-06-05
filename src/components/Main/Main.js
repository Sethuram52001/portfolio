import React, { useContext } from 'react';
import "./Main.scss";

const Main = ({children}) => {
    return ( 
        <div className="main">
            {children}
        </div>
     );
}
 
export default Main;