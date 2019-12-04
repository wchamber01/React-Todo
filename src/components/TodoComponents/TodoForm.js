import React from "react";

const ListForm = props => {
  console.log("rendering the form");
  //a lifecycle method - in charge of rendering JSX to the DOM
  return (
    <>
      <form onSubmit={props.handleSubmit}>
        {/*onSubmit calls the handleSubmit function */}
        {/* "form" is an uncontrolled component 😬 We want it to be controlled by state */}
        <input
          value={props.newItem}
          onChange={props.handleChanges}
          type="text"
          name="item"
        />
        <button>Add Item</button>
      </form>
      <button onClick={props.clearCompleted}>Clear Completed</button>
    </>
  );
};

export default ListForm;
