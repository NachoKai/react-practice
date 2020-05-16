import React, { useState } from 'react';

const ToDoItem = props => {
  const [checked, setChecked] = useState(false);

  function handleCheck() {
    setChecked(prevValue => {
      return !prevValue;
    });
  }

  return (
    <li
      onClick={handleCheck}
      className='todo-li'
      style={{ textDecoration: checked ? 'line-through' : 'none' }}
    >
      {props.item}
    </li>
  );
};

export default ToDoItem;
