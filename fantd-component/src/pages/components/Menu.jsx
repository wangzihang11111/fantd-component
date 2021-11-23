import React  from 'react';
import {Panel, Menu} from '@/components'

const { Item, SubMenu } = Menu;
export default function () {
  return (
    <div>
      <Panel>
        <>
          <Menu defaultSelectedId="1-1">
            <SubMenu
                id="sub1"
                title="1"
            >
              <Item id="1-1">1-1</Item>
              <Item id="1-2">1-2</Item>
            </SubMenu>
            <SubMenu id="sub2"
                title="2"
            >
              <Item id="2-1">2-1</Item>
              <Item id="2-2">2-2</Item>
            </SubMenu>
            <Item id="3">3</Item>
            <Item id="4">4</Item>
          </Menu>
        </>
      </Panel>
    </div>
  )
}