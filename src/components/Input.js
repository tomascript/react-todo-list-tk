import React, { useState, useContext, useRef, useEffect } from 'react';
import { TodoContext } from '../GlobalState';

function Input() {
  const [todoText, setTodoText] = useState('');
  const { todos, setTodos } = useContext(TodoContext);
  const inputField = useRef();

  useEffect(() => {
    inputField.current.focus();
  }, [todos]);

  const inputChangeHandler = e => {
    e.preventDefault();
    setTodoText(e.target.value);
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    const newTodo = {
      text: todoText,
      id: Math.random(),
      completed: false
    };
    setTodoText('');
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <form className="Inputform" onSubmit={onSubmitHandler}>
        <input
          type="text"
          className="Input"
          placeholder="Type to-do item here..."
          ref={inputField}
          autoComplete="off"
          autoFocus
          spellCheck={false}
          value={todoText}
          onChange={inputChangeHandler}
        />
      </form>
    </>
  );
}

export default Input;
