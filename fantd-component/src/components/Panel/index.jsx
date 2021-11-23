import React, {useState} from 'react';
import {
  CopyOutlined
} from '@ant-design/icons';
import styles from './index.scss'

export function Panel(props) {
  const { code = '暂无代码', children } = props
  const [speadDisplay, setSpeadDisplay] = useState(false)
  const toolbarItemList = [
    {
      name: '复制代码',
      title: '复制代码',
      icon: <CopyOutlined />,
      click: () => {
        const input = document.createElement('input')
        document.body.appendChild(input)
        input.value = code; // 修改文本框的内容
        input.select(); // 选中文本
        document.execCommand('copy');
        document.body.removeChild(input);
      }
    },
    {
      name: speadDisplay ? '收起代码' : '展示代码',
      title: speadDisplay ? '收起代码' : '展示代码',
      icon: speadDisplay ? '</>' : '<>',
      click: () => {
        setSpeadDisplay(!speadDisplay)
      }
    }
  ]
  return (
    <div className={styles.panel}>
      <div className={styles.content}>
        {children}
      </div>
      <div className={styles.toolbar}>
        {
          toolbarItemList.map(toolbarItem => (
            <span className={styles.icon}
                key={toolbarItem.name}
                onClick={toolbarItem.click}
                title={toolbarItem.title}
            >{toolbarItem.icon}</span>
          ))
        }
      </div>
      <div className={`${styles.speadContainer} ${speadDisplay ? '' : styles.hidden}`}>
        {code}
      </div>
    </div>
  )
}