import React from 'react';

export default function Header (props) {
  const { children, className } = props
  return (
    <header className={`fantd-layout-header ${className ?? ''}`}>{children}</header>
  )
}