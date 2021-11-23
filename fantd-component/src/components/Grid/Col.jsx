import React from 'react';
import './index.scss'

export function Col(props) {
  const { span, children, style } = props;
  return (
    <div className="fantd-col"
        style={{width: `${span * 25/6}%`, ...style}}
    >{children}</div>
  )
}