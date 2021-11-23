import React from 'react';

export default function Content (props) {
  const { children, className } = props
  return (
    <main className={`fantd-layout-content ${className ?? ''}`}>{children}</main>
  )
}