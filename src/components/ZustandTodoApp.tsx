import React, { useEffect } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { useTodoStore } from '../stores/todoStore';

const ZustandTodoApp: React.FC = () => {
  const { todos, addTodo, toggleTodo, deleteTodo, loadTodos } = useTodoStore();

  // 컴포넌트 마운트 시 localStorage에서 데이터 불러오기
  useEffect(() => {
    loadTodos();
  }, [loadTodos]);

  return (
    <div className="todo-app-container zustand-todo-app">
      <h2 className="todo-app-title">Zustand Todo App</h2>
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  );
};

export default ZustandTodoApp;
