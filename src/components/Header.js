import React from 'react';

function Header(props) {
  const fulfillment = props.all ? (
    <span>
      ({props.done}/{props.all})
    </span>
  ) : null;
  return <header className="Header">Todo List {fulfillment}</header>;
}

export default Header;
