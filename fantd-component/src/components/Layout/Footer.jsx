import React from 'react';

export default function Footer (props) {
  const { children, className } = props
  return (
    <footer className={`fantd-layout-footer ${className ?? ''}`}>{children}</footer>
  )
}