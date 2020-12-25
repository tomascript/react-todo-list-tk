import React, { useState, useEffect } from 'react';

export const TodoContext = React.createContext();

function GlobalState(props) {
  const [todos, setTodos] = useState([]);
  const [done, setDone] = useState(0);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    if (savedTodos) setTodos(savedTodos);
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]);

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
