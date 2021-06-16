import React, { createContext, useReducer } from 'react';

const initialState = {
    theme: 'light'
}

export const GlobalStateContext = createContext(initialState);
export const GlobalDispatchContext = createContext();

function reducer(state, action) {
    switch (action.type) {
        case 'TOGGLE_THEME':{
            return {
                ...state,
                theme: state.theme === 'light' ? 'dark' : 'light'
            } 
        }
    
        default:
            throw new Error('Bad action type');
    }
}

const GlobalContextProvider = ({children}) => {
    
    const [state, dispatch] = useReducer(reducer, initialState);

    return ( 
        <GlobalStateContext.Provider value={state}>
            <GlobalDispatchContext.Provider value={dispatch}>
                {children}
            </GlobalDispatchContext.Provider>
        </GlobalStateContext.Provider>
     );
}
 
export default GlobalContextProvider;