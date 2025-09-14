import React, { createContext, useReducer, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { TodoState } from '../types/todo';
import { todoReducer, initialState } from '../utils/todoReducer';
import { loadTodosFromStorage } from '../utils/storage';
import { createTodo } from '../utils/helpers';

// Context 타입 정의
interface TodoContextType {
  state: TodoState;
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

// Context 생성
const TodoContext = createContext<TodoContextType | undefined>(undefined);

// Provider 컴포넌트 Props 타입
interface TodoProviderProps {
  children: ReactNode;
}

// Provider 컴포넌트
export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  // 초기 데이터 로드
  useEffect(() => {
    const loadInitialTodos = () => {
      try {
        const todos = loadTodosFromStorage();
        dispatch({ type: 'SET_TODOS', payload: todos });
      } catch {
        dispatch({ type: 'SET_ERROR', payload: '할 일 목록을 불러오는데 실패했습니다.' });
      }
    };

    loadInitialTodos();
  }, []);

  // 액션 함수들
  const addTodo = (text: string) => {
    if (!text.trim()) return;

    const newTodo = createTodo(text);
    dispatch({ type: 'ADD_TODO', payload: newTodo });
  };

  const toggleTodo = (id: string) => {
    dispatch({ type: 'TOGGLE_TODO', payload: id });
  };

  const deleteTodo = (id: string) => {
    dispatch({ type: 'DELETE_TODO', payload: id });
  };

  const contextValue: TodoContextType = {
    state,
    addTodo,
    toggleTodo,
    deleteTodo,
  };

  return <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>;
};

export default TodoContext;
