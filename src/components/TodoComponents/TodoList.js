// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  //using "props" to pass in items from state in APP.js ...I think?
  //then mapping over "props" to create a new array, right?
  console.log(props, "this is the props of state from App located in TodoList");
  console.log(
    props.state,
    "this is the new props.state array from App located in TodoList"
  );

  return props.state.map((thing, index) => (
    <Todo
      index={index}
      isCompleted={props.isCompleted}
      key={thing.id}
      item={thing}
    />
  ));
  //for each item in the array...do "thing"
  //where "thing" is the name of the callback function
  //I don't understand what "thing" is doing after the map. Why is it not just key={props.id}
};

export default TodoList;
