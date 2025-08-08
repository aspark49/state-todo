import React, { useState, useEffect } from 'react';
import type { Todo as TodoType } from '../types/todo';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { loadTodosFromStorage, addTodoToStorage, updateTodoInStorage, deleteTodoFromStorage } from '../utils/storage';
import { createTodo } from '../utils/helpers';

const UseStateTodoApp: React.FC = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  // localStorage에서 todos 불러오기
  useEffect(() => {
    const savedTodos = loadTodosFromStorage();
    setTodos(savedTodos);
  }, []);

  const addTodo = (text: string) => {
    const newTodo = createTodo(text);
    addTodoToStorage(newTodo);
    setTodos(loadTodosFromStorage());
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) => {
      const updatedTodos = prev.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo));
      const updatedTodo = updatedTodos.find((todo) => todo.id === id);
      if (updatedTodo) {
        updateTodoInStorage(updatedTodo);
      }
      return loadTodosFromStorage();
    });
  };

  const deleteTodo = (id: string) => {
    deleteTodoFromStorage(id);
    setTodos(loadTodosFromStorage());
  };

  return (
    <div className="use-state-todo-app">
      <h2>useState Todo App</h2>
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  );
};

export default UseStateTodoApp;
