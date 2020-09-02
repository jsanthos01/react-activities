import React, { createContext, useReducer } from 'react'
import reducer from "./reducer"
// Initial State
const initialState = {
    transactions: []
}

//Create Context 
export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    function deleteTransaction(id) {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        })
    }
    function addTransaction(transaction) {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        })
    }
    return (
        <GlobalContext.Provider value={{state, deleteTransaction, addTransaction}} >
            {children}
        </GlobalContext.Provider>
    )
}
