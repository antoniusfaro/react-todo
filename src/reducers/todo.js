import { ADD_TODO, TOGGLE_TODO, CHANGE_VISIBILITY, DELETE_TODO } from '../types/todo';

const initialState = {
  todos: [],
  visibility: 'SHOW_ALL',
};

if (localStorage.getItem('todos')) {
  initialState.todos = JSON.parse(localStorage.getItem('todos'));
} else {
  localStorage.setItem('todos', JSON.stringify(initialState.todos));
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const { id, text } = action;
      
      if (!text || /^\s+/.test(text)) {
        return state;
      } else {
        return {
          ...state,
          todos: [...state.todos, { id, text, completed: false }],
        };
       }

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id !== action.id ? todo : { ...todo, completed: !todo.completed }
        ),
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      }

    case CHANGE_VISIBILITY:
      return {
        ...state,
        visibility: action.filter
      }
    default:
      return state;
  }
};
