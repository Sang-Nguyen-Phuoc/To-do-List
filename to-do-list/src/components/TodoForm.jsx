import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : ' ');
    
    const inputRef = React.useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });
    

    const onHandleChange = e => {
        setInput(e.target.value);
    };
    const onHandleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
    }; 

    return (
        <form onSubmit={onHandleSubmit} className='todo-form'>
          {props.edit ? (
            <>
              <input
                placeholder='Update your item'
                value={input}
                onChange={onHandleChange}
                name='text'
                ref={inputRef}
                className='todo-input edit'
              />
              <button onClick={onHandleSubmit} className='todo-button edit'>
                Update
              </button>
            </>
          ) : (
            <>
              <input
                placeholder='Add a todo'
                value={input}
                onChange={onHandleChange}
                name='text'
                className='todo-input'
                ref={inputRef}
              />
              <button onClick={onHandleSubmit} className='todo-button'>
                Add todo
              </button>
            </>
          )}
        </form>
      );
}

export default TodoForm