import React from 'react';
import TodoForm from "./components/TodoComponents/TodoForm"
import TodoList from "./components/TodoComponents/TodoList"

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor() {
    //Create Constructor with "state" 
    super();
    //Initialize "state"
    this.state = {
      items:[
        {
        todo: "organize garage",
        id: 1463615,
        completed: false
        },
        {
          todo: "clean off work bench",
          id: 651684,
          completed: false
        },
        {
          todo: "mow",
          id: 351684,
          completed: false
        },
        {
          todo: "weed garden",
          id: 4987894,
          completed: false
        },
      ]
    };
  }

  //Create class methods to update "state"

  addTodo = newTodoText => {
    const newTodo = {
    todo: newTodoText,
    id: Date.now(),
    completed: false
    }

    this.setState ({
      items:[...this.state.items, newTodo]})
  };
  
  toggleCompleted = (event) => {
    this.setState({
      completed: !event.target.completed
    })
  } 

  clearTodo = () => {
    this.setState({
      items: this.state.items.filter(item => !item.completed)
    })
  }

  

  render() {
    return (
      <div>
        <h2>Welcome to your Todo List!</h2>
        <TodoForm addTodo={this.addTodo}/>
        <TodoList state={this.state.items}/>
        {console.log(this.state.items)}
      </div>
    );
  }
}

export default App;