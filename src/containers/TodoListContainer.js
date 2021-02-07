import { connect } from 'react-redux';

import TodoList from '../components/TodoList';
import { addTodo, toggleTodo, deleteTodo, changeVisibility } from '../actions/todo';

const mapStateToProps = state => {
  return {
    todos: state.todos,
    visibility: state.visibility
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (id, text) => dispatch(addTodo(id, text)),
    toggleTodo: id => dispatch(toggleTodo(id)),
    deleteTodo: id => dispatch(deleteTodo(id)),
    changeVisibility: filter => dispatch(changeVisibility(filter))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);