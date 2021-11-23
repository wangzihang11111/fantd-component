import React from 'react';
import './index.scss'

export function Row(props) {
  const { children, gutter } = props;
  return (
    <div className="fantd-row">
      {React.Children.map(children, child => React.cloneElement(child, {
        style: gutter ? { padding: `0 ${gutter/2}px` } : {}
      }))}
    </div>
  )
}