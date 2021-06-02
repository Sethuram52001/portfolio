import React, { useContext, useState } from 'react';
import {GlobalStateContext, GlobalDispatchContext} from "../../context/GlobalContextProvider";
import "./ToggleButton.scss";

const ToggleButton = () => {

    const isDark = useContext(GlobalStateContext);
    const dispatch = useContext(GlobalDispatchContext);
    const [isChecked, setChecked] = useState(true);

    return ( 
        <label className="switch">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => {
              dispatch({type: "TOGGLE_THEME"})
              setChecked(!isChecked)
          }}
        />
        <span className="slider round"></span>
      </label>
     );
}
 
export default ToggleButton;