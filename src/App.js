import React from 'react';
import TodoForm from "./components/TodoComponents/TodoForm"
import TodoList from "./components/TodoComponents/TodoList"

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor() {
    super();
    this.state = {
      items:[
        {
        todo: "clean",
        id: Date.now(),
        completed: false,
        }
      ]
    };
  }

  // toggle = index => {
  //   this.setState({
  //     items[index].completed
  //   })
  // } 

  clearTodo = () => {
    this.setState({
      items: this.state.items.filter(item => !item.completed)
    })
  }

  addTodo = newTodoText => {
    const newTodo = {
    todo: newTodoText,
    id: Date.now(),
    completed: false
    }

    this.setState ({
      items:[...this.state.items, newTodo]})
  };

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