import React from 'react';
import { FaPlus } from 'react-icons/fa';

function TodoForm({ input, setInput, inputRef, handleSubmit }) {
  return (
    <form className='todo-list__action__add' onSubmit={handleSubmit}>
      <input
        className='todo-list__action__add__input'
        type='text'
        value={input}
        placeholder='Enter the todo...'
        onChange={(ev) => setInput(ev.target.value)}
        ref={inputRef}
      />
      <button type='submit' className='todo-list__action__add__container'>
        <FaPlus className='todo-list__action__add__button' />
      </button>
    </form>
  )
}

export default TodoForm
