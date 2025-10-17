import React from 'react';
import { useGlobalTodos } from '../hooks/useGlobalTodos';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { createTodo } from '../utils/helpers';

const UseContextTodoApp: React.FC = () => {
  const { todos, addTodo, updateTodo, deleteTodo, isLoading } = useGlobalTodos();

  const handleAddTodo = (text: string) => {
    if (!text.trim()) return;
    const newTodo = createTodo(text);
    addTodo(newTodo);
  };

  const handleToggleTodo = (id: string) => {
    const todo = todos.find((t) => t.id === id);
    if (todo) {
      const updatedTodo = { ...todo, completed: !todo.completed };
      updateTodo(updatedTodo);
    }
  };

  const handleDeleteTodo = (id: string) => {
    deleteTodo(id);
  };

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  return (
    <div className="todo-app-container use-context-todo-app">
      <h2 className="todo-app-title">useContext Todo App</h2>
      <TodoForm onAdd={handleAddTodo} />
      <TodoList todos={todos} onToggle={handleToggleTodo} onDelete={handleDeleteTodo} />
    </div>
  );
};

export default UseContextTodoApp;
