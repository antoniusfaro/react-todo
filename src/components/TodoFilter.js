import React from 'react';

function TodoFilter({ changeVisibility }) {
  return (
    <select className='todo-list__action__filter' onChange={(ev) => changeVisibility(ev.target.value)}>
      <option value='SHOW_ALL'>All</option>
      <option value='SHOW_COMPLETED_ONLY'>Completed</option>
      <option value='SHOW_NOT_COMPLETED_ONLY'>Not Completed</option>
    </select>
  );
}

export default TodoFilter;
