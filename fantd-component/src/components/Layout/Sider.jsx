import React from 'react';

export default function Sider (props) {
  const { children, className } = props
  return (
    <aside className={`fantd-layout-sider ${className ?? ''}`}>{children}</aside>
  )
}