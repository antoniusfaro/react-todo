import { ADD_TODO, TOGGLE_TODO, CHANGE_VISIBILITY, DELETE_TODO } from '../types/todo';

export const addTodo = (id, text) => {
  return {
    type: ADD_TODO,
    id,
    text
  };
};

export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    id
  };
};

export const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    id
  }
}

export const changeVisibility = filter => {
  return {
    type: CHANGE_VISIBILITY,
    filter
  };
};
