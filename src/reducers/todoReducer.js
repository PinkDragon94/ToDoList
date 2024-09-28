export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [{ id: Date.now(), text: action.payload, complete: false }, ...state];
        case 'DELETE_TODO':
            return state.filter(todo => todo.id !== action.payload);
        case 'TOGGLE_TODO':
            return state.map(todo => (todo.id === action.payload ? { ...todo, complete: !todo.complete } : todo));
        case 'EDIT_TODO':
            return state.map(todo => (todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo));
        default:
            return state;
    }
};
