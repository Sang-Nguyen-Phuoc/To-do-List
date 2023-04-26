import { useState } from 'react'
import TodoForm from './TodoForm'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'



const Todo = ({ todos, onCompleteTodo, onRemoveHandler, updateTodo }) => {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const onSubmitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    };

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={onSubmitUpdate} />;
    }


    return todos.map((todo, index) => (
        <div
            className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
            key={index}
        >
            <div key={todo.id} onClick={() => onCompleteTodo(todo.id)}>
                {todo.text}
            </div>
            <div className='icons'>
                <RiCloseCircleLine
                    onClick={() => onRemoveHandler(todo.id)}
                    className='delete-icon'
                />
                <TiEdit
                    onClick={() => setEdit({ id: todo.id, value: todo.text })}
                    className='edit-icon'
                />
            </div>
        </div>
    ));
};

export default Todo