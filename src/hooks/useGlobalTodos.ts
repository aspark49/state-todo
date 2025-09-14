import { useContext } from 'react';
import GlobalTodoContext from '../contexts/GlobalTodoContext';
import type { Todo } from '../types/todo';

// 전역 Todo 상태 타입
interface GlobalTodoState {
  todos: Todo[];
  isLoading: boolean;
  addTodo: (todo: Todo) => void;
  updateTodo: (todo: Todo) => void;
  deleteTodo: (id: string) => void;
  refreshTodos: () => void;
}

// Custom Hook
export const useGlobalTodos = (): GlobalTodoState => {
  const context = useContext(GlobalTodoContext);
  if (context === undefined) {
    throw new Error('useGlobalTodos must be used within a GlobalTodoProvider');
  }
  return context;
};
