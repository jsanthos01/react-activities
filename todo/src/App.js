import React, { useState, useEffect } from 'react';
import './App.css';
import  Todo  from './components/Todo';
import { Button, FormControl, Input, InputLabel} from '@material-ui/core';
import db from './firebase'
import firebase from 'firebase';


function App() {
  //state is like short term memory for the app and its component based
  const [ todos, setTodos] = useState([]);
  const [ input, setInput] = useState("");

  //when the app loads, listen to database and fetch new todos when they are added/removed
  //hook that runs when the app loads
  useEffect(() => {
    //attaches a listener to the database only once.
    //everytime database changes, it gives you a snapshot
    db.collection('maintodos').orderBy('timestamp', "desc").onSnapshot(snapshot => {
      //array of objects stored in firebase
      console.log("firebase data: ", snapshot.docs.map(doc => doc.data()));
      setTodos(snapshot.docs.map(doc => ({ id: doc.id, value: doc.data().tasks })))
    });
  }, []);


  const addTodo = (event) => {
    event.preventDefault();
    db.collection('maintodos').add({
      tasks: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    //spread the todos array and add the new todo at the end of the array
    setTodos([...todos, input]);
    setInput('');
  }
  return (
    <div className="App">
      <h1>React + Firebase Todo App</h1>
      
      <form>
        <FormControl>
          <InputLabel> Write a Todo! </InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}  />
        </FormControl>
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
          Add Todo
        </Button>
      </form>
      
      <ul>
        {todos.map( itemObj => <Todo listObj={itemObj} />)}
      </ul>
    </div>
  );
}

export default App;
