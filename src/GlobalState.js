import React, { useState, useEffect } from 'react';

export const TodoContext = React.createContext();

function GlobalState(props) {
  const [todos, setTodos] = useState([]);
  const [done, setDone] = useState(0);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    const done = JSON.parse(localStorage.getItem('done'));
    if (savedTodos) {
      setTodos(savedTodos);
      setDone(+done);
    }
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem('todos', JSON.stringify(todos));
      localStorage.setItem('done', JSON.stringify(done));
    }
  }, [todos, done]);

  const state = {
    todos,
    setTodos,
    done,
    setDone
  };

  return (
    <TodoContext.Provider value={state}>{props.children}</TodoContext.Provider>
  );
}

export default GlobalState;
