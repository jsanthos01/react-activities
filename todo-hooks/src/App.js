import React from 'react';
import './App.css';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import {GlobalProvider} from "./context/GlobalState"


function App() {
  
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <AddTodo />
        <TodoList />
      </div>
    </GlobalProvider>
  );
}

export default App;
