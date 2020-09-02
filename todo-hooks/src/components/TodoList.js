import React, {useContext} from 'react'
import { GlobalContext } from "../context/GlobalState"
import Todo from "./Todo"

function TodoList() {
    const {state} = useContext(GlobalContext);
    console.log(state)
    return (
        <>
            <h3>My List</h3>
            <ul id="list" className="list">
                {state.todos.map(todo => (<Todo key={todo.id} todo={todo} />))}
            </ul>
        </>
        
    )
}

export default TodoList
