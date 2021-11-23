import React from 'react';

export default function Item (props) {
  const {
    children,
    id,
    selectedId,
    handleSelectMenu,
    onClick
  } = props;
  const clickHandle = () => {
    handleSelectMenu(id)
    onClick && onClick(id)
  }
  return (
    <li className={`fantd-menu-item ${selectedId === id ? 'fantd-menu-item-selected' : ''}`}
        onClick={clickHandle}
    >
      {children}
    </li>
  )
}