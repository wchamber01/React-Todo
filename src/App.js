import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    //Create Constructor with "state"
    super();
    //Initialize "state"
    this.state = {
      items: [
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
        }
      ]
    };
  }

  //Create class methods to update "state"

  addTodo = newTodoText => {
    const newTodo = {
      todo: newTodoText,
      id: Date.now(),
      completed: false
    };

    this.setState({
      //updates state.items to include newly added item from addTodo function
      items: [...this.state.items, newTodo]
    });
  };

  isCompleted = index => {
    console.log(index);
    const arr = [...this.state.items];
    arr[index].completed = !arr[index].completed;

    this.setState({ items: arr });
    //sets completed value to opposite of current value
  };

  clearCompleted = event => {
    event.preventDefault();
    const completedFilter = this.state.items.filter(
      task => task.completed === false
    );
    console.log(completedFilter, "completedFilter");
    this.setState({
      items: completedFilter
    });
  };

  handleChanges = event => {
    // update state with each keystroke
    this.setState({ newItem: event.target.value }); //sets newItem value to = input value
  };

  // create class method to submit form and set state
  handleSubmit = event => {
    event.preventDefault(); //Prevents page from reloading on submit
    this.props.addTodo(this.state.newItem); //Assigns value of newItem to "property" of addTodo function by using "props"
    this.setState({
      newItem: "" //clears input value after submit
    });
  };

  render() {
    return (
      <div>
        <h2>Todo List</h2>
        <TodoForm //this is how we send "props" to other files!
          handleChanges={this.handleChanges}
          handleSubmit={this.handleSubmit}
          clearCompleted={this.clearCompleted}
          addTodo={this.addTodo}
        />
        <TodoList isCompleted={this.isCompleted} state={this.state.items} />
      </div>
    );
  }
}

export default App;
