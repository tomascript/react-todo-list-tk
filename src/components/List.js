import React, { useContext } from 'react';
import { TodoContext } from '../GlobalState';
import Item from './Item';

function List() {
  const { todos } = useContext(TodoContext);

  const lis = todos.map(todo => <Item key={todo.id} text={todo.text} />);

  return <ul className="List">{lis}</ul>;
}

export default List;
