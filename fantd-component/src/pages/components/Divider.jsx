import React  from 'react';
import {Panel, Divider} from '@/components'

export default function () {
  return (
    <div>
      <Panel>
        <>
          <p>11111</p>
          <Divider/>
          <p>222222</p>
          <p>11111</p>
          <Divider dashed/>
          <p>222222</p>
          <a>11111</a>
          <Divider type="vertical"/>
          <a>222222</a>
        </>
      </Panel>
    </div>
  )
}