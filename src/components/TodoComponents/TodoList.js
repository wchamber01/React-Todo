// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo"

const TodoList = props => {//use "props" to pass in items from state
  console.log(props, "these are my props")
  return(
    props.state.map(item => (
        <Todo key={item.id} item={item}/>
      )
    )
  )
}

export default TodoList;