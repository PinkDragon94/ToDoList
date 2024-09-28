import { TodoProvider, useTodos } from './context/TodoContext';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import Header from './components/Header';

function App() {
    const { todos, dispatch } = useTodos();

    return (
        <div className="App">
            <Header />
            <TodoForm dispatch={dispatch} />
            <TodoList todos={todos} dispatch={dispatch} />
        </div>
    );
}

const WrappedApp = () => (
    <TodoProvider>
        <App />
    </TodoProvider>
);

export default WrappedApp;

