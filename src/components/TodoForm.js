import { useState } from 'react';

const TodoForm = ({ dispatch }) => {
    const [todoText, setTodoText] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_TODO', payload: todoText });
        setTodoText('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={todoText} onChange={e => setTodoText(e.target.value)} placeholder="Add a new todo" />
            <button type="submit">Add Todo</button>
        </form>
    );
};

export default TodoForm;
