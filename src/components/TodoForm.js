import React, { useState } from 'react';

const TodoForm = ({ dispatch }) => {
    const [newTodo, setNewTodo] = useState('');

    // Handler to add new todo
    const handleAddTodo = (e) => {
        e.preventDefault();
        if (newTodo.trim() === '') return; // Prevent adding empty todos
        dispatch({ type: 'ADD_TODO', payload: newTodo }); // Dispatch action to add todo
        setNewTodo(''); // Clear the input after adding
    };

    return (
        <form onSubmit={handleAddTodo}>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)} // Update state on input change
                placeholder="New to Do Item.."
                required
            />
            <button type="submit">Add To Do</button>
        </form>
    );
};

export default TodoForm;
