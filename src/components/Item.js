import React, { useState } from 'react';
import Icon from './Icon';

function Item(props) {
  const [showedIcons, setShowedIcons] = useState(false);
  const classes = props.todo.completed
    ? 'item-container cross-checked'
    : 'item-container';

  return (
    <li
      className="Item"
      onMouseOver={() => setShowedIcons(true)}
      onMouseLeave={() => setShowedIcons(false)}
    >
      <div className={classes} onClick={() => props.clicked(props.todo.id)}>
        {props.todo.text}
      </div>
      <span
        className={showedIcons ? 'icon-container show-icons' : 'icon-container'}
      >
        <Icon type="delete" clicked={props.removed} id={props.todo.id} />
        <Icon type="edit" clicked={() => {}} />
      </span>
    </li>
  );
}

export default Item;
