import type { Todo } from '../types/todo';

const STORAGE_KEY = 'todos';

export const loadTodosFromStorage = (): Todo[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const todos = JSON.parse(stored);
      return todos;
    }
  } catch (error) {
    console.error('Failed to load todos from localStorage:', error);
  }
  return [];
};

export const addTodoToStorage = (todo: Todo): void => {
  try {
    const existingTodos = loadTodosFromStorage();
    const updatedTodos = [...existingTodos, todo];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTodos));
  } catch (error) {
    console.error('Failed to add todo to localStorage:', error);
  }
};

export const updateTodoInStorage = (updatedTodo: Todo): void => {
  try {
    const existingTodos = loadTodosFromStorage();
    const updatedTodos = existingTodos.map(todo => 
      todo.id === updatedTodo.id ? updatedTodo : todo
    );
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTodos));
  } catch (error) {
    console.error('Failed to update todo in localStorage:', error);
  }
};

export const deleteTodoFromStorage = (todoId: string): void => {
  try {
    const existingTodos = loadTodosFromStorage();
    const updatedTodos = existingTodos.filter(todo => todo.id !== todoId);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTodos));
  } catch (error) {
    console.error('Failed to delete todo from localStorage:', error);
  }
};

export const clearTodosFromStorage = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Failed to clear todos from localStorage:', error);
  }
}; 