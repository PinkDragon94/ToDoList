import { useState } from 'react';

const TodoItem = ({ todo, dispatch }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);

    const handleEdit = () => {
        dispatch({ type: 'EDIT_TODO', payload: { id: todo.id, text: editText } });
        setIsEditing(false);
    };

    return (
        <li>
            {isEditing ? (
                <>
                    <input value={editText} onChange={e => setEditText(e.target.value)} />
                    <button onClick={handleEdit}>Save</button>
                </>
            ) : (
                <>
                    <input type="checkbox" checked={todo.complete} onChange={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })} />
                    <span style={{ textDecoration: todo.complete ? 'line-through' : 'none' }}>{todo.text}</span>
                    <button disabled={!todo.complete} onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}>Delete</button>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                </>
            )}
        </li>
    );
};

export default TodoItem;
