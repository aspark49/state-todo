export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

export interface TodoState {
  todos: Todo[];
  loading: boolean;
  error: string | null;
}

// 액션 타입 상수 정의
export const TODO_ACTIONS = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
  DELETE_TODO: 'DELETE_TODO',
  SET_TODOS: 'SET_TODOS',
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR'
} as const;

export type TodoAction = 
  | { type: typeof TODO_ACTIONS.ADD_TODO; payload: Todo }
  | { type: typeof TODO_ACTIONS.TOGGLE_TODO; payload: string }
  | { type: typeof TODO_ACTIONS.DELETE_TODO; payload: string }
  | { type: typeof TODO_ACTIONS.SET_TODOS; payload: Todo[] }
  | { type: typeof TODO_ACTIONS.SET_LOADING; payload: boolean }
  | { type: typeof TODO_ACTIONS.SET_ERROR; payload: string | null }; 