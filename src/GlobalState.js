import React, { useState } from 'react';

export const TodoContext = React.createContext();

function GlobalState(props) {
  const [todos, setTodos] = useState([]);

  const state = {
    todos,
    setTodos,
    done: 0
  };

  return (
    <TodoContext.Provider value={state}>{props.children}</TodoContext.Provider>
  );
}

export default GlobalState;
