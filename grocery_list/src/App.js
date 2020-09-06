import React from 'react';
import './App.css';
import GroceryList from "./components/GroceryList";
import AddItem from "./components/AddItem";
import Header from "./components/layout/Header";
import { v4 as uuidv4 } from 'uuid';

class App extends React.Component {
  state = {
    groceryList: [
      {
        id:uuidv4(),
        item: "banana",
        completed: false
      },
      {
        id:uuidv4(),
        item: "kuskus",
        completed: false
      },
      {
        id:uuidv4(),
        item: "yam",
        completed: false
      },
      {
        id:uuidv4(),
        item: "french fries",
        completed: false
      },
      {
        id:uuidv4(),
        item: "lettuce",
        completed: false
      }

    ]
  }
  
  //Toggle Complete
  markComplete = (id) => {
    console.log(id);
    this.setState({groceryList: this.state.groceryList.map(obj => {
      if(obj.id === id) {
        obj.completed = !obj.completed
      }
      return obj
    })})
  }

  delItem = (id) => {
    console.log(id);
    this.setState({groceryList: [...this.state.groceryList.filter(obj => obj.id !== id)]});
  }
  
  addItem = (item) => {
    console.log(item);
    const newItem = {
      id:uuidv4(),
      item,
      completed: false
    }
    this.setState({groceryList: [...this.state.groceryList, newItem]})
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddItem addItem={this.addItem} />
          <GroceryList delItem={this.delItem} groceryList={this.state.groceryList} markComplete={this.markComplete} />
        </div>
      </div>
    );
  }
}

export default App;
