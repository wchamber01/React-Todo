import React from "react";

const Todo = props => {
  console.log(
    props.item.completed,
    "these are the individual Todos after map located in Todo.js"
  );

  return (
    //printing each individual item from the array to the screen
    <p
      className="todoItem"
      style={props.item.completed ? { textDecoration: "line-through" } : null}
      onClick={() => props.isCompleted(props.index)}
    >
      {props.item.todo}
    </p>
  );
};

export default Todo;
