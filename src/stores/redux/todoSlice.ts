import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Todo } from '../../types/todo';
import {
  loadTodosFromStorage,
  addTodoToStorage,
  updateTodoInStorage,
  deleteTodoFromStorage
} from '../../utils/storage';

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: loadTodosFromStorage(),
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: Date.now().toString(),
        text: action.payload,
        completed: false,
        createdAt: new Date(),
      };
      state.todos.push(newTodo);
      addTodoToStorage(newTodo);
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find(t => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        updateTodoInStorage(todo);
      }
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter(t => t.id !== action.payload);
      deleteTodoFromStorage(action.payload);
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;

