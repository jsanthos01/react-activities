import React, {useState, useContext} from 'react'
import { GlobalContext } from "../context/GlobalState"
import Todo from './Todo';

function AddTodo() {
    const [text, setText] = useState("");
    const {addTodo} = useContext(GlobalContext)
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({id: Math.random(), text: text, completed: "False"});
        setText("")
    }
    return (
        <>
        <h3>Add a Todo</h3>
        <form onSubmit={handleSubmit} id="form">
            <input value={text} onChange={e=> setText(e.target.value)} type="text" id="text" placeholder="Enter text..." />
            <button className="btn">Add a Todo</button>
        </form>
        </>
    )
}

export default AddTodo
