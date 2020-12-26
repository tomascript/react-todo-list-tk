import React from 'react';

function Icon(props) {
  return (
    <div>
      {props.type === 'delete' ? (
        <i
          className="fas fa-trash-alt crimson"
          onClick={() => props.clicked(props.id)}
        ></i>
      ) : (
        <i className="fas fa-pencil-alt orange" onClick={props.clicked}></i>
      )}
    </div>
  );
}

export default Icon;
