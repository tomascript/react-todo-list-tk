import React from 'react';

function Item(props) {
  return (
    <li className="Item">
      <div className="item-container">{props.text}</div>
      <span className="icon-container">test</span>
    </li>
  );
}

export default Item;
