import React  from 'react';
import { Panel, Button, Space } from '@/components'

export default function () {
  const codeStr = `
    import { Button } from 'antd';

    ReactDOM.render(
      <>
        <Button type="danger">危险按钮</Button>
        <br/>
        <Button type="primary">标准按钮</Button>
        <br/>
        <Button disabled
          type="primary"
        >禁用按钮</Button>
      </>,
      mountNode,
    );
  `
  return (
    <Panel code={codeStr}>
      <Space>
        <Button type="danger">危险按钮</Button>
        <Button type="primary">标准按钮</Button>
        <Button disabled
            type="primary"
        >禁用按钮</Button>
      </Space>
    </Panel>
  )
}