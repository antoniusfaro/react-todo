import React from 'react';
import { ImCheckmark, ImCross } from 'react-icons/im';

function Todos({ todos, handleToggle, handleDelete }) {
  return (
    <div>
      <ul className='todo-list__todos'>
      {todos.map((todo) => (
        <li
          className={todo.completed ? 'todo-list__todo--completed' : 'todo-list__todo'}
          key={todo.id}>
          {todo.text}
          <div>
            <ImCheckmark 
              className='todo-list__todo__action' 
              onClick={ev => handleToggle(ev, todo.id, todo.completed)} 
            />
            <ImCross 
              className='todo-list__todo__action' 
              onClick={ev => handleDelete(ev, todo.id)} 
            />
          </div>
        </li>
      ))}
    </ul>
    </div>
  )
}

export default Todos
