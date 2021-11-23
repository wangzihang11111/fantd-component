import React, { useState } from 'react';
import {
  DownOutlined,
  UpOutlined
} from '@ant-design/icons';
import Menu from './Menu'

export default function SubMenu (props) {
  const { title, children, selectedId, handleSelectMenu } = props;
  const [hiddenStatus, setHiddenStatus] = useState(false)
  const toggleMenu = () => {
    setHiddenStatus(!hiddenStatus)
  };
  return (
    <li className="fantd-menu-subMenu">
      <div className="fantd-menu-subMenu-title"
          onClick={toggleMenu}
      >
        <span>{title}</span>
        {hiddenStatus ? <DownOutlined /> : <UpOutlined />}
      </div>
      <Menu className="fantd-menu-subMenu-content"
          handleSelectMenu={handleSelectMenu}
          hidden={hiddenStatus}
          selectedId={selectedId}
      >
        {children}
      </Menu>
    </li>
  )
}