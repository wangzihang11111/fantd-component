import React from 'react';
import './index.scss'

export function Divider(props) {
  const {
    className,
    dashed = false,
    style,
    type = 'horizontal'
  } = props;
  const typeStyleMap = {
    horizontal: 'fantd-divider-horizontal',
    vertical: 'fantd-divider-vertical'
  }
  return (
    <div
        className={
          `
            fantd-divider
            ${typeStyleMap[type] ?? ''}
            ${className ?? ''}
            ${dashed ? 'fantd-divider-dashed' : ''}
          `
        }
        style={style ?? {}}
    ></div>
  )
}