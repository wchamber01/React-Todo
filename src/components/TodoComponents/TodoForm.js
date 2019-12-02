import React from "react";

class ListForm extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      newItem: ""
    };
  }

  handleChanges = event => {
    // update state with each keystroke
    this.setState({ newItem: event.target.value });
  };

  // class property to submit form
  handleSubmit = event => {
    event.preventDefault();
    this.props.addItem(this.state.newItem);
    this.setState({
      newItem:''
    });
  };

  render() {
    //a lifecycle method - in charge of rendering JSX to the DOM
    console.log("rendering form");
    return (
      <form onSubmit={this.handleSubmit}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input
          value={this.state.newItem}
          onChange={this.handleChanges}
          type="text"
          name="item"
        />
        <button>Add Item</button>
        <button>Clear List</button>
        
      </form>
    );
  }
}

export default ListForm;