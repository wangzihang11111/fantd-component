import React from 'react';

export default function (props) {
  const {
    mode = 'vertical',
    children,
    className,
    style,
    hidden,
    selectedId,
    handleSelectMenu
  } = props;
  const modeMap = {
    vertical: '',
    horizontal: 'fantd-menu-horizontal'
  }
      return (
        <ul
            className={`fantd-menu ${modeMap[mode]} ${className ?? ''} ${hidden ? 'fantd-menu-hidden' : ''}`}
            style={style ?? {}}
        >
          {React.Children.map(children, child => (
            React.cloneElement(child, { selectedId, handleSelectMenu })
          ))}
        </ul>
      )
}