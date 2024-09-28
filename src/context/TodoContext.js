import React, { useReducer, useContext } from 'react';

// Create a context
const TodoContext = React.createContext();

// Reducer function to handle state updates
const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [{ text: action.payload, completed: false, isEditing: false }, ...state];
    case 'TOGGLE_COMPLETE':
      return state.map((todo, idx) =>
        idx === action.index ? { ...todo, completed: !todo.completed } : todo
      );
    case 'DELETE_TODO':
      return state.filter((_, idx) => idx !== action.index);
    case 'EDIT_TODO':
      return state.map((todo, idx) =>
        idx === action.index ? { ...todo, isEditing: true } : todo
      );
    case 'SAVE_TODO':
      return state.map((todo, idx) =>
        idx === action.index ? { ...todo, text: action.payload, isEditing: false } : todo
      );
    default:
      return state;
  }
};

// Provider component to wrap the app
export const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, []); // Initialize state with useReducer
  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

// Custom hook to use the todo context
export const useTodos = () => {
  return useContext(TodoContext);
};

