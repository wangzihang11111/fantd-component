import React  from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import Home from '@/pages';
import Container from '@/pages/Container/index';
import ComponentIndex from '@/pages/components';
import Button from '@/pages/components/Button';
import Divider from '@/pages/components/Divider';
import Space from '@/pages/components/Space';
import Grid from '@/pages/components/Grid';
import Layout from '@/pages/components/Layout';
import Menu from '@/pages/components/Menu';
import DocumentIndex from '@/pages/documents';
import Compile from '@/pages/documents/compile';

const data = [
  {
    name: 'home',
    title: '主页',
    path: '/home',
    component: <Home />
  },
  {
    name: 'document',
    title: '文档',
    path: '/document',
    children: [
      {
        name: 'documentIndex',
        title: '文档总览',
        path: '/document/index',
        component: <DocumentIndex />
      },
      {
        name: 'compile',
        title: '编译原理',
        path: '/document/compile',
        component: <Compile />
      }
    ]
  },
  {
    name: 'component',
    title: '组件',
    path: '/component',
    children: [
      {
        name: 'componentIndex',
        title: '组件总览',
        path: '/component/index',
        component: <ComponentIndex />
      },
      {
        name: 'componentCommon',
        title: '通用',
        children: [
          {
            name: 'componentButton',
            title: '按钮',
            desc: 'Button',
            path: '/component/button',
            component: <Button />
          }
        ]
      },
      {
        name: 'componentLayout',
        title: '布局',
        children: [
          {
            name: 'componentDivider',
            title: '分割线',
            desc: 'Divider',
            path: '/component/divider',
            component: <Divider />
          },
          {
            name: 'componentSpace',
            title: '间距',
            desc: 'Space',
            path: '/component/space',
            component: <Space />
          },
          {
            name: 'componentGrid',
            title: '栅格',
            desc: 'Grid',
            path: '/component/grid',
            component: <Grid />
          },
          {
            name: 'componentLayout',
            title: '布局',
            desc: 'Layout',
            path: '/component/layout',
            component: <Layout />
          }
        ]
      },
      {
        name: 'componentNav',
        title: '导航',
        children: [
          {
            name: 'componentMenu',
            title: '菜单',
            desc: 'Menu',
            path: '/component/menu',
            component: <Menu />
          }
        ]
      }
    ]
  }
];
ReactDOM.render((
  <BrowserRouter>
    <Container data={data} />
  </BrowserRouter>
), document.getElementById('container'));