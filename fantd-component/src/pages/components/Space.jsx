import React  from 'react';
import {Panel, Space, Button } from '@/components'

export default function () {
  return (
    <div>
      <Panel>
        <Space direction="vertical">
          <Space>
            <Button type="primary">111</Button>
            <Button type="danger">222</Button>
          </Space>
          <Space direction="vertical">
            <Button type="danger">点我</Button>
            <Button type="primary">点我</Button>
            <Button disabled
                type="primary"
            >点我</Button>
          </Space>
        </Space>
      </Panel>
    </div>
  )
}