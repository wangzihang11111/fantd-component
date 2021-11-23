import React  from 'react';
import { Button, Space } from '@/components'

export default function () {
  return (
      <Space>
        <Button type="danger">危险按钮</Button>
        <Button type="primary">标准按钮</Button>
        <Button disabled
            type="primary"
        >禁用按钮</Button>
      </Space>
  )
}