import React, { useState } from 'react';

const TodoList = ({ todos, dispatch }) => {
    return (
        <ul>
            {todos.map((todo, index) => (
                <TodoItem key={index} todo={todo} index={index} dispatch={dispatch} />
            ))}
        </ul>
    );
};

const TodoItem = ({ todo, index, dispatch }) => {
    const [editText, setEditText] = useState(todo.text); // State for the edit text
    const [isEditing, setIsEditing] = useState(false); // State to track if we're in edit mode

    const handleSave = () => {
        dispatch({ type: 'SAVE_TODO', index, payload: editText }); // Dispatch save action
        setIsEditing(false); // Exit edit mode
    };

    return (
        <li className="todo-item">
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)} // Update the edit text
                    />
                    <button onClick={handleSave}>Save</button>
                </>
            ) : (
                <>
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => dispatch({ type: 'TOGGLE_COMPLETE', index })}
                    />
                    <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                    <button
                        onClick={() => dispatch({ type: 'DELETE_TODO', index })}
                        disabled={!todo.completed} 
                        style={{
                            backgroundColor: todo.completed ? 'initial' : 'lightgray', 
                            color: todo.completed ? 'initial' : 'darkgray', 
                            cursor: todo.completed ? 'pointer' : 'not-allowed', 
                        }}
                    >
                        Delete
                    </button>
                </>
            )}
        </li>
    );
};

export default TodoList;

