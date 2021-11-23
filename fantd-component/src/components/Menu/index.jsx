import React, { useState } from 'react';
import Item from './Item'
import SubMenu from './SubMenu'
import BasicMenu from './Menu'
import './index.scss'

export function Menu (props) {
  const { children, defaultSelectedId } = props;
  const [selectedId, setSelectedId] = useState(defaultSelectedId)
  const handleSelectMenu = (id) => {
    setSelectedId(id)
  }
  return (
    <BasicMenu
        {...props}
        handleSelectMenu={handleSelectMenu}
        selectedId={selectedId}
    >{children}</BasicMenu>
  )
}
Menu.Item = Item
Menu.SubMenu = SubMenu