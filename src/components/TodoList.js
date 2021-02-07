import React from 'react';

import TodoTitle from './TodoTitle';
import TodoFilter from './TodoFilter';
import TodosContainer from '../containers/TodosContainer';
import TodoFormContainer from '../containers/TodoFormContainer';

function TodoList({ todos, addTodo, toggleTodo, deleteTodo, visibility, changeVisibility }) {
  return (
    <div className='todo-list'>
      <TodoTitle />
      <div className='todo-list__action'>
        <TodoFormContainer todos={todos} addTodo={addTodo} />
        <TodoFilter changeVisibility={changeVisibility} />
      </div>
      <TodosContainer todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} visibility={visibility} />
    </div>
  );
}

export default TodoList;
