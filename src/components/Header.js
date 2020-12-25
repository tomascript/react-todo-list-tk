import React, { useContext } from 'react';
import { TodoContext } from '../GlobalState';

function Header() {
  const state = useContext(TodoContext);

  const allTodos = state.todos.length;

  const fulfillment =
    allTodos > 0 ? (
      <span>
        {state.done}/{allTodos}
      </span>
    ) : null;

  const clearAll = () => {
    state.setDone(0);
    state.setTodos([]);
    localStorage.removeItem('todos');
  };

  return (
    <>
      <i
        className="fas fa-trash-alt crimson"
        onClick={clearAll}
        id="delete-all"
      ></i>
      <header className="Header">Todo List {fulfillment}</header>
    </>
  );
}

export default Header;
