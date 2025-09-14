import React, { createContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { Todo } from '../types/todo';
import { loadTodosFromStorage, addTodoToStorage, updateTodoInStorage, deleteTodoFromStorage } from '../utils/storage';

// 전역 Todo 상태 타입
interface GlobalTodoState {
  todos: Todo[];
  isLoading: boolean;
  addTodo: (todo: Todo) => void;
  updateTodo: (todo: Todo) => void;
  deleteTodo: (id: string) => void;
  refreshTodos: () => void;
}

// Context 생성
const GlobalTodoContext = createContext<GlobalTodoState | undefined>(undefined);

// Provider Props 타입
interface GlobalTodoProviderProps {
  children: ReactNode;
}

// 전역 Todo Provider
export const GlobalTodoProvider: React.FC<GlobalTodoProviderProps> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // 앱 시작 시 한 번만 localStorage에서 데이터 로드
  useEffect(() => {
    const loadInitialTodos = () => {
      try {
        const loadedTodos = loadTodosFromStorage();
        setTodos(loadedTodos);
      } catch (error) {
        console.error('Failed to load initial todos:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadInitialTodos();
  }, []); // 의존성 배열이 비어있어서 앱 시작 시 한 번만 실행

  // Todo 추가
  const addTodo = (todo: Todo) => {
    addTodoToStorage(todo);
    setTodos((prev) => [...prev, todo]);
  };

  // Todo 업데이트
  const updateTodo = (updatedTodo: Todo) => {
    updateTodoInStorage(updatedTodo);
    setTodos((prev) => prev.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo)));
  };

  // Todo 삭제
  const deleteTodo = (id: string) => {
    deleteTodoFromStorage(id);
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // Todo 목록 새로고침 (필요시)
  const refreshTodos = () => {
    const loadedTodos = loadTodosFromStorage();
    setTodos(loadedTodos);
  };

  const contextValue: GlobalTodoState = {
    todos,
    isLoading,
    addTodo,
    updateTodo,
    deleteTodo,
    refreshTodos,
  };

  return <GlobalTodoContext.Provider value={contextValue}>{children}</GlobalTodoContext.Provider>;
};

export default GlobalTodoContext;
