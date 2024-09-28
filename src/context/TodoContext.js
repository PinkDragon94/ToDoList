import { createContext, useContext, useReducer } from 'react';
import { todoReducer } from '../reducers/todoReducer';

const TodoContext = createContext();

export const useTodos = () => useContext(TodoContext);

export const TodoProvider = ({ children }) => {
    const [todos, dispatch] = useReducer(todoReducer, []);

    return (
        <TodoContext.Provider value={{ todos, dispatch }}>
            {children}
        </TodoContext.Provider>
    );
};
