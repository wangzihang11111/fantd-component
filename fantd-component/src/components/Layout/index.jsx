import React from 'react';
import Header from './Header'
import Footer from './Footer'
import Content from './Content'
import Sider from './Sider'
import './index.scss'

export function Layout (props) {
  const {
    children,
    className,
    style
  } = props;
  let hasSider = false;
  React.Children.map(children, child => {
    if (child.type.name === 'Sider') {
      hasSider = true
    }
  })
  return (
    <section
        className={`fantd-layout ${hasSider ? 'fantd-layout-has-sider' : ''} ${className ?? ''}`}
        style={style ?? {}}
    >
      {children}
    </section>
  )
}
Layout.Header = Header
Layout.Footer = Footer
Layout.Content = Content
Layout.Sider = Sider