import React, { useReducer } from 'react';

const initialState =  {
    darkMode: false
}

const themeReducer = (state, action) => {
    switch(action.type) {
        case "LIGHTMODE":
            return {darkMode: false};
        case "DARKMODE":
            return {darkMode: true};
        default:
            return state;
    }
}

export function ThemeProvider(props) {
    const [state, dispatch]  = useReducer(themeReducer, initialState);
    return <ThemeContext.Provider value={{state, dispatch}}>{props.children}</ThemeContext.Provider>
}

