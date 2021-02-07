import React, { createRef, useState, useEffect } from 'react';

import TodoForm from '../components/TodoForm';

function TodoFormContainer({ todos, addTodo }) {
  const [input, setInput] = useState('');
  const inputRef = createRef({});

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const randomNumber = Math.floor(Math.random() * 10000);
    addTodo(randomNumber, input);

    setInput('');
  };

  console.log('render form');
  return (
    <TodoForm input={input} setInput={setInput} inputRef={inputRef} handleSubmit={handleSubmit} />
  );
}

export default TodoFormContainer;
