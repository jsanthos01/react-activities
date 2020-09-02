import React, {createContext, useReducer} from 'react'
import reducer from "./reducer"

const initialState = {
    todos: [
        {
            id: 1,
            text: "Clean my room",
            completed: "False"
        },
        {
            id: 2,
            text: "Wash Dishes",
            completed: "False"
        },
        {
            id: 3,
            text: "Fold clothes",
            completed: "True"
        }
    ]
}
//Create Context 
export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    function deleteTodo(id){
        dispatch({type: "DELETE_TODO", payload: id})
    }
    function addTodo(todo){
        dispatch({type: "ADD_TODO", payload: todo})
    }
    return(
        <GlobalContext.Provider value={{state, deleteTodo, addTodo}}>
            {children}
        </GlobalContext.Provider>
    )
};
