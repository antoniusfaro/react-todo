import React, { useEffect } from 'react';

import Todos from '../components/Todos';

function TodosContainer({ todos, toggleTodo, deleteTodo, visibility }) {
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const filteredTodos = 
    visibility === 'SHOW_COMPLETED_ONLY' 
      ? todos.filter(todo => todo.completed)
      : visibility === 'SHOW_NOT_COMPLETED_ONLY'
        ? todos.filter(todo => !todo.completed)
        : todos

  const handleToggle = (ev, id, completed) => {
    const todo = ev.target.closest('li');
    console.log(todo)
    if (completed) {
      todo.classList.add('todo-list__todo--expand');
    } else {
      todo.classList.add('todo-list__todo--shrink');
    }
    
    setTimeout(() => {
      toggleTodo(id);
      todo.classList.remove('todo-list__todo--expands');
      todo.classList.remove('todo-list__todo--shrink');
    }, 125);
  }
  
  const handleDelete = (ev, id) => {
    const todo = ev.target.closest('li');
    todo.classList.add('todo-list__todo--exit');

    setTimeout(() => {
      todo.classList.remove('todo-list__todo--exit');
      deleteTodo(id);
    }, 125);
  }

  return (
    <Todos todos={filteredTodos} handleToggle={handleToggle} handleDelete={handleDelete}/>
  );
}

export default TodosContainer;
