import { TodoProvider, useTodos } from './context/TodoContext';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import Header from './components/Header';
import './App.css'; // Add styles

function App() {
    const { todos, dispatch } = useTodos(); // Retrieve todos and dispatch from the context

    return (
        <div className="app-container">
            <Header />
            <TodoForm dispatch={dispatch} /> {/* Form to add new todos */}
            <TodoList todos={todos} dispatch={dispatch} /> {/* List of todos */}
        </div>
    );
}

const WrappedApp = () => (
    <TodoProvider>
        <App />
    </TodoProvider>
);

export default WrappedApp;

