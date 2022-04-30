import React, { createContext, useContext, useReducer } from 'react';

const createStateContext = (reducer, initialState) => {

    const StateContext = createContext([initialState, (p)=>null]);

    const StateProvider = ({children}) => {

        const stateContext = useReducer(reducer, initialState);

        return (
            <StateContext.Provider value={stateContext}>
                { children }
            </StateContext.Provider>
        )
    };

    const useStateValue = () => useContext(StateContext);

    return { useStateValue, StateProvider };
}

export default createStateContext;