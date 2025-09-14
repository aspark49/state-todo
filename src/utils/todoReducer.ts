import type { TodoState, TodoAction } from '../types/todo';
import { TODO_ACTIONS } from '../types/todo';
import { addTodoToStorage, updateTodoInStorage, deleteTodoFromStorage } from './storage';

export const initialState: TodoState = {
  todos: [],
  loading: false,
  error: null
};

export const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
  switch (action.type) {
    case TODO_ACTIONS.ADD_TODO: {
      addTodoToStorage(action.payload);
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    }
    case TODO_ACTIONS.TOGGLE_TODO: {
      const updatedTodos = state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
      const updatedTodo = updatedTodos.find((todo) => todo.id === action.payload);
      if (updatedTodo) {
        updateTodoInStorage(updatedTodo);
      }
      return {
        ...state,
        todos: updatedTodos
      };
    }
    case TODO_ACTIONS.DELETE_TODO: {
      deleteTodoFromStorage(action.payload);
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    }
    case TODO_ACTIONS.SET_TODOS: {
      return {
        ...state,
        todos: action.payload,
      };
    }
    case TODO_ACTIONS.SET_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case TODO_ACTIONS.SET_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default: {  
      return state;
    }
  }
};