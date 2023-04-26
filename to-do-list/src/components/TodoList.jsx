import { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

    function TodoList() {
        const [todos, setTodos] = useState([]);

        const onAddTodo = todo => {
            if (!todo.text || /^\s*$/.test(todo.text)) {
                return;
            }
            const newTodos = [todo, ...todos];
            setTodos(newTodos);
        }

        const onCompleteTodo = id => {
            let updateTodos = todos.map(todo => {
                if (todo.id === id) {
                    todo.isComplete = !todo.isComplete;
                }
                return todo;
            });
            setTodos(updateTodos);
        }

        const onRemoveHandler = id => {
            const removeArr = [...todos].filter(todo => todo.id !== id);
            setTodos(removeArr);
        };

        const updateTodo = (todoId, newValue) => {
            if (!newValue.text || /^\s*$/.test(newValue.text)) {
                return;
            }
            setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
        };

        return (
            <div>
                <h1>What's we got today</h1>
                <TodoForm onSubmit={onAddTodo} />
                <Todo
                    todos={todos}
                    onCompleteTodo={onCompleteTodo}
                    onRemoveHandler={onRemoveHandler}
                    updateTodo={updateTodo} />
            </div>
        );
    }
export default TodoList