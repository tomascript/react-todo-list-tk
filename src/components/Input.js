import React, { useState, useContext } from 'react';
import { TodoContext } from '../GlobalState';

function Input() {
  const [todoText, setTodoText] = useState('');

  const { todos, setTodos } = useContext(TodoContext);

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
          autoComplete="off"
          autoFocus
          value={todoText}
          onChange={inputChangeHandler}
        />
      </form>
    </>
  );
}

export default React.memo(Input);
