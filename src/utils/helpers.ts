import type { Todo } from '../types/todo';

export const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

export const createTodo = (text: string): Todo => {
  return {
    id: generateId(),
    text: text.trim(),
    completed: false,
    createdAt: new Date()
  };
};

export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date);
};

export const validateTodoText = (text: string): boolean => {
  return text.trim().length > 0 && text.trim().length <= 200;
}; 