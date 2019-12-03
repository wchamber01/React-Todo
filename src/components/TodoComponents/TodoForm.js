import React from "react";

class ListForm extends React.Component {
  // Constructor with state
  constructor() {
    super();
    //initialize state of "newItem" to ""
    this.state = {
      newItem: ""
    };
  }

  handleChanges = event => {
    // update state with each keystroke
    this.setState({ newItem: event.target.value });//sets newItem value to = input value
  };

  // create class method to submit form and set state
  handleSubmit = event => {
    event.preventDefault(); //Prevents page from reloading on submit
    this.props.addTodo(this.state.newItem);//Assigns value of newItem to "property" of addTodo function by using "props"
    this.setState({
      newItem:""//clears input value after submit
    });
  };

  render() {
    //a lifecycle method - in charge of rendering JSX to the DOM
    console.log("rendering form");
    return (
      <form onSubmit={this.handleSubmit}> {/*onSubmit calls the handleSubmit function */}
        {/* "form" is an uncontrolled component 😬 We want it to be controlled by state */}
        <input
          value={this.state.newItem}
          onChange={this.handleChanges}
          type="text"
          name="item"
        />
        <button>Add Item</button>
        {/*<button>Clear List</button>*/}

      </form>
    );
  }
}

export default ListForm;