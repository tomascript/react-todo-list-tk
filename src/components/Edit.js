import React, { useState, useEffect, useRef, useContext } from 'react';
import { TodoContext } from '../GlobalState';

function Edit(props) {
  const [val, setVal] = useState(props.todo.text);
  const { todos, setTodos } = useContext(TodoContext);

  const inputField = useRef();

  useEffect(() => {
    inputField.current.select();
  }, []);

  const confirmNewValue = e => {
    e.preventDefault();
    if (val !== '') {
      const updatedTodos = [...todos].map(todo => {
        if (todo.id === props.todo.id) todo.text = val;
        return todo;
      });
      setTodos(updatedTodos);
      props.setEdited(false);
    }
  };

  const cancelEdit = e => {
    if (e.keyCode === 27) {
      props.setEdited(false);
    }
  };

  return (
    <form onSubmit={confirmNewValue}>
      <input
        type="text"
        className="Edit"
        ref={inputField}
        autoFocus
        value={val}
        onChange={e => setVal(e.target.value)}
        onKeyDown={cancelEdit}
      />
    </form>
  );
}

export default Edit;
