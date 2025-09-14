import { create } from 'zustand';
import type { Todo } from '../types/todo';
import { 
  loadTodosFromStorage, 
  addTodoToStorage, 
  updateTodoInStorage, 
  deleteTodoFromStorage 
} from '../utils/storage';

interface TodoStore {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  clearTodos: () => void;
  loadTodos: () => void;
}

export const useTodoStore = create<TodoStore>((set) => ({
  todos: loadTodosFromStorage(),
  
  loadTodos: () => {
    const savedTodos = loadTodosFromStorage();
    set({ todos: savedTodos });
  },
  
  addTodo: (text: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      completed: false,
      createdAt: new Date(),
    };
    
    // localStorage에 저장
    addTodoToStorage(newTodo);
    
    set((state) => ({
      todos: [...state.todos, newTodo],
    }));
  },
  
  toggleTodo: (id: string) => {
    set((state) => {
      const updatedTodos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      
      // localStorage에 업데이트된 todo 저장
      const updatedTodo = updatedTodos.find((todo) => todo.id === id);
      if (updatedTodo) {
        updateTodoInStorage(updatedTodo);
      }
      
      return { todos: updatedTodos };
    });
  },
  
  deleteTodo: (id: string) => {
    // localStorage에서 삭제
    deleteTodoFromStorage(id);
    
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  },
  
  clearTodos: () => {
    set({ todos: [] });
  },
}));
