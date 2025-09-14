import { useContext } from 'react';
import TodoContext from '../contexts/TodoContext';

// Context 타입 정의
interface TodoContextType {
  state: {
    todos: Array<{
      id: string;
      text: string;
      completed: boolean;
      createdAt: Date;
    }>;
    loading: boolean;
    error: string | null;
  };
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

// Custom Hook
export const useTodoContext = (): TodoContextType => {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error('useTodoContext must be used within a TodoProvider');
  }
  return context;
};
