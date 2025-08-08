import React from 'react';
import type { Todo as TodoType } from '../types/todo';

interface TodoProps {
  todo: TodoType;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const Todo: React.FC<TodoProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <div className="todo-item">
      <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} className="todo-checkbox" />
      <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)} className="todo-delete-btn">
        삭제
      </button>
    </div>
  );
};

export default Todo;
