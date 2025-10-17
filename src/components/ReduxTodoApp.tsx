import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../stores/redux/store';
import { addTodo, toggleTodo, deleteTodo } from '../stores/redux/todoSlice';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const ReduxTodoApp: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch<AppDispatch>();

  const handleAddTodo = (text: string) => {
    dispatch(addTodo(text));
  };

  const handleToggleTodo = (id: string) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id: string) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="todo-app-container redux-todo-app">
      <h2 className="todo-app-title">Redux Todo App</h2>
      <TodoForm onAdd={handleAddTodo} />
      <TodoList todos={todos} onToggle={handleToggleTodo} onDelete={handleDeleteTodo} />
    </div>
  );
};

export default ReduxTodoApp;
