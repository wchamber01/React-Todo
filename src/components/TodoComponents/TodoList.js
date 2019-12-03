// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo"

const TodoList = props => {
  return(
    props.state.map(item => (
        <Todo onClick= {() => 
          {item.completed=true}} 
          key={item.id} item={item}/>
      
      )
    )
  )
}

export default TodoList;