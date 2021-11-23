import React  from 'react';
import {Panel, Row, Col} from '@/components'
import './index.scss'

export default function () {
  return (
    <div className="grid-demo">
      <Panel>
        <Row gutter={16}>
          <Col span={12}>
            <div>12</div>
          </Col>
          <Col span={12}>
            <div>12</div>
          </Col>
        </Row>
        <Row>
          <Col span={4}>
            <div>4</div>
          </Col>
          <Col span={12}>
            <div>12</div>
          </Col>
          <Col span={6}>
            <div>6</div>
          </Col>
          <Col span={2}>
            <div>2</div>
          </Col>
        </Row>
      </Panel>
    </div>
  )
}