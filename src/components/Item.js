import React, { useState } from 'react';
import Icon from './Icon';
import Edit from './Edit';

function Item(props) {
  const [edited, setEdited] = useState(false);
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
        {edited ? (
          <Edit todo={props.todo} setEdited={setEdited} />
        ) : (
          props.todo.text
        )}
      </div>
      <span
        className={showedIcons ? 'icon-container show-icons' : 'icon-container'}
      >
        <Icon type="delete" clicked={props.removed} id={props.todo.id} />
        <Icon type="edit" clicked={() => setEdited(!edited)} />
      </span>
    </li>
  );
}

export default Item;
