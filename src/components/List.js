import React, { useContext } from 'react';
import { TodoContext } from '../GlobalState';
import Item from './Item';

function List() {
  let { todos, setTodos, done, setDone } = useContext(TodoContext);

  const crossCheckItem = id => {
    const i = todos.findIndex(todo => todo.id === id);
    const updatedTodos = [...todos];
    updatedTodos[i].completed = !updatedTodos[i].completed;
    updatedTodos[i].completed ? setDone(done + 1) : setDone(done - 1);
    setTodos(updatedTodos);
  };

  const removeItem = id => {
    const updatedTodos = todos.filter(todo => {
      if (todo.completed && todo.id === id) setDone(done - 1);
      return todo.id !== id;
    });
    setTodos(updatedTodos);
  };

  const lis = todos.map(todo => (
    <Item
      key={todo.id}
      todo={todo}
      clicked={crossCheckItem}
      removed={removeItem}
    />
  ));

  return <ul className="List">{lis}</ul>;
}

export default List;
