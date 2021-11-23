import React from 'react';
import './index.scss'

export function Space(props) {
  const {
    size = 'small',
    direction = 'horizontal',
    children
  } = props;
  const sizeMap = {
    small: 8,
    middle: 16,
    large: 24
  };
  const length = Object.prototype.toString.call(children) === '[object Array]' ? children.length : 1
  return (
    <div className={`fantd-space ${direction === 'vertical' ? 'fantd-space-vertical' : ''}`}>
      {React.Children.map(children, (child, index) =>
        index === length - 1 ? <div>{child}</div>
        : <div style={{[`margin${direction === 'vertical' ? 'Bottom' : 'Right'}`]: sizeMap[size] ?? size}}>{child}</div>
      )}
    </div>
  )
}