import React from 'react';

const Todo = (props) => {
  return (
    <p onClick= {() => 
      {props.item.completed=true}}>{props.item.todo}</p>
  )
}

export default Todo;