import React, { useReducer, useEffect } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { todoReducer, initialState } from '../utils/todoReducer';
import { loadTodosFromStorage } from '../utils/storage';
import { createTodo } from '../utils/helpers';
import { TODO_ACTIONS } from '../types/todo';

const UseReducerTodoApp: React.FC = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  // localStorage에서 todos 불러오기
  useEffect(() => {
    const savedTodos = loadTodosFromStorage();
    dispatch({ type: TODO_ACTIONS.SET_TODOS, payload: savedTodos });
  }, []);

  const addTodo = (text: string) => {
    const newTodo = createTodo(text);
    dispatch({ type: TODO_ACTIONS.ADD_TODO, payload: newTodo });
  };

  const toggleTodo = (id: string) => {
    dispatch({ type: TODO_ACTIONS.TOGGLE_TODO, payload: id });
  };

  const deleteTodo = (id: string) => {
    dispatch({ type: TODO_ACTIONS.DELETE_TODO, payload: id });
  };

  return (
    <div className="use-reducer-todo-app">
      <h2>useReducer Todo App</h2>
      {state.error && <div className="error">{state.error}</div>}
      <TodoForm onAdd={addTodo} />
      <TodoList todos={state.todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  );
};

export default UseReducerTodoApp;
