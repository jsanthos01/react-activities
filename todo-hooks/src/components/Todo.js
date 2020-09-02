import React, { useContext } from 'react'
import { GlobalContext } from "../context/GlobalState"

function Todo({todo}) {
    const {deleteTodo} = useContext(GlobalContext)
    return (
        <li key={todo.id} className={todo.completed === "True" ? 'completed': "notCompleted"}>
            {todo.text} <span></span>
            <button onClick={() => deleteTodo(todo.id)} className="delete-btn">x</button>
        </li>
    )
}

export default Todo

